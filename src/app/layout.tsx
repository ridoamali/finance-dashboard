import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";


const nunito = Nunito({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Finance Dashboard Manager",
  description: "Designed by Rido",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body
        className={nunito.className}
      >
        {children}
      </body>
    </html>
  );
}
