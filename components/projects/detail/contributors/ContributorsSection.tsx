import ContributorCell from "./contributorCell";
import { ProjectType } from "@/types/Project";

interface ContributorsSectionProps {
    project: ProjectType;
}

export default function ContributorsSection({ project }: ContributorsSectionProps) {
    return (
        <div className="flex flex-col gap-2 items-start my-4">
            <h2 className="font-bold text-xs palt">貢献者</h2>
            <div className="w-full flex gap-6 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {project.members.map((member) => (
                    <ContributorCell key={member.id} member={member} />
                ))}
            </div>
        </div>
    )
}