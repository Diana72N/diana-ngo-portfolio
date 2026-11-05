/*
 * Hero Fight — pixel boxing mini-game engine (framework-free).
 * startHeroFight(root) wires up the markup rendered by HeroFight.tsx and
 * returns a destroy() function. Call it from a client-side effect only.
 */
export function startHeroFight(root) {
  if (!root) return () => {};

  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const hud = root.querySelector('.fight-hud');
  const bannerEl = root.querySelector('.fight-banner');
  const bannerBig = bannerEl.querySelector('.big');
  const bannerSub = bannerEl.querySelector('.sub');
  const roundEl = root.querySelector('.fight-round');
  const koEl = root.querySelector('.fight-ko');
  const hintEl = root.querySelector('.fight-hint');

  // ---- World (low-res pixels, scaled up crisply by CSS) ----
  const W = 160, H = 90, GROUND = 78;
  const LEFT = 16, RIGHT = 144, REACH = 22, MIN_GAP = 14;
  const HOME_P = 54, HOME_C = 106;
  canvas.width = W; canvas.height = H;
  ctx.imageSmoothingEnabled = false;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (matchMedia('(hover: none)').matches) hintEl.textContent = 'Tap to punch';

  // ---- Palette (edit to match your site) ----
  const TEAM = {
    blue: { main: '#3f7be0', dark: '#24509f', light: '#8fbaff' },
    red:  { main: '#e0523f', dark: '#a3301f', light: '#ff9a80' },
  };
  const SKIN = { base: '#e9b58c', shade: '#c78f67' };
  const INK = '#141018', WHITE = '#f4efe6', SHOE = '#2b2731', GOLD = '#f2b84b';
  const HAIR = '#16121a', HAIR_DARK = '#7a7290'; // black hair + a cool highlight so it reads on the dark arena
  const HAIRSTYLE = { blue: 'ponytail', red: 'none' };

  const ROUNDS = 1; // rounds per match

  // ---- Timings (ms) ----
  const P = { windup: 70, punch: 110, recover: 140, hit: 240 };   // you
  const C = { windup: 300, punch: 120, recover: 280, block: 420, hit: 260 }; // red

  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function makeFighter(team, x, dir, phaseOff) {
    return { team, x, dir, phaseOff, hp: 100, hpLag: 100, state: 'idle', t: 0, dur: 0,
      flash: 0, countering: false, nextAttack: 1200, mood: 'hold', moodT: 0 };
  }
  const player = makeFighter('blue', HOME_P, 1, 0);
  const cpu = makeFighter('red', HOME_C, -1, 1.7);

  function setState(f, s, dur = 0) { f.state = s; f.t = 0; f.dur = dur; }
  const dist = () => cpu.x - player.x;
  const free = f => f.state === 'idle' || f.state === 'walk';

  const game = { phase: 'attract', round: 1, results: [], timer: 0, introStep: 0, kos: 0, lastInput: -1e9, shake: 0 };
  let target = HOME_P, interacted = false, now = 0;
  const particles = [];
  const timers = new Set();
  const memory = []; // timestamps of your recent punches (red "learns" from these)

  // ---------------- Input ----------------
  const pointerX = e => { const r = canvas.getBoundingClientRect(); return (e.clientX - r.left) / r.width * W; };

  const onMove = e => {
    if (e.pointerType === 'touch') return;
    target = pointerX(e); interacted = true; game.lastInput = now;
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  const onDown = e => {
    if (e.pointerType === 'touch') { target = pointerX(e); interacted = true; }
    tryPunch();
  };
  canvas.addEventListener('pointerdown', onDown);

  const onKey = e => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); tryPunch(); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault(); interacted = true; game.lastInput = now;
      target = clamp(player.x + (e.key === 'ArrowLeft' ? -12 : 12), LEFT, RIGHT);
    }
  };
  canvas.addEventListener('keydown', onKey);

  function tryPunch() {
    game.lastInput = now;
    if (game.phase === 'attract' || game.phase === 'final') { startMatch(); return; }
    if (game.phase !== 'fight') return;
    if (free(player) || (player.state === 'recover' && player.t > 60)) {
      setState(player, 'windup', P.windup);
      cpuRead();
    }
  }

  // ---------------- Red's brain ----------------
  // Pattern-based: the more you spam punches, the more red blocks and counters.
  function cpuRead() {
    memory.push(now);
    while (memory.length && now - memory[0] > 2500) memory.shift();
    if (!free(cpu) || dist() > REACH + 6) return;
    const spam = Math.min(1, (memory.length - 1) / 5);
    const blockChance = Math.min(0.85, 0.15 + 0.6 * spam + (game.round - 1) * 0.06);
    if (Math.random() < blockChance) {
      setState(cpu, 'block', C.block);
      cpu.countering = Math.random() < 0.3 + 0.45 * spam;
    }
  }

  function cpuAttack(fast) {
    setState(cpu, 'windup', fast ? 150 : Math.max(190, C.windup - (game.round - 1) * 45));
  }

  // ---------------- Combat ----------------
  function resolvePlayerPunch() {
    if (game.phase !== 'fight' || dist() > REACH || cpu.state === 'ko') return;
    const x = player.x + 14, y = GROUND - 23;
    if (cpu.state === 'block') {
      pop('BLOCK', x, y - 9, 'block'); burst(x, y, WHITE, 4);
      cpu.x = Math.min(RIGHT, cpu.x + 1);
      return;
    }
    const counter = cpu.state === 'windup';
    hit(cpu, counter ? 14 : 8, x, y);
    if (counter && cpu.state !== 'ko') pop('COUNTER!', x, y - 9, 'counter');
  }

  function resolveCpuPunch() {
    if (game.phase !== 'fight' || dist() > REACH || player.state === 'ko') return;
    const x = cpu.x - 14, y = GROUND - 23;
    const counter = player.state === 'windup';
    hit(player, counter ? 16 : 11, x, y);
    if (counter && player.state !== 'ko') pop('COUNTERED', x, y - 9, 'counter');
  }

  function hit(f, amt, x, y) {
    f.hp = Math.max(0, f.hp - amt);
    f.flash = 160; f.countering = false;
    burst(x, y, GOLD, 7);
    if (!reduceMotion) game.shake = 110;
    if (f.hp <= 0) { knockout(f); return; }
    setState(f, 'hit', f === player ? P.hit : C.hit);
    f.x -= f.dir * 3;
    keepApart();
  }

  function keepApart() {
    cpu.x = clamp(cpu.x, LEFT + MIN_GAP, RIGHT);
    player.x = clamp(player.x, LEFT, cpu.x - MIN_GAP);
  }

  function knockout(loser) {
    const winner = loser === player ? cpu : player;
    setState(loser, 'ko'); setState(winner, 'win');
    game.results.push(winner.team);
    if (winner === player) { game.kos++; koEl.textContent = 'KO ×' + game.kos; }
    game.phase = 'ko'; game.timer = 2200;
    if (!reduceMotion) game.shake = 260;
    showBanner('K.O.!', winner === player ? 'YOU TAKE ROUND ' + game.round : 'RED TAKES ROUND ' + game.round);
  }

  // ---------------- Match flow ----------------
  function startMatch() { game.results = []; game.round = 1; memory.length = 0; startRound(); }

  function startRound() {
    for (const f of [player, cpu]) { f.hp = 100; f.hpLag = 100; f.flash = 0; f.countering = false; setState(f, 'idle'); }
    player.x = HOME_P; cpu.x = HOME_C;
    game.phase = 'intro'; game.timer = 1500; game.introStep = 0;
    roundEl.textContent = 'ROUND ' + game.round;
    showBanner('ROUND ' + game.round, '');
  }

  function resetToAttract() {
    game.phase = 'attract'; game.round = 1; game.results = []; memory.length = 0;
    for (const f of [player, cpu]) { f.hp = 100; f.hpLag = 100; f.flash = 0; setState(f, 'idle'); }
    cpu.x = HOME_C; keepApart();
    roundEl.textContent = 'ROUND 1';
    hideBanner();
  }

  function updatePhase(dt) {
    if (game.phase === 'intro') {
      game.timer -= dt;
      if (game.introStep === 0 && game.timer <= 550) { game.introStep = 1; showBanner('BOX!', ''); }
      if (game.timer <= 0) { game.phase = 'fight'; hideBanner(); cpu.nextAttack = rand(700, 1300); }
    } else if (game.phase === 'ko') {
      game.timer -= dt;
      if (game.timer <= 0) {
        if (game.round < ROUNDS) { game.round++; startRound(); }
        else {
          const you = game.results.filter(r => r === 'blue').length;
          const won = you > ROUNDS / 2;
          game.phase = 'final'; game.timer = 3400;
          setState(player, won ? 'win' : 'idle');
          setState(cpu, won ? 'idle' : 'win');
          showBanner(won ? 'YOU WIN!' : 'RED WINS', you + ' – ' + (ROUNDS - you));
          root.dispatchEvent(new CustomEvent(won ? 'herofight:win' : 'herofight:lose')); // HeroFight.tsx shows the result overlay
        }
      }
    } else if (game.phase === 'final') {
      game.timer -= dt;
      if (game.timer <= 0) resetToAttract();
    }
  }

  // ---------------- Per-fighter updates ----------------
  function stepStates(f, isPlayer) {
    if (!f.dur || f.t < f.dur) return;
    const T = isPlayer ? P : C;
    switch (f.state) {
      case 'windup':
        setState(f, 'punch', T.punch);
        isPlayer ? resolvePlayerPunch() : resolveCpuPunch();
        break;
      case 'punch': setState(f, 'recover', T.recover); break;
      case 'recover': case 'hit': setState(f, 'idle'); break;
      case 'block': {
        const counter = f.countering; f.countering = false;
        setState(f, 'idle');
        if (counter && game.phase === 'fight' && dist() <= REACH + 4) cpuAttack(true);
        break;
      }
    }
  }

  function updatePlayer(s) {
    stepStates(player, true);
    if (!interacted || !free(player) || game.phase === 'ko' || game.phase === 'final') return;
    const tx = clamp(target, LEFT, cpu.x - MIN_GAP);
    const diff = tx - player.x;
    player.x += Math.sign(diff) * Math.min(Math.abs(diff), 75 * s);
    player.state = Math.abs(diff) > 1 ? 'walk' : 'idle';
  }

  function updateCpu(dt, s) {
    stepStates(cpu, false);
    if (game.phase !== 'fight' || !free(cpu)) return;
    const active = now - game.lastInput < 6000; // stops attacking if you walk away
    cpu.moodT -= dt;
    if (cpu.moodT <= 0) {
      cpu.mood = Math.random() < 0.45 + 0.12 * game.round ? 'press' : 'hold';
      cpu.moodT = rand(700, 1600);
    }
    const want = player.x + (cpu.mood === 'press' && active ? 19 : 34);
    const tx = clamp(want, player.x + MIN_GAP, RIGHT);
    const diff = tx - cpu.x;
    cpu.x += Math.sign(diff) * Math.min(Math.abs(diff), (30 + 8 * game.round) * s);
    cpu.state = Math.abs(diff) > 1 ? 'walk' : 'idle';
    if (active) {
      cpu.nextAttack -= dt;
      if (cpu.nextAttack <= 0 && dist() <= REACH) {
        cpuAttack(false);
        cpu.nextAttack = rand(900, 2000) - game.round * 150;
      }
    }
  }

  function update(dt) {
    const s = dt / 1000;
    for (const f of [player, cpu]) {
      f.t += dt;
      if (f.flash > 0) f.flash -= dt;
      if (f.hpLag > f.hp && f.flash <= 0) f.hpLag = Math.max(f.hp, f.hpLag - 45 * s);
      if (f.hpLag < f.hp) f.hpLag = f.hp;
    }
    updatePhase(dt);
    updatePlayer(s);
    updateCpu(dt, s);
    keepApart();

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= dt;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      p.x += p.vx * s; p.y += p.vy * s; p.vy += 220 * s * p.g;
    }
    // camera flashes in the crowd
    if (Math.random() < dt / 380) particles.push({ x: rand(2, W - 2), y: rand(22, 38), vx: 0, vy: 0, g: 0, life: 90, color: '#fff', size: 1 });
    if (game.shake > 0) game.shake -= dt;
  }

  // ---------------- Effects ----------------
  function burst(x, y, color, n) {
    for (let i = 0; i < n; i++) particles.push({ x, y, vx: rand(-55, 55), vy: rand(-70, -15), g: 1,
      life: rand(160, 280), color, size: Math.random() < 0.4 ? 2 : 1 });
  }

  function pop(text, x, y, kind) {
    const el = document.createElement('div');
    el.className = 'fight-pop ' + (kind || '');
    el.textContent = text;
    el.style.left = (x / W * 100) + '%';
    el.style.top = (y / H * 100) + '%';
    hud.appendChild(el);
    timers.add(setTimeout(() => { el.remove(); }, 760));
  }

  function showBanner(big, sub) {
    bannerBig.textContent = big; bannerSub.textContent = sub || '';
    bannerEl.classList.remove('show'); void bannerEl.offsetWidth; bannerEl.classList.add('show');
  }
  function hideBanner() { bannerEl.classList.remove('show'); }

  // ---------------- Drawing ----------------
  function buildBackground() {
    const bg = document.createElement('canvas'); bg.width = W; bg.height = H;
    const b = bg.getContext('2d');
    let seed = 7; const sr = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    const bands = ['#141119', '#18141f', '#1c1725', '#211b2c', '#261f33'];
    for (let y = 0; y < 64; y++) { b.fillStyle = bands[Math.min(4, Math.floor(y / 13))]; b.fillRect(0, y, W, 1); }

    const crowd = ['#3a3048', '#463a56', '#2f2840', '#55476a', '#3f3550'];
    for (let row = 0; row < 4; row++) {
      const y = 22 + row * 5;
      for (let x = (row % 2) * 3 - 2; x < W; x += 6) {
        b.fillStyle = crowd[Math.floor(sr() * crowd.length)];
        const jy = sr() < 0.3 ? -1 : 0;
        b.fillRect(x + 1, y + jy, 3, 3); b.fillRect(x, y + 3 + jy, 5, 3);
      }
    }
    // spotlight
    b.fillStyle = 'rgba(255, 236, 200, 0.05)';
    for (let y = 0; y < 64; y++) { const half = 10 + y * 0.9; b.fillRect(80 - half, y, half * 2, 1); }

    // mat
    b.fillStyle = '#b9ab8f'; b.fillRect(0, 62, W, 3);
    b.fillStyle = '#d6cab1'; b.fillRect(0, 65, W, 19);
    b.fillStyle = '#cbbea3'; for (let y = 68; y < 84; y += 5) b.fillRect(0, y, W, 1);
    // corner posts
    b.fillStyle = TEAM.blue.main; b.fillRect(5, 36, 4, 30);
    b.fillStyle = TEAM.red.main; b.fillRect(W - 9, 36, 4, 30);
    b.fillStyle = WHITE; b.fillRect(5, 35, 4, 2); b.fillRect(W - 9, 35, 4, 2);
    // ropes
    for (const y of [41, 48, 55]) {
      b.fillStyle = WHITE; b.fillRect(9, y, W - 18, 1);
      b.fillStyle = 'rgba(0,0,0,.35)'; b.fillRect(9, y + 1, W - 18, 1);
    }
    // apron
    b.fillStyle = '#0e0c12'; b.fillRect(0, 84, W, 6);
    b.fillStyle = TEAM.blue.main; b.fillRect(0, 84, W / 2, 1);
    b.fillStyle = TEAM.red.main; b.fillRect(W / 2, 84, W / 2, 1);
    return bg;
  }
  const bg = buildBackground();

  // Sprites are drawn from rectangles here. To use your own sprite sheet later,
  // replace the body of drawFighter() with ctx.drawImage(sheet, frameX, frameY, ...)
  // keyed off f.state ('idle','walk','windup','punch','recover','block','hit','ko','win').
  function drawFighter(f, time) {
    const c = TEAM[f.team], d = f.dir, ox = Math.round(f.x), oy = GROUND, st = f.state;
    const flashing = f.flash > 0 && Math.floor(time / 45) % 2 === 0;
    const R = (dx, dy, w, h, col) => {
      if (w <= 0 || h <= 0) return;
      ctx.fillStyle = flashing ? '#ffffff' : col;
      ctx.fillRect(d === 1 ? ox + dx : ox - dx - w, oy + dy, w, h);
    };

    ctx.fillStyle = 'rgba(0,0,0,.28)';
    if (st === 'ko') {
      ctx.fillRect(d === 1 ? ox - 18 : ox - 10, oy - 1, 28, 2);
      // lying on the canvas
      R(9, -5, 2, 4, SHOE); R(2, -4, 7, 3, SKIN.base);
      R(-3, -5, 6, 4, c.main); R(-3, -5, 1, 4, WHITE);
      R(-11, -5, 8, 4, c.main); R(-11, -5, 2, 4, SKIN.base); // tank top
      R(-17, -6, 6, 5, SKIN.base); R(-17, -6, 2, 5, c.main); R(-14, -4, 2, 1, INK);
      R(-9, -8, 4, 3, c.main); R(-6, -2, 4, 3, c.dark);
      if (HAIRSTYLE[f.team] === 'ponytail') { R(-21, -5, 4, 2, HAIR); R(-18, -5, 1, 2, c.light); }
      for (let i = 0; i < 3; i++) { // dizzy stars
        const a = time / 200 + i * 2.1;
        R(-14 + Math.round(Math.cos(a) * 4), -11 + Math.round(Math.sin(a) * 1.5), 1, 1, GOLD);
      }
      return;
    }
    ctx.fillRect(ox - 9, oy - 1, 18, 2);

    const breathing = ['idle', 'walk', 'block', 'win'].includes(st);
    const by = (breathing && Math.sin(time / 300 + f.phaseOff) > 0.2 ? 1 : 0) - (st === 'win' ? Math.floor(time / 180) % 2 : 0);
    const ux = { windup: -1, punch: 2, recover: 1, hit: -2 }[st] || 0;
    const step = st === 'walk' ? Math.floor(time / 120) % 2 : 0;

    // legs, socks, shoes
    R(-4 - step, -9, 3, 7, SKIN.shade); R(1 + step, -9, 3, 7, SKIN.base);
    R(-4 - step, -3, 3, 1, WHITE); R(1 + step, -3, 3, 1, WHITE);
    R(-5 - step, -2, 4, 2, SHOE); R(1 + step, -2, 5, 2, SHOE);
    // trunks
    R(-5, -14, 11, 6, c.main); R(-5, -14, 11, 1, WHITE); R(4, -13, 1, 5, c.light);
    // torso, neck, head + headgear
    // tank top in team color: skin shows at the neckline and armholes
    R(-4 + ux, -22 + by, 9, 8, c.main);
    R(-4 + ux, -19 + by, 1, 5, c.dark);                 // side shading
    R(-4 + ux, -22 + by, 2, 3, SKIN.shade);             // back shoulder
    R(3 + ux, -22 + by, 2, 3, SKIN.base);               // front shoulder
    R(-1 + ux, -22 + by, 3, 1, SKIN.base);              // neckline
    R(-4 + ux, -15 + by, 9, 1, c.dark);                 // hem, separates top from shorts
    R(0 + ux, -21 + by, 3, 1, c.light);                 // chest highlight
    R(-1 + ux, -24 + by, 3, 2, SKIN.shade);

    // hair swings opposite to the body's motion
    const sway = (st === 'windup' || st === 'punch') ? -1 : st === 'hit' ? 1 : step;
    const style = HAIRSTYLE[f.team];

    R(-3 + ux, -30 + by, 7, 6, SKIN.base);
    R(-3 + ux, -31 + by, 7, 2, c.main); R(-3 + ux, -29 + by, 2, 4, c.main);
    R(2 + ux, -28 + by, 1, 1, INK);

    if (style === 'ponytail') { // one long tail out the back, hanging down
      R(-5 + ux, -31 + by, 2, 3, HAIR);
      R(-6 + ux, -31 + by, 1, 3, c.light); // hair tie
      R(-9 + ux + sway, -31 + by, 3, 4, HAIR);
      R(-9 + ux + sway, -27 + by, 2, 3, HAIR);
      R(-8 + ux + sway, -30 + by, 1, 6, HAIR_DARK); // shine
      R(-9 + ux + sway * 2, -24 + by, 1, 2, HAIR);
    }

    // gloves
    const reachExt = clamp(Math.round(Math.abs(dist())) - 9, 6, 13);
    let lead = [5, -25], rear = [2, -21];
    switch (st) {
      case 'windup': lead = f === cpu ? [-1, -24] : [1, -24]; break;
      case 'punch': lead = [reachExt, -25]; break;
      case 'recover': lead = [Math.min(8, reachExt), -25]; break;
      case 'block': lead = [5, -30]; rear = [5, -26]; break;
      case 'hit': lead = [2, -22]; rear = [-1, -20]; break;
      case 'win': lead = [2, -38]; rear = [-4, -37]; break;
    }
    const lx = lead[0] + ux, ly = lead[1] + by, rx = rear[0] + ux, ry = rear[1] + by;

    if (st === 'win') {
      R(rx + 1, ry + 4, 2, (-22 + by) - (ry + 4), SKIN.shade);
      R(lx + 1, ly + 4, 2, (-22 + by) - (ly + 4), SKIN.base);
    } else {
      R(-2 + ux, -21 + by, 2, 4, SKIN.shade);
    }
    R(rx, ry, 4, 4, c.dark);
    if (st === 'punch' || st === 'recover') { R(3 + ux, ly + 1, lx - (3 + ux), 2, SKIN.base); R(lx - 1, ly + 1, 1, 2, WHITE); }
    R(lx, ly, 4, 4, c.main); R(lx + 1, ly, 2, 1, c.light);

    // red telegraphs its punch so you can step out of range
    if (st === 'windup' && f === cpu) { ctx.fillStyle = GOLD; ctx.fillRect(ox, oy - 43 + by, 1, 3); ctx.fillRect(ox, oy - 39 + by, 1, 1); }
  }

  function drawBar(x, y, w, h, f, side) {
    ctx.fillStyle = '#000'; ctx.fillRect(x - 1, y - 1, w + 2, h + 2);
    ctx.fillStyle = '#3a1f2a'; ctx.fillRect(x, y, w, h);
    const fill = (ww, col, hh = h) => { ctx.fillStyle = col; ctx.fillRect(side === 'left' ? x : x + w - ww, y, ww, hh); };
    const cur = Math.round(w * f.hp / 100);
    fill(Math.round(w * f.hpLag / 100), WHITE);
    fill(cur, TEAM[f.team].main);
    fill(cur, 'rgba(255,255,255,.35)', 1);
  }

  function drawHUD() {
    drawBar(6, 4, 62, 5, player, 'left');
    drawBar(W - 68, 4, 62, 5, cpu, 'right');
    for (let i = 0; i < ROUNDS; i++) {
      const x = W / 2 - (ROUNDS * 6 - 2) / 2 + i * 6, r = game.results[i];
      ctx.fillStyle = '#000'; ctx.fillRect(x - 1, 4, 6, 6);
      ctx.fillStyle = r ? TEAM[r].main : '#3a3346'; ctx.fillRect(x, 5, 4, 4);
    }
  }

  function render(time) {
    ctx.save();
    if (game.shake > 0) ctx.translate(Math.round(rand(-1, 1)), Math.round(rand(-1, 1)));
    ctx.drawImage(bg, 0, 0);
    drawFighter(cpu, time);
    drawFighter(player, time);
    for (const p of particles) { ctx.fillStyle = p.color; ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size); }
    ctx.restore();
    drawHUD();
  }

  // ---------------- Loop (pauses when scrolled off-screen) ----------------
  let last = performance.now(), running = true, destroyed = false, rafId;
  function frame(t) {
    if (destroyed) return;
    const dt = Math.min(50, t - last); last = t; now = t;
    update(dt); render(t);
    rafId = requestAnimationFrame(frame);
  }
  const io = new IntersectionObserver(([entry]) => {
    if (destroyed) return;
    if (entry.isIntersecting && !running) { running = true; last = performance.now(); rafId = requestAnimationFrame(frame); }
    else if (!entry.isIntersecting && running) { running = false; cancelAnimationFrame(rafId); }
  });
  io.observe(canvas);
  rafId = requestAnimationFrame(frame);

  return function destroy() {
    destroyed = true; running = false;
    cancelAnimationFrame(rafId);
    io.disconnect();
    window.removeEventListener('pointermove', onMove);
    canvas.removeEventListener('pointerdown', onDown);
    canvas.removeEventListener('keydown', onKey);
    timers.forEach(clearTimeout); timers.clear();
  };
}
