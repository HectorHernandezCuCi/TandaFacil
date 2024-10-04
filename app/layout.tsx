import Link from "next/link";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Header } from "@tandafacil /src/components/Header";
import { Footer } from "@tandafacil /src/components/Footer";

// Aplicando la fuente Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "TandaFacil",
  description: "TandaFacil Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <div className="main-container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
