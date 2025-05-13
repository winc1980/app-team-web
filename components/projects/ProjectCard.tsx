import { ProjectType } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import { parseTech } from "@/utils/cms/parseTech";

export const ProjectCard = ({ project, className }: { project: ProjectType, className?: string }) => {
    const techs = parseTech(project.technologies);

    console.log(techs);

  return (
    <Link href={`/projects/${project.id}`} className={className}>
      <article className="bg-foreground/10 border border-white/10 w-full @container p-2 h-full transition-all duration-300 **:transition-all **:duration-300">
        <div className="flex flex-col @xl:flex-row items-center bg-background hover:bg-foreground/80 hover:backdrop-blur hover:text-background @xl:hover:[&>img]:aspect-[calc(sqrt(2)/1)] transition-all duration-300 rounded-2xl gap-4 @xl:gap-8 p-4 @xl:p-8 h-full">
          <Image
            src={project.images[0].url ?? ""}
            alt={project.title}
            className="h-auto w-full aspect-[16/9] @xl:max-w-[max(40%,20vw)] max-w-lg object-cover transition-all duration-300 reveal-on-scroll rounded-xl"
            width={320 * Math.sqrt(2)}
            height={320}
          />
          <div className="@xl:w-1/2">
            <h3 className="text-3xl font-light gsap-lines">
              <p className="font-mono text-sm opacity-60">
                {project.completeDate != null ? "Released" : "In development"}
                {" / "}
                {techs[0].name}
              </p>
              {project.title}
            </h3>
            <p className="text-md py-4 gsap-lines">{project.description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
