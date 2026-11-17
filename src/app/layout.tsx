import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yogeshwari S | Aspiring Software Developer & CS Student",
  description:
    "Personal portfolio of Yogeshwari S, a Computer Science student at Bangalore Institute of Technology, Bengaluru. Exploring frontend development, modern web technologies, and core software engineering.",
  keywords: [
    "Yogeshwari S",
    "Yogeshwari portfolio",
    "Computer Science student",
    "Bangalore Institute of Technology",
    "BIT Bengaluru",
    "Frontend Developer",
    "Software Developer",
    "Next.js portfolio",
    "React developer",
  ],
  authors: [{ name: "Yogeshwari S" }],
  creator: "Yogeshwari S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yogeshwari.dev",
    title: "Yogeshwari S | Aspiring Software Developer & CS Student",
    description:
      "Turning ideas into functional experiences. Computer Science student at Bangalore Institute of Technology.",
    siteName: "Yogeshwari S Portfolio",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground min-h-screen selection:bg-accent selection:text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
