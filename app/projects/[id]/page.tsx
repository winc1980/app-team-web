import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectSection from "@/components/projects/ProjectSection";
import Script from "next/script";
import PageSteper from "@/components/projects/detail/PageSteper";
import ProjectDetailContainer from "@/components/projects/detail/ProjectDetailContainer";
import { client } from "@/libs/microcms";
import { ProjectType } from "@/types/Project";
import { parseTech } from "@/utils/cms/parseTech";

async function getProject(id: string): Promise<ProjectType> {
  const data = await client.get({
    endpoint: `projects`,
    contentId: id,
  });
  return data;
}

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id as string;
  const project = await getProject(id);

  console.log(project);

  return (
    <>
      <main className="flex flex-col items-center">
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <div className="w-full max-w-7xl">
              <div className="flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-8">
                  <h2 className="text-3xl lg:text-5xl font-light w-full divide-effect">
                    <div className="pl-8">
                      <PageSteper pageTitle={project.title} className="my-4" />
                      <p className="[&>span]:inline-block">
                        <span>{project.title}</span>
                        <span className="font-mono text-sm opacity-60 px-1">
                          {project.completeDate != null
                            ? "Released"
                            : "In development"}
                          {" / "}
                          {parseTech(project.technologies)[0].name}
                        </span>
                      </p>
                    </div>
                  </h2>
                </section>
              </div>
            </div>
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center divide-effect bg-background">
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <ProjectDetailContainer project={project} />
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </section>
      </main>
    </>
  );
}
