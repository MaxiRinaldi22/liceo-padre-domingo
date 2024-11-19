import Header from "@/components/Header";
import { montserrat } from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Liceo Padre Domingo",
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
      <body className={`${montserrat.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
