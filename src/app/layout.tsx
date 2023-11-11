import type { Metadata } from "next";
import { Gravitas_One, Oswald, Arvo } from "next/font/google";
import { NAV_ITEMS } from "@/data/constants";
import SideNav from "@/components/SideNav";
import "./globals.css";

const arvo = Arvo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arvo",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
});

const gravitas = Gravitas_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gravitas",
});

export const metadata: Metadata = {
  title: "Levell Mack",
  description: `Levell Mack's Frontend Developer portfolio.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${arvo.variable} ${oswald.variable} ${gravitas.variable}`}
    >
      <body className="relative font-arvo text-white bg-dark-knight [&_*]:cursor-none">
        <SideNav listItems={NAV_ITEMS.left} left></SideNav>
        <SideNav listItems={NAV_ITEMS.right}></SideNav>
        {children}
      </body>
    </html>
  );
}
