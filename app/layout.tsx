import type { Metadata } from "next";
import { Bebas_Neue, Poppins, Allura  } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

export const metadata = {
  title: "GardenMan",
  description: "Lawn Care & Landscaping",
};

export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${poppins.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
