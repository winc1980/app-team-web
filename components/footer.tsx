import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center px-4 py-8 gap-8 bg-gradient-to-b from-transparent to-black">
      <section
        className="flex items-center
          gap-8 justify-between w-full max-w-7xl mt-16 px-3"
      >
        <Link href="">
          <Image
            src="/app-team-logo.svg"
            width={128}
            height={36}
            alt="WINC: アプリチーム"
          />
        </Link>
        <div className="flex flex-wrap max-w-7xl gap-8">
          <Link href="https://x.com/">
            <Image
              src="/external-assets/x-logo/logo-white.png"
              width={31}
              height={31}
              alt="公式X - @"
              className="p-0.5"
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image
              src="/external-assets/IG_brand_asset_pack_2023/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg"
              width={33}
              height={33}
              alt="公式Instagram - "
            />
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-start max-w-7xl w-full">
        <Link href="/blog" className="p-2 text-sm font-semibold"> 
          ブログ 
        </Link>
        <Link href="/members" className="p-2 text-sm font-semibold"> 
          メンバー紹介 
        </Link>
        <Link href="/schedule" className="p-2 text-sm font-semibold">  
          スケジュール
        </Link>
        <Link href="/projects" className="p-2 text-sm font-semibold">
          プロジェクト
        </Link>
        <Link href="" className="p-3 text-sm font-semibold">
          プライバシーポリシー
        </Link>
      </section>
      <section className="flex justify-between items-center w-full max-w-7xl text-end py-6 border-t-2 border-gray-100">
        <div>
          <Image
            src="/winc-logo.svg"
            width={48}
            height={36}
            alt="WINC"
            className="m-4"
          />
          <p className="text-left text-sm text-gray-400 px-3 font-mono">Created and developed only by waseda students. <br />No other company, organization, or Waseda University is related.</p>
        </div>
        <p className="text-sm font-semibold p-3 text-gray-600 w-[-webkit-fill-available] lg:w-auto font-mono">© 2025 WINC: App Team</p>
      </section>
    </footer>
  )
}