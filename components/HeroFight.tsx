'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { startHeroFight } from './heroFightEngine';

// Long enough to read the result banner and stop punching before the overlay's buttons appear.
const RESULT_OVERLAY_DELAY = 1000;

type Result = 'win' | 'lose';

/**
 * Interactive pixel boxing game for the right side of the homepage hero.
 * Cursor moves the blue boxer (black ponytail); click / tap punches.
 * Red boxer learns: the more you spam, the more it blocks and counters.
 * One round per match, then it resets. Pauses automatically when scrolled off-screen.
 * When the match ends, an overlay covers the game: "YOU WIN!" or, after a loss,
 * Diana's motto, each with links to play again and to the About page.
 *
 * Styles: styles/hero-fight.css. Fonts: needs the --font-arcade variable
 * (Press Start 2P) from fonts.ts on a parent element.
 */
export default function HeroFight() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firstActionRef = useRef<HTMLElement | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const destroy = startHeroFight(rootRef.current);
    return destroy;
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let timer: ReturnType<typeof setTimeout>;
    const show = (r: Result) => () => { timer = setTimeout(() => setResult(r), RESULT_OVERLAY_DELAY); };
    const onWin = show('win'), onLose = show('lose');
    root.addEventListener('herofight:win', onWin);
    root.addEventListener('herofight:lose', onLose);
    return () => {
      root.removeEventListener('herofight:win', onWin);
      root.removeEventListener('herofight:lose', onLose);
      clearTimeout(timer);
    };
  }, []);

  // Keyboard players are focused on the canvas underneath; move them onto the overlay.
  useEffect(() => {
    if (result) firstActionRef.current?.focus();
  }, [result]);

  const playAgain = () => {
    setResult(null);
    canvasRef.current?.focus();
  };

  const won = result === 'win';
  const setFirstAction = (el: HTMLElement | null) => { firstActionRef.current = el; };

  return (
    <div className="hero-fight" data-hero-fight ref={rootRef}>
      <p className="fight-hint">Click to punch</p>
      <div className="fight-screen">
        <canvas
          ref={canvasRef}
          tabIndex={result ? -1 : 0}
          role="img"
          aria-label="Pixel boxing mini-game. Move your cursor to move the blue boxer and click to punch. Keyboard: arrow keys move, space punches."
        />
        <div className="fight-hud" aria-hidden="true">
          <span className="fight-name you">YOU</span>
          <span className="fight-round">ROUND 1</span>
          <span className="fight-name red">RED</span>
          <span className="fight-ko">KO ×0</span>
          <div className="fight-banner">
            <span className="big" />
            <span className="sub" />
          </div>
        </div>
        {result && (
          <div className="fight-result" role="group" aria-label={won ? 'You win' : 'Red wins'}>
            <div className="fight-result__photo">
              <Image src="/images/about-boxing.jpg" alt="Diana boxing" fill sizes="640px" />
            </div>
            <div className="fight-result__body">
              {won ? (
                <>
                  <p className="fight-result__title">YOU WIN!</p>
                  <Link ref={setFirstAction} href="/about" className="ds-btn ds-btn--secondary fight-result__cta">Learn more about me</Link>
                  <button type="button" className="fight-result__link" onClick={playAgain}>Play again</button>
                </>
              ) : (
                <>
                  <blockquote className="fight-result__quote">&quot;Always get back up!&quot;</blockquote>
                  <button ref={setFirstAction} type="button" className="ds-btn ds-btn--secondary fight-result__cta" onClick={playAgain}>Play again</button>
                  <Link href="/about" className="fight-result__link">Learn more about me</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
