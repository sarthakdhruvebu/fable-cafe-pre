import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Light mark for dark hero; dark mark for light surfaces */
  tone?: "light" | "dark" | "badge";
};

export function BrandMark({ className, tone = "light" }: BrandMarkProps) {
  const src =
    tone === "badge"
      ? "/fable-logo-badge.png"
      : tone === "dark"
        ? "/fable-logo.png"
        : "/fable-logo-light.png";

  return (
    <Link
      href="#top"
      aria-label="Fable — home"
      className={cn(
        "group inline-flex shrink-0 items-center rounded-xl outline-none transition duration-300",
        "focus-visible:ring-2 focus-visible:ring-brass/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        "hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      <Image
        src={src}
        alt="Fable — cooking up stories"
        width={978}
        height={402}
        priority
        className={cn(
          // Bigger than before, still compact in the header
          "h-[4.25rem] w-auto object-contain drop-shadow-sm sm:h-[5rem]",
          "transition duration-300 group-hover:drop-shadow-md"
        )}
      />
    </Link>
  );
}
