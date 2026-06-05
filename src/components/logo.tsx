type LogoProps = { size?: number; className?: string };

// RHQ mark — the approved /RHQ lettermark, transparent rounded tile.
export function Logo({ size = 40, className }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/rhq-logo.png"
      alt="RHQ logo"
      width={size}
      height={size}
      className={className}
      style={{ display: "block" }}
    />
  );
}

export default Logo;
