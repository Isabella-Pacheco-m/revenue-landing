import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Revenue · Diseñamos y operamos el sistema que optimiza tu revenue",
  description:
    "Nos integramos a tu empresa como tu dirección comercial externa. Estructuramos, medimos y optimizamos tu sistema comercial — desde cómo llegan los leads hasta cómo se convierten en ingresos. Sin improvisación. Con sistema.",
  keywords: [
    "revenue operations",
    "sistema comercial",
    "dirección comercial externa",
    "consultoría de ventas",
    "optimización de ventas",
    "Richi Pinzón",
  ],
  authors: [{ name: "Richi Pinzón" }],
  openGraph: {
    title: "Revenue · Sistema comercial integrado",
    description:
      "Diseñamos y operamos el sistema que optimiza tu revenue. Sin improvisación. Con sistema.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
