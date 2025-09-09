import type { Metadata } from "next";
import { Lexend, Krona_One } from "next/font/google";
import "./globals.css";

const kronaOne = Krona_One({
  subsets: ["latin"],
  variable: "--font-krona",
  weight: ["400"]
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
        className={`antialiased ${kronaOne.variable} ${lexend.variable} font-lexend bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
