import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '../Components/NavBar'
import FooterComp from '../Components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venture Group Agency",
  description: "Creative Web Design & Development for Startups. We craft user-friendly websites that capture attention, convert visitors, and fuel your growth. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-3 smooth-scroll">
          <NavBar/>
          {children}
          <FooterComp/>
        </main>
        </body>
    </html>
  );
}
