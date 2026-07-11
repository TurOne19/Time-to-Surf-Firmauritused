interface IconProps {
  className?: string;
}

// Restrained line-art creatures echoing the beach setting — used as quiet
// corner accents, never as clip-art-style illustration blocks.

export function Starfish({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 4 L38 24 L58 18 L44 34 L56 50 L36 42 L32 60 L28 42 L8 50 L20 34 L6 18 L26 24 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="3.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Seagull({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 24C10 8 20 8 26 18C30 10 36 8 40 16C44 8 50 10 54 18C60 8 70 8 78 24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Crab({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="26" rx="16" ry="11" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 20 L6 10 M46 20 L58 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 30 L2 34 M50 30 L62 34" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 34 L10 42 M46 34 L54 42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="26" cy="21" r="1.6" fill="currentColor" />
      <circle cx="38" cy="21" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Shell({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 4C34 4 42 16 42 28C42 32 38 36 24 36C10 36 6 32 6 28C6 16 14 4 24 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M24 4V32M16 10V33M32 10V33" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
