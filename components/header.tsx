import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
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
  );
}