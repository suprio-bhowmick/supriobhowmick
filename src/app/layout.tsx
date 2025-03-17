import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suprio Bhowmick | React Developer Portfolio",
  description:
    "Welcome to the portfolio of Suprio Bhowmick, a React.js developer skilled in building modern web applications. Check out my projects, skills, and contact me for collaboration.",
  keywords:
    "React Developer, Frontend Developer, Web Developer, JavaScript, React.js Portfolio, Next.js, UI/UX, MERN Stack, Freelancer, Hire React Developer",
  authors: [{ name: "Suprio Bhowmick" }], 
  creator: "Suprio Bhowmick",
  openGraph: {
    title: "Suprio Bhowmick | React Developer Portfolio",
    description:
      "Explore my projects, skills, and achievements as a React.js developer. Let's build something amazing together!",
    url: "https://supriobhowmick.vercel.app",
    siteName: "Suprio Bhowmick | React Developer",
    images: [
      {
        url: "https://supriobhowmick.vercel.app/images/portfolio-preview.png", 
        width: 1200,
        height: 630,
        alt: "React Developer Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suprio Bhowmick | React Developer Portfolio", 
    description:
      "React.js developer portfolio showcasing projects, skills, and achievements. Let's connect!",
    images: ["https://supriobhowmick.vercel.app/images/portfolio-preview.png"],
    creator: "@yourtwitterhandle",
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased ` }>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
