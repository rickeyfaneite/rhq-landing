type LogoProps = { size?: number; className?: string };

// RHQ mark: rounded tile, warm-orange frame, "RHQ" large and centered,
// with a small orange "/" command accent in the top-left (does not shift RHQ).
export function Logo({ size = 40, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="RHQ logo"
    >
      <rect x="1" y="1" width="38" height="38" rx="9" fill="#16140f" stroke="#d2562f" strokeWidth="1.5" />
      <text
        x="7.5"
        y="14"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono), ui-monospace, monospace" }}
        fontWeight="800"
        fontSize="9"
        fill="#d2562f"
      >
        /
      </text>
      <text
        x="20"
        y="28.5"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono), ui-monospace, monospace" }}
        fontWeight="700"
        fontSize="15"
        letterSpacing="-1.2"
        fill="#f4f1ee"
      >
        RHQ
      </text>
    </svg>
  );
}

export default Logo;
