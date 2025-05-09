import Icon from "./Icon";
import Image from "next/image";

type MemberCellProps = {
    line: boolean;
    name: string;
    image: string;
    introduction: string;
    githubUrl: string;  
    snsUrl: string;
    school: string;
    faculty: string;
    role: string;
}

export default function MemberCell({ line, name, image, introduction, githubUrl, snsUrl, school, faculty, role }: MemberCellProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
        <div className="flex items-center gap-6">
            <Icon image={image} />
            <div className="flex flex-col items-start gap-1">
                <h3 className="font-semibold text-lg">
                    {name}
                </h3>

                <div className="flex flex-col md:flex-row items-center md:gap-2">
                    <span >{school}</span>
                    <span >{faculty}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm">{role}</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-3 pb-4">
            {/* introduction */}
            <p className="text-sm text-left">
                {introduction}
            </p>

            {/* github and SNS URL */}
            <div className="flex items-center gap-4">
                <a href={githubUrl} className="text-sm">
                    <Image src="/external-assets/github-logo/github-mark-white.png" alt="github-icon" width={32} height={32} />
                </a>
                <a href={snsUrl} className="text-sm">
                    <Image src="/external-assets/IG_brand_asset_pack_2023/01 Static Glyph/02 White Glyph/Instagram_Glyph_White.png" alt="instagram-icon" width={30} height={30} />
                </a>
            </div>
            
            {/* 参加プロジェクトへのリンク */}
            <div className="flex items-center gap-4">
                <a href="" className="inline-block text-blue-300 hover:underline font-semibold text-sm">参加プロジェクト →</a>
            </div>
        </div>
        {line && <div className="w-full h-[1px] bg-gray-600" />}
    </div>
  )
}