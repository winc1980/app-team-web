// project section

import { ProjectCard } from "./ProjectCard";

export default function ProjectSection({ sectionName }: { sectionName: string }) {
  return (
    <div className="my-8 overflow-x-hidden px-16">
        <h2 className="text-2xl font-light divide-effect">{sectionName}</h2>
        <div className="flex w-full justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 content-center w-full">    
                <ProjectCard title="プロジェクト1" description="プロジェクト1の説明" image="/test-images/project-image.png" link="/projects/detail" />
                <ProjectCard title="プロジェクト2" description="プロジェクト2の説明" image="/test-images/project-image.png" link="/projects/detail" />
                <ProjectCard title="プロジェクト3" description="プロジェクト3の説明" image="/test-images/project-image.png" link="/projects/detail" />
                <ProjectCard title="プロジェクト1" description="プロジェクト1の説明" image="/test-images/project-image.png" link="/projects/detail" />
                <ProjectCard title="プロジェクト2" description="プロジェクト2の説明" image="/test-images/project-image.png" link="/projects/detail" />
                <ProjectCard title="プロジェクト3" description="プロジェクト3の説明" image="/test-images/project-image.png" link="/projects/detail" />
            </div>  
        </div>
    </div>
  )
}