import Link from "next/link"

export default function PageSteper({pageTitle,className }:{pageTitle:string,className?:string}) {
    return (
      <div className={className}>
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Link
            href="/"
            className="text-gray-500 hover:text-white transition-colors"
          >
            ホーム
          </Link>
          {">"}
          <Link
            href="/projects"
            className="text-gray-500 hover:text-white transition-colors"
          >
            プロジェクト一覧
          </Link>
          {">"}
          <span className="text-white text-xs md:text-sm">{pageTitle}</span>
        </div>
      </div>
    );
}