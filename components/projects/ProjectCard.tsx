import { ProjectType } from "@/types/Project";
import Image from "next/image";

interface ProjectCardProps {
    project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    console.log(project.images);

    return (
        <div className="max-w-xs mt-4 w-full lg:max-w-sm rounded-2xl border border-gray-600 bg-transparent shadow-lg overflow-hidden">
            <a href={`/projects/${project.id}`} className="inline-block text-blue-300 font-medium">
                <Image src={project.images[0].url ?? ""} alt={project.title} className="w-full h-40 object-cover" width={100} height={100} />
                <div className="p-4">
                    <h2 className="text-xl no-underline font-semibold mb-2 text-white">{project.title}</h2>
                    <p className="text-sm no-underline text-white">{project.description}</p>
                    <span className="mt-4 inline-block text-blue-300 hover:underline font-semibold text-sm">
                        詳しく見る →
                    </span>
                </div>
            </a>
        </div>

      );
};