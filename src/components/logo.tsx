import Image from "next/image";

type LogoProps = { size?: number; className?: string; priority?: boolean };

// RHQ mark — the approved /RHQ lettermark, transparent rounded tile.
export function Logo({ size = 40, className, priority = false }: LogoProps) {
  return (
    <Image
      src="/assets/rhq-logo.png"
      alt="RHQ logo"
      width={size}
      height={size}
      className={className}
      style={{ display: "block" }}
      priority={priority}
    />
  );
}

export default Logo;
