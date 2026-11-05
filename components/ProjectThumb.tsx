/**
 * Placeholder project thumbnail in the Ringside style, used until real
 * screenshots exist. Sand ground, a navy slab with a cream pixel staircase,
 * and the project's initial in Jersey 10.
 *
 * <ProjectThumb initial="P" variant={0} />
 * variant 0–2 shifts the composition so cards next to each other differ.
 */
type Props = { initial: string; variant?: 0 | 1 | 2; label?: string };

export default function ProjectThumb({ initial, variant = 0, label }: Props) {
  const flip = variant === 1;
  const slabX = flip ? 0 : 176;
  const steps = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="ds-thumb" role="img" aria-label={label ?? `${initial} project thumbnail`}>
      <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect className="ds-thumb__navy" x={slabX} y={variant === 2 ? 40 : -4} width="144" height={variant === 2 ? 144 : 148} />
        <rect className="ds-thumb__ink" x={flip ? 152 : 128} y="128" width="56" height="40" />
        {steps.map((i) => (
          <rect
            key={i}
            className="ds-thumb__cream"
            x={slabX + 24 + i * 16}
            y={(variant === 2 ? 152 : 112) - i * 16}
            width="16"
            height="16"
          />
        ))}
        <text className="ds-thumb__initial" x={flip ? 296 : 24} y="150" textAnchor={flip ? 'end' : 'start'}>
          {initial}
        </text>
      </svg>
    </div>
  );
}
