import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '../Components/NavBar'
import FooterComp from '../Components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-3">
          <NavBar/>
          {children}
          <FooterComp/>
        </main>
        </body>
    </html>
  );
}
