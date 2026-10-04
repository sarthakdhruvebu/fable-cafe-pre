import { Resend } from "resend";
import {
  parsePreferencesBody,
  preferenceEmailText,
} from "@/lib/preferences";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = parsePreferencesBody(body);
  if (!parsed.ok) {
    return Response.json({ error: "Invalid preferences." }, { status: 400 });
  }

  const { selected, note } = parsed.value;
  if (selected.length === 0 && note.length === 0) {
    return Response.json(
      { error: "Choose at least one option or leave a note." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PREFERENCES_FROM_EMAIL;
  const to = process.env.PREFERENCES_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return Response.json(
      { error: "Preferences email is not configured." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: "Fable Cafe — owner preferences",
      text: preferenceEmailText(selected, note),
    });

    if (error) {
      return Response.json(
        { error: "Couldn’t send preferences." },
        { status: 500 }
      );
    }
  } catch {
    return Response.json(
      { error: "Couldn’t send preferences." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
