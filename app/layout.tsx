import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Script from "next/script";
import LoadingOrBg from "@/components/layout/loading-or-bg";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const sans = Poppins({
  weight: ['500'],
  subsets: ["latin"],
  variable: "--default-sansserif",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: 'black',
}
export const metadata: Metadata = {
  title: "WINC: アプリチーム",
  description: "早稲田コンピューター研究会（WINC）アプリチームの公式ホームページです。",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-x-none overflow-x-hidden bg-background -z-10 relative">
      <body
        className={`${notoSansJp.variable} ${geistMono.variable} ${sans.variable} antialiased min-h-screen bg-gradient-to-br from-blue-700 to-rose-700 z-0 relative`}
      >
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="beforeInteractive"
        />
        <LoadingOrBg />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
