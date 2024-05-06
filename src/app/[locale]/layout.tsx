import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Tajawal } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

// If loading a variable font, you don't need to specify the font weight
const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={tajawal.className} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
