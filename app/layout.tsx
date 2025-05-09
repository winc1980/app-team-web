import type { Metadata } from "next";
import { Noto_Sans_JP, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Script from "next/script";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
});

const sans = Poppins({
  weight: ['400', '500'],
  variable: "--default-sansserif",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WINC: アプリチーム",
  description: "早稲田コンピューター研究会（WINC）アプリチームの公式ホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJp.variable} ${geistMono.variable} ${sans.variable} antialiased min-h-screen bg-gradient-to-br from-blue-700 to-rose-700`}
      >
        <div>
          <div
            id="homepage-background"
            className="fixed h-screen w-screen -z-1 top-0 mix-blend-multiply"
          ></div>
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
            strategy="beforeInteractive"
          />
          <Script id="script">
            {`VANTA.NET({
              el: "#homepage-background",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0xffffff,
              backgroundColor: 0x0
            });`}
          </Script>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
