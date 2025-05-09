// project section

import { ProjectCard } from "./ProjectCard";

export default function ProjectSection({ sectionName }: { sectionName: string }) {
  return (
    <section className="my-8 overflow-x-hidden">
        <h2 className="text-2xl font-bold">{sectionName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">    
            <ProjectCard title="プロジェクト1" description="プロジェクト1の説明" image="/test-images/project-image.png" link="https://example.com" />
            <ProjectCard title="プロジェクト2" description="プロジェクト2の説明" image="/test-images/project-image.png" link="https://example.com" />
            <ProjectCard title="プロジェクト3" description="プロジェクト3の説明" image="/test-images/project-image.png" link="https://example.com" />
            <ProjectCard title="プロジェクト1" description="プロジェクト1の説明" image="/test-images/project-image.png" link="https://example.com" />
            <ProjectCard title="プロジェクト2" description="プロジェクト2の説明" image="/test-images/project-image.png" link="https://example.com" />
            <ProjectCard title="プロジェクト3" description="プロジェクト3の説明" image="/test-images/project-image.png" link="https://example.com" />
        </div>
    </section>
  )
}