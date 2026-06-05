type LogoProps = { size?: number; className?: string };

// RicardoHQ mark: rounded icon tile, warm-orange frame, centered "/RHQ" in mono.
export function Logo({ size = 40, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="RicardoHQ logo"
    >
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#141414" stroke="#d2562f" strokeWidth="1.5" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono), ui-monospace, monospace" }}
        fontWeight="700"
        fontSize="11"
        letterSpacing="-0.5"
      >
        <tspan fill="#d2562f">/</tspan>
        <tspan fill="#ffffff">RHQ</tspan>
      </text>
    </svg>
  );
}

export default Logo;
