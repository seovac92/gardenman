import type { Metadata } from "next";
import { Bebas_Neue, Poppins, Allura, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

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
  title: "GARDENMAN",
  description: "Lawn Care & Landscaping",
};

export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(bebas.variable, poppins.variable, allura.variable, "font-sans", figtree.variable)}>
      <body>{children}</body>
    </html>
  );
}
