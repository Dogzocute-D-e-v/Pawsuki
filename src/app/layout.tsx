"use client"
import { Inter, Roboto_Mono } from "next/font/google";
import './styles/reset.css'
import './styles/globals.css'

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monoFont = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} ${monoFont.variable}`}>
      {children}
      </body>
    </html>
  );
}
