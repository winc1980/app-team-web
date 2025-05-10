import Link from "next/link"

export default function PageSteper() {
    return (
        <div className="flex flex-col gap-2 mt-4 w-full max-w-xs ml-4 md:ml-8">
            <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm">
                ホーム
            </Link>
            /
            <Link href="/projects" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm">
                プロジェクト一覧
            </Link>
            /
          <span className="text-white text-xs md:text-sm">詳細</span>
        </div>
      </div>
    )
}