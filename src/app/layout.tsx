import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATELIER — Design Studio",
  description: "Where restraint becomes expression. A monochrome design studio crafting editorial experiences through typography, contrast, and negative space.",
  keywords: ["design studio", "editorial", "monochrome", "typography", "minimalist", "branding"],
  authors: [{ name: "ATELIER Studio" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "ATELIER — Design Studio",
    description: "Where restraint becomes expression.",
    url: "https://atelier.studio",
    siteName: "ATELIER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATELIER — Design Studio",
    description: "Where restraint becomes expression.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${jetbrains.variable} antialiased bg-background text-foreground font-[family-name:var(--font-source-serif)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
