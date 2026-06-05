type LogoProps = { size?: number; className?: string };

// RicardoHQ mark: rounded icon tile, warm-orange frame, centered "/RHQ" in mono.
// The icon carries the orange accent; pair it with a plain off-white wordmark.
export function Logo({ size = 38, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="RicardoHQ logo"
    >
      <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="10" fill="#16140f" stroke="#d2562f" strokeWidth="1.5" />
      <text
        x="20.2"
        y="26"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono), ui-monospace, monospace" }}
        fontWeight="700"
        fontSize="11.5"
        letterSpacing="-0.6"
      >
        <tspan fill="#d2562f">/</tspan>
        <tspan fill="#f4f1ee">RHQ</tspan>
      </text>
    </svg>
  );
}

export default Logo;
