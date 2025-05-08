'use client';
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${isOpen ? 'block' : 'hidden'} fixed z-20 bg-background h-screen w-screen`}>
        <div className="flex flex-col h-full justify-between pt-8 pb-24">
          <header className="flex w-full justify-end"><X className="h-8 w-8 p-8 box-content" onClick={() => setIsOpen(!isOpen)} /></header>
          <ul className="flex flex-col gap-4 text-xl font-medium px-8">
            <div className="font-mono">
              <Link href="/">
                <div>
                  About
                </div>
              </Link>
            </div>
            <div className="font-mono">
              <Link href="/">
                <div>
                  Activities
                </div>
              </Link>
            </div>
            <div className="font-mono">
              <Link href="/">
                <div>
                  Projects
                </div>
              </Link>
            </div>
            <div className="font-mono">
              <Link href="/">
                <div>
                  Schedules
                </div>
              </Link>
            </div>
            <div className="font-mono">
              <Link href="/">
                <div>
                  News
                </div>
              </Link>
            </div>
          </ul>
          <footer className="flex flex-col text-zinc-500 text-xs px-8 my-8 gap-8">
            <div className="flex justify-center flex-wrap max-w-7xl gap-8">
              <Link href="">
                <Image
                  src="/external-assets/x-logo/logo-white.png"
                  width={31}
                  height={31}
                  alt="公式X - @wasedule"
                  className="p-0.5"
                />
              </Link>
              <Link href="">
                <Image
                  src="/external-assets/IG_brand_asset_pack_2023/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg"
                  width={33}
                  height={33}
                  alt="公式Instagram - wasedule"
                />
              </Link>
            </div>
            <section className="flex flex-wrap gap-3">
              <Link href="">プライバシーポリシー</Link>
              <Link href="">利用規約</Link>
            </section>
            <section className="w-full max-w-7xl text-end">
              <p>© 2025 WINC</p>
            </section>
          </footer>
        </div>
      </div>
      <header className="flex justify-center w-full sticky top-0 border-b border-white/20 px-4 z-10 backdrop-blur-sm backdrop-saturate-200 bg-gradient-to-b from-black to-transparent">
        <div className="flex w-full max-w-7xl gap-3 justify-between py-4">
          <Link href="/">
            <Image
              src="/app-team-logo.svg"
              width={96}
              height={28}
              alt="WINCアプリチーム"
              className="h-6 lg:h-9"
            />
          </Link>
          <Menu className="h-6 lg:hidden" onClick={() => setIsOpen(!isOpen)} />
          <div className="hidden lg:block">
            <div className="flex gap-6 items-center">
              <div className="font-mono">
                <Link href="/">
                  <div>
                    About
                  </div>
                </Link>
              </div>
              <div className="font-mono">
                <Link href="/">
                  <div>
                    Activities
                  </div>
                </Link>
              </div>
              <div className="font-mono">
                <Link href="/">
                  <div>
                    Projects
                  </div>
                </Link>
              </div>
              <div className="font-mono">
                <Link href="/">
                  <div>
                    Schedules
                  </div>
                </Link>
              </div>
              <div className="font-mono">
                <Link href="/">
                  <div>
                    News
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://x.com/">
                  <div>
                    <Image
                      src="/external-assets/x-logo/logo-white.png"
                      width={24}
                      height={24}
                      alt="公式X - @wasedule"
                      className="p-0.5"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/">
                  <div>
                    <Image
                      src="/external-assets/IG_brand_asset_pack_2023/01 Static Glyph/02 White Glyph/Instagram_Glyph_white.svg"
                      width={24}
                      height={24}
                      alt="公式Instagram - wasedule"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link href='' className="flex items-center text-sm">
                  <div className="flex gap-1 bg-foreground text-background p-3">
                    新入生向け情報
                    <ArrowRight className="h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}