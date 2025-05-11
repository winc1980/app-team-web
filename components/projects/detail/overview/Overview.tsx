import { ProjectType } from "@/types/Project";

interface OverviewProps {
    project: ProjectType;
}

export default function Overview({ project }: OverviewProps) {
    return (
        <div className="flex flex-col gap-2 items-start my-4">
            {project.description.split("\n").map((text, index) => (
                <p key={index} className="w-full text-xs palt">
                    {text}
                </p>
            ))}
        </div>
    )
}