import Image from "next/image";
import { ProjectType } from "@/types/Project";
import { parseTech } from "@/utils/cms/parseTech";
interface UsedTechnologySectionProps {
    project: ProjectType;
}

export default function UsedTechnologySection({ project }: UsedTechnologySectionProps) {
    const techs = parseTech(project.technologies);

    return (
      <div className="my-4">
        <h2 className="font-extralight text-2xl palt lg:divide-effect">
          <p className="font-mono text-sm opacity-60">Technologies</p>
          使用技術
        </h2>
        <div className="flex gap-4 items-center py-4">
          {techs.map((tech, index) => (
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
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
    );
}