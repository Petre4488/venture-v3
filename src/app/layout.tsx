import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '../Components/NavBar'
import FooterComp from '../Components/Footer'
import Head from 'next/head'
import Script from "next/script";

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
      <Head>
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Venture Group Agency",
            "url": "https://venturegroup.cc",
            "logo": "https://i.ibb.co/TrSXdcC/logo-Dark-Transp.png",
            "contactPoint": {
              "@type": "Petre Circeag",
              "telephone": "+40 753989970",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "http://www.instagram.com/venturegroup.ag",
            ],
          }
        `}
      </script>
      <link rel="canonical" href="https://www.venturegroup.cc"/>
    </Head>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-M7P7ZC9L2K"></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M7P7ZC9L2K');
            `,
          }}
        />

        <main className="flex min-h-screen flex-col items-center justify-between p-3 smooth-scroll">
          <NavBar/>
          {children}
          <FooterComp/>
        </main>
        </body>
    </html>
  );
}
