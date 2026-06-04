import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "e-school | La gestion scolaire, réinventée",
  description:
    "e-school est la plateforme tout-en-un qui simplifie l'administration, la planification, la communication et les finances de votre établissement scolaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <head>
        {/* Clash Display from Fontshare */}
        <link
          rel="preload"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        {/* Phosphor Icons */}
        <script
          src="https://unpkg.com/@phosphor-icons/web"
          async
        />
      </head>
      <body className="min-h-screen w-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
