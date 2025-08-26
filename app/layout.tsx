import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

export const geistSans = Lexend({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcadium",
  description: "Frontend do Arcadium: plataforma para avaliação e descoberta de jogos, com rankings, reviews e perfis personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased font-primary bg-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
