import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneha Michelle | Software Engineer",
  icons: {
    icon: "👩🏼‍💻"
  },
  openGraph: {
    title: "Sneha Michelle | Software Engineer", 
    description: "Creative software engineer passionate about NLP & expressive design.",
  },
  description: "Sneha Michelle's portfolio showcasing her work in software engineering, NLP, and design.",
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
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${sora.variable} bg-[var(--background)] text-[var(--text)] font-sans overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
