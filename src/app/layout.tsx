import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { DraftBanner } from "@/components/draft-banner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const showDraftBanner = process.env.NEXT_PUBLIC_SHOW_DRAFT_BANNER === "true";

export const metadata: Metadata = {
  title: "Fable Café & Bar | Breakfast, books, and late nights in Mumbai",
  description:
    "A design preview for Fable Café & Bar — quirky corners, all-day breakfast, and a storybook vibe across Juhu and Powai.",
  ...(showDraftBanner
    ? {
        robots: {
          index: false,
          follow: false,
        },
      }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full${showDraftBanner ? " draft-preview" : ""}`}
    >
      <body className="flex min-h-full flex-col">
        <DraftBanner />
        {children}
      </body>
    </html>
  );
}
