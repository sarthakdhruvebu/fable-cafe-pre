import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
  { href: "#needs", label: "What's next" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-[var(--draft-banner-height,0px)] z-20">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:px-8 sm:py-5">
        <nav className="hidden items-center gap-7 text-sm text-foam/85 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foam"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "absolute right-4 top-1/2 -translate-y-1/2 border-foam/35 bg-foam/10 text-foam backdrop-blur-sm hover:bg-foam hover:text-ink sm:right-8"
          )}
        >
          Plan a visit
        </a>
      </div>
    </header>
  );
}
