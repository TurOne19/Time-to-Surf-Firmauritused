interface Props {
  variant?: "onSand" | "onInk";
  className?: string;
}

// A recurring signature motif: the sagging string of bulb-lights from the
// hero photograph, redrawn as a thin divider between sections instead of a
// generic hairline rule.
export default function StringLights({ variant = "onSand", className = "" }: Props) {
  const cable = variant === "onSand" ? "#0C2630" : "#EFE3CB";
  const bulbGlass = variant === "onSand" ? "#0C2630" : "#EFE3CB";
  const bulbGold = "#D9A94E";

  const bulbXs = [80, 220, 360, 500, 640, 780, 920, 1060, 1200, 1340];

  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1400 90"
        preserveAspectRatio="none"
        className="w-full h-14 md:h-16"
      >
        <path
          d="M0,10 Q700,90 1400,10"
          fill="none"
          stroke={cable}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        {bulbXs.map((x, i) => {
          // approximate y along the same quadratic curve
          const t = x / 1400;
          const y = 2 * (1 - t) * t * 90 + t * t * 10 + (1 - t) * (1 - t) * 10;
          return (
            <g key={i} className="bulb-glow" style={{ animationDelay: `${i * 0.35}s` }}>
              <circle cx={x} cy={y + 6} r="7" fill={bulbGold} fillOpacity="0.18" />
              <circle cx={x} cy={y + 6} r="3.4" fill={bulbGold} stroke={bulbGlass} strokeOpacity="0.25" strokeWidth="0.6" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
