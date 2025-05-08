import Image from "next/image";
import Link from "next/link";

import { DownloadIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-center w-full sticky top-0 border-b border-black/5 px-4 z-10">
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
            <div>
              <Link href="/contact" passHref>
                <div>
                  お問い合わせ
                </div>
              </Link>
            </div>
            <div>
              <Link href="https://x.com/wasedule">
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
              <Link href="https://www.instagram.com/wasedule/">
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
          </div>
        </div>
      </div>
    </header>
  );
}