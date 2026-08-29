/*
 * Masarnia Brusy Gierszewscy — portal zamówień B2B
 * © nublado · designed & engineered by Tomasz Pawlak
 */
import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Zilla_Slab } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import { ToastProvider } from "@/lib/toast";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-sans",
});

const zilla = Zilla_Slab({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-zilla",
});

export const metadata: Metadata = {
  title: "Masarnia Brusy Gierszewscy — Portal zamówień B2B",
  description:
    "Portal zamówień hurtowych Masarni Brusy Gierszewscy. Wersja poglądowa.",
  authors: [{ name: "Tomasz Pawlak" }],
  creator: "Tomasz Pawlak",
  publisher: "nublado",
  other: { copyright: "nublado" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${sourceSans.variable} ${zilla.variable}`}>
      <body>
        <CartProvider>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
