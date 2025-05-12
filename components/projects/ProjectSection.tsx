// project section

import { ProjectCard } from "./ProjectCard";
import { ProjectType } from "@/types/Project";
import { client } from "@/libs/microcms";

async function getProjects(): Promise<ProjectType[]> {
  const data = await client.get({
    endpoint: "projects",
  });
  return data.contents;
}
export default async function ProjectSection({
  sectionName,
}: {
  sectionName: string;
}) {
  const projects = await getProjects();
  return (
    <div className="my-8 overflow-x-hidden px-16">
      <h2 className="text-2xl font-light divide-effect">{sectionName}</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
