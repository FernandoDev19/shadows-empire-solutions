import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Software Empire Solutions | Desarrollo de Software y Web',
  description: 'Soluciones tecnológicas a la medida para escalar tu negocio.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://shadows-empire-solutions.com'),
  openGraph: {
    title: 'Software Empire Solutions',
    description: 'Soluciones tecnológicas a la medida.',
    url: '/',
    siteName: 'Software Empire Solutions',
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
