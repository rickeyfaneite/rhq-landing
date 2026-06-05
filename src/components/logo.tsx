type LogoProps = { size?: number; className?: string };

// RicardoHQ mark: centered "/RHQ" — slash orange, RHQ white, near-black tile.
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
      <rect width="40" height="40" rx="6" fill="#111111" stroke="rgba(255,255,255,0.14)" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="700"
        fontSize="13.5"
        letterSpacing="-0.4"
      >
        <tspan fill="#ff4500">/</tspan>
        <tspan fill="#ffffff">RHQ</tspan>
      </text>
    </svg>
  );
}

export default Logo;
