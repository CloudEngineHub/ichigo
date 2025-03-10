import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function LogoMark({ width = 24, height = 24 }: Props) {
  return (
    <Image
      width={width}
      height={height}
      className="w-6 h-6"
      src="/images/logo-mark.svg"
      alt="Menlo.ai - Logo"
    />
  );
}
