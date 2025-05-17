import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
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
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
