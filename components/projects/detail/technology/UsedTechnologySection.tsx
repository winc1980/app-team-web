import Image from "next/image";
import { ProjectType } from "@/types/Project";

interface UsedTechnologySectionProps {
    project: ProjectType;
}

export default function UsedTechnologySection({ project }: UsedTechnologySectionProps) {
    // プロジェクトから技術情報の文字列を取得して解析
    const parseTechnologies = () => {
        try {
            // 文字列形式で返ってくる技術情報を配列に変換
            if (project.technologies && typeof project.technologies === 'string') {
                // 正規表現で [URL, filename] 形式の部分を抽出
                const regex = /\["([^"]+)",\s*"([^"]+)"\]/g;
                const techString = project.technologies as string;
                const matches = [...techString.matchAll(regex)];
                
                return matches.map(match => [match[1], match[2]]);
            }
            
            // すでに配列形式の場合はそのまま返す
            return (project.technologies as any[]) || [];
        } catch (error) {
            console.error("技術情報の解析に失敗しました:", error);
            return [];
        }
    };

    const technologies = parseTechnologies();

    return (
        <div className="flex flex-col gap-2 items-start my-4">
            <h2 className="font-bold text-xs palt">使用技術</h2>
            <div className="flex gap-4 items-center">
                {technologies.map(([url, imgName], index) => (
                    <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                        <Image 
                            src={`/test-images/projects/tech/${imgName}`} 
                            alt={`[${url}, ${imgName}]`} 
                            width={imgName === "js.png" || imgName === "wordpress.png" ? 44 : 50} 
                            height={imgName === "js.png" || imgName === "wordpress.png" ? 44 : 50} 
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}