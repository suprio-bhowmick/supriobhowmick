import type { Metadata } from "next";
import {  Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });


export const metadata: Metadata = {
  title: "Suprio Bhowmick - Portfolio",
  description: "Frontend React Js Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${outfit.className} antialiased `}
      >
        <Providers >{children}</Providers>
      </body>
    </html>
  );
}
