import Image from "next/image"
import UsedTechnologySection from "./technology/UsedTechnologySection"
import Overview from "./overview/Overview"
import ContributorsSection from "./contributors/ContributorsSection"
import { ProjectType } from "@/types/Project";

interface ProjectDetailContainerProps {
    project: ProjectType;
}

export default function ProjectDetailContainer({ project }: ProjectDetailContainerProps) {
    return (
        <div className="flex flex-col w-full max-w-lg justify-center">
            {/* 画像 */}
            <Image src={project.images[0].url ?? ""} alt={project.title} width={150} height={150} />

            {/* 概要 */}
            <Overview project={project} />

            {/* 使用技術 */}
            <UsedTechnologySection project={project} />

            {/* 貢献者 */}
            <ContributorsSection project={project} />
        </div>
    )
}