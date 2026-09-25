"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const options = [
  "Online menu guests can browse on mobile",
  "Table reservations / waitlist",
  "Events & private dining inquiries",
  "Instagram / Google Maps traffic to the site",
  "Multi-location pages (Juhu, Powai)",
  "Customer testimonials",
  "Ordering, gift cards, or loyalty later",
];

export function NeedsForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggle(option: string) {
    setSelected((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-foam/70 p-6 sm:p-8">
        <p className="font-display text-2xl text-ink">Got it — thanks.</p>
        <p className="mt-3 max-w-xl text-muted-foreground">
          This preview captures your picks locally so we can scope the full
          build together. Nothing is sent to a server yet.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-ink/80">
          {selected.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        {note ? (
          <p className="mt-4 border-t border-ink/10 pt-4 text-sm text-muted-foreground">
            Note: {note}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-foam/70 p-6 sm:p-8"
    >
      <fieldset className="space-y-3">
        <legend className="sr-only">What might you need</legend>
        {options.map((option) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${
                checked
                  ? "border-wine/40 bg-wine/5"
                  : "border-ink/10 hover:border-sage/50"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(option)}
                className="mt-1 size-4 accent-[var(--wine)]"
              />
              <span className="text-sm leading-relaxed text-ink/90">
                {option}
              </span>
            </label>
          );
        })}
      </fieldset>

      <label className="mt-6 block text-sm text-muted-foreground">
        Anything else on your mind?
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={3}
          placeholder="E.g. brunch specials, jazz nights, high tea, delivery partners…"
          className="mt-2 w-full resize-y rounded-xl border border-ink/10 bg-white/70 px-4 py-3 text-ink outline-none ring-sage/40 placeholder:text-ink/35 focus:ring-2"
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          size="lg"
          className="bg-wine text-accent-foreground hover:bg-wine/90"
        >
          Save preferences
        </Button>
        <p className="text-xs text-muted-foreground">
          Design-only stage — no backend yet.
        </p>
      </div>
    </form>
  );
}
