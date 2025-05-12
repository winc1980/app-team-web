import { ProjectType } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ project, className }: { project: ProjectType, className?: string }) => {
  return (
    <Link href={`/projects/${project.id}`} className={className}>
      <article className="bg-foreground/10 border border-white/10 w-full @container p-2 h-full">
        <div className="flex flex-col @lg:flex-row items-center bg-background hover:bg-foreground/80 hover:backdrop-blur hover:text-background @lg:hover:[&>img]:h-96 transition-color duration-300 rounded-2xl gap-4 @xl:gap-8 p-4 @lg:p-8 h-full">
          <Image
            src={project.images[0].url ?? ""}
            alt={project.title}
            className="h-80 w-full @lg:max-w-1/2 max-w-lg object-cover transition-all duration-300 reveal-on-scroll rounded-xl"
            width={320}
            height={320}
          />
          <div className="@lg:w-1/2">
            <h3 className="text-3xl font-light gsap-lines">
              <p className="font-mono text-sm opacity-60">
                {project.completeDate != null ? "Released" : "In development"}
                {" / "}
                {/* project.technologies[0][1] */
                /* これどういう仕様なんだ */}
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
