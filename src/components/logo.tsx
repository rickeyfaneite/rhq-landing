import Image from "next/image";

type LogoProps = { size?: number; className?: string };

// RHQ mark — the approved /RHQ lettermark, transparent rounded tile.
export function Logo({ size = 40, className }: LogoProps) {
  return (
    <Image
      src="/assets/rhq-logo.png"
      alt="RHQ logo"
      width={size}
      height={size}
      className={className}
      style={{ display: "block" }}
      priority
    />
  );
}

export default Logo;
