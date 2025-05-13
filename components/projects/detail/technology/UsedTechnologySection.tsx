import Image from "next/image";
import { ProjectType } from "@/types/Project";
import { parseTech } from "@/utils/cms/parseTech";
interface UsedTechnologySectionProps {
    project: ProjectType;
}

export default function UsedTechnologySection({ project }: UsedTechnologySectionProps) {
    const techs = parseTech(project.technologies);

    return (
        <div className="flex flex-col gap-2 items-start my-4">
            <h2 className="font-bold text-xs palt">使用技術</h2>
            <div className="flex gap-4 items-center">
                {techs.map((tech, index) => (
                    <a href={tech.url} target="_blank" rel="noopener noreferrer" key={index}>
                        <Image 
                            src={`/test-images/projects/tech/${tech.image}`} 
                            alt={`[${tech.url}, ${tech.image}]`} 
                            width={44} 
                            height={44} 
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}