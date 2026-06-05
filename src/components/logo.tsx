type LogoProps = { className?: string };

// "The AI Builder" mark: a teal isometric build-cube with a node, build + AI.
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      width="32"
      height="32"
      fill="none"
      role="img"
      aria-label="The AI Builder logo"
    >
      <path d="M16 4 L28 10.5 L16 17 L4 10.5 Z" fill="#5EEAD4" />
      <path d="M4 10.5 L16 17 L16 29 L4 22.5 Z" fill="#2DD4BF" />
      <path d="M28 10.5 L16 17 L16 29 L28 22.5 Z" fill="#0D9488" />
      <circle cx="16" cy="4" r="2.4" fill="#5EEAD4" stroke="#0B0F1A" strokeWidth="1" />
    </svg>
  );
}

export default Logo;
