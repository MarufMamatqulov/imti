import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/data/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.shortName} — ${SITE.fullNameUz}`,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "IMTI",
    "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti",
    "Ma'naviyat va Ma'rifat Markazi",
    "ilmiy tadqiqot",
    "ma'naviyat",
    "ma'rifat",
    "O'zbekiston",
  ],
  metadataBase: new URL(SITE.domain),
  openGraph: {
    title: `${SITE.shortName} — ${SITE.fullNameUz}`,
    description: SITE.description,
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
