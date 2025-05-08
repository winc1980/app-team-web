import type { Metadata } from "next";
import { Noto_Sans_JP, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
});

const sans = Poppins({
  weight:['400','500'],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
