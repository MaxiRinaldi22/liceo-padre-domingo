import Header from "@/components/Header";
import { montserrat } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Liceo Padre Domingo",
    template: "%s | Liceo Padre Domingo",
  },
  description:
    "Descubre el Liceo Habilitado Padre Domingo en Maldonado, fortaleciendo los valores para educar con valor y respeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.ico/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon.ico/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="LPD" />
        <link rel="manifest" href="/favicon.ico/site.webmanifest" />
      </head>
      <body className={`${montserrat.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
