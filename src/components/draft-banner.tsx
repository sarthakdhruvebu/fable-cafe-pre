/**
 * Slim draft preview banner.
 * Renders only when NEXT_PUBLIC_SHOW_DRAFT_BANNER=true.
 * Layout offsets (body padding + header top) come from
 * `html.draft-preview` + `--draft-banner-height` in globals.css.
 */
export function DraftBanner() {
  if (process.env.NEXT_PUBLIC_SHOW_DRAFT_BANNER !== "true") {
    return null;
  }

  return (
    <div role="note" className="draft-banner">
      <span className="draft-banner__label">DRAFT – PREVIEW ONLY</span>
      <span className="draft-banner__note"> — not the final website</span>
    </div>
  );
}
