import { ProjectType } from "@/types/Project";
import Image from "next/image";

interface ProjectCardProps {
    project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    console.log(project.images);

    return (
        <a href={`/projects/${project.id}`} className="w-full flex flex-col md:flex-row font-medium p-4 border border-gray-600 bg-transparent shadow-lg">
            <div className="md:hidden">
                <h2 className="text-xl no-underline font-semibold mb-2 text-white">{project.title}</h2>
            </div>

            <Image src={project.images[0].url ?? ""} className="px-2" alt={project.title} width={150} height={150} />
            <Image src={project.images[1].url ?? ""} className="px-2" alt={project.title} width={150} height={150} />

            <div className="flex flex-col justify-between items-between px-6 md:block hidden">
                <div className="flex flex-col gap-16">
                    <h2 className="text-xl no-underline font-semibold mb-2 text-white">{project.title}</h2>
                    <p className="text-sm no-underline text-white">{project.description}</p>
                </div>
                <div className="flex flex-row justify-end"> 
                    <span className="mt-4 inline-block text-white-300 hover:underline font-semibold">
                        MORE →
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-between md:hidden mt-4">  
                <div className="flex flex-col gap-16">
                    <p className="text-sm no-underline text-white">{project.description}</p>
                </div>
                <div className="flex flex-row justify-end mt-4"> 
                    <span className="inline-block text-white-300 hover:underline font-semibold text-sm">
                        MORE →
                    </span>
                </div>
            </div>
        </a>
      );
};