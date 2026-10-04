export const preferenceOptions = [
  "Online menu guests can browse on mobile",
  "Table reservations / waitlist",
  "Events & private dining inquiries",
  "Instagram / Google Maps traffic to the site",
  "Multi-location pages (Juhu, Powai)",
  "Customer testimonials",
  "Ordering, gift cards, or loyalty later",
] as const;

const preferenceOptionSet = new Set<string>(preferenceOptions);

export const PREFERENCE_NOTE_MAX_LENGTH = 2000;

export type ParsedPreferences = {
  selected: string[];
  note: string;
};

export function parsePreferencesBody(
  body: unknown
): { ok: true; value: ParsedPreferences } | { ok: false } {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return { ok: false };
  }

  const record = body as Record<string, unknown>;
  const { selected, note } = record;

  if (!Array.isArray(selected)) {
    return { ok: false };
  }

  if (!selected.every((item) => typeof item === "string")) {
    return { ok: false };
  }

  if (selected.some((item) => !preferenceOptionSet.has(item))) {
    return { ok: false };
  }

  if (new Set(selected).size !== selected.length) {
    return { ok: false };
  }

  if (typeof note !== "string") {
    return { ok: false };
  }

  return {
    ok: true,
    value: {
      selected,
      note: note.trim().slice(0, PREFERENCE_NOTE_MAX_LENGTH),
    },
  };
}

export function preferenceEmailText(selected: string[], note: string): string {
  const noteLine = note.length > 0 ? note : "No extra note.";
  if (selected.length === 0) {
    return noteLine;
  }
  return `${selected.join("\n")}\n\n${noteLine}`;
}
