import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { MenuBrowser } from "@/components/menu-browser";
import { NeedsForm } from "@/components/needs-form";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const locations = [
  {
    name: "Juhu",
    detail: "Aashiyana Apartment, N S Road No. 13",
    hours: "9:00 AM – 1:30 AM",
  },
  {
    name: "Powai",
    detail: "Neighborhood brunch & late tables",
    hours: "Check Google for today’s hours",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="flex-1">
        <section className="relative isolate flex min-h-[100svh] overflow-hidden lg:items-center">
          <Image
            src="/hero-cafe.jpg"
            alt="Warm cafe interior with guests at wooden tables"
            fill
            priority
            className="object-cover object-[center_30%] animate-soft-zoom sm:object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(176,141,87,0.22),transparent_40%)]" />

          <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-6xl grid-rows-[minmax(0,1.15fr)_auto_minmax(0,1fr)] items-center justify-items-center px-5 text-center sm:px-8 lg:flex lg:min-h-0 lg:flex-col lg:justify-center lg:py-24">
            <div className="flex w-full items-center justify-center pt-14 sm:pt-16 lg:pt-0">
              <Image
                src="/fable-logo-light.png"
                alt="Fable"
                width={978}
                height={402}
                priority
                className="animate-fade-up mx-auto h-[5.25rem] w-auto max-w-[17rem] object-contain drop-shadow-md sm:h-[6.75rem] sm:max-w-[23rem] md:h-36 md:max-w-[26rem] lg:h-40 lg:max-w-[30rem]"
              />
            </div>

            <div className="flex max-w-2xl flex-col items-center px-1 py-2 lg:mt-5 lg:py-0">
              <h1 className="animate-fade-up-delay-1 font-display text-[1.65rem] font-medium leading-snug text-foam/95 sm:text-3xl md:text-4xl lg:text-4xl">
                Breakfast, books, and a little theater after dark.
              </h1>
              <p className="animate-fade-up-delay-2 mt-3 max-w-[22rem] text-base leading-relaxed text-foam/78 sm:mt-4 sm:max-w-md sm:text-lg md:max-w-lg md:text-xl lg:text-lg">
                A design preview for Mumbai’s storybook café — quirky corners,
                all-day plates, and rooms worth lingering in.
              </p>
            </div>

            <div className="animate-fade-up-delay-3 flex w-full max-w-[18rem] flex-col items-center justify-end gap-3 pb-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 sm:pb-12 lg:mt-8 lg:pb-0">
              <a
                href="#menu"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 w-full justify-center px-5 text-base bg-foam text-ink hover:bg-foam/90 sm:h-12 sm:w-auto sm:px-7 sm:text-lg md:h-14 md:px-8 md:text-xl"
                )}
              >
                Peek the menu
              </a>
              <a
                href="#needs"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 w-full justify-center px-5 text-base border-foam/40 bg-transparent text-foam hover:bg-foam/10 sm:h-12 sm:w-auto sm:px-7 sm:text-lg md:h-14 md:px-8 md:text-xl"
                )}
              >
                Tell us what you need
              </a>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <p className="text-sm font-medium tracking-[0.18em] text-wine uppercase">
                  The story
                </p>
                <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
                  A third place between home, work, and the next chapter.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Fable leans into washed menus, stacked books, chandeliers, and
                  rooms that feel collected rather than staged. Guests come for
                  breakfast that runs all day — and stay because the place has a
                  personality.
                </p>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  This first site is intentionally light: look and feel first,
                  then we learn what operations actually need before wiring the
                  heavy features.
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/6]">
                <Image
                  src="/books-corner.jpg"
                  alt="Dim restaurant dining room with warm lamps"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <div className="section-rule mx-auto max-w-4xl" />

        <section id="menu" className="bg-foam/50 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-sm font-medium tracking-[0.18em] text-wine uppercase">
                Browse
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                Open a section.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Each stack is sized to its page count — Food runs deeper than
                Beverages for now.
              </p>
            </Reveal>
            <div className="mt-10 sm:mt-12">
              <Reveal>
                <MenuBrowser />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-ink/8 bg-ink text-foam">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
            <Image
              src="/dessert.jpg"
              alt="Layered dessert plated with berries"
              fill
              className="object-cover opacity-55"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink" />
          </div>
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <p className="text-sm font-medium tracking-[0.18em] text-brass uppercase">
                After dark
              </p>
              <h2 className="mt-3 max-w-lg font-display text-4xl leading-tight sm:text-5xl">
                Same room. Softer lights. Longer conversations.
              </h2>
              <p className="mt-5 max-w-md text-foam/75">
                When brunch settles, Fable keeps the night open — drinks,
                dessert, and the kind of tables people don’t rush.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="visit" className="relative overflow-hidden border-y border-ink/8">
          <div className="floor-veil absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <p className="text-sm font-medium tracking-[0.18em] text-wine uppercase">
                Visit
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                Two Mumbai rooms, one mood.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {locations.map((place) => (
                <Reveal key={place.name}>
                  <article className="h-full rounded-2xl border border-ink/10 bg-foam/85 p-6 backdrop-blur-[2px]">
                    <h3 className="font-display text-3xl text-ink">{place.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {place.detail}
                    </p>
                    <p className="mt-4 text-sm font-medium text-sage">{place.hours}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <p className="text-sm text-muted-foreground">
                Hours and exact pins should be confirmed with the owners before
                launch. For now this page is a conversation starter.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="needs" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-medium tracking-[0.18em] text-wine uppercase">
                What&apos;s next
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                What should the full site actually do?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tick what matters. We&apos;ll turn this design into a working
                product once priorities are clear.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <NeedsForm />
          </Reveal>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-ink/10">
        <div className="floor-pattern absolute inset-0 opacity-35" aria-hidden />
        <div className="relative bg-foam/75">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <Image
              src="/fable-logo.png"
              alt="Fable"
              width={978}
              height={402}
              className="h-12 w-auto object-contain sm:h-14"
            />
            <p>cooking up stories · Mumbai · Design preview</p>
          </div>
        </div>
      </footer>
    </>
  );
}
