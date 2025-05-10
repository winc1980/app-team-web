import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectSection from "@/components/projects/ProjectSection";
import Script from "next/script";
import PageSteper from "@/components/projects/detail/PageSteper";
import ProjectDetailContainer from "@/components/projects/detail/ProjectDetailContainer";

export default function ProjectDetail() {
  return (
    <>
    <div>
        <div id="homepage-background" className="fixed h-screen w-screen -z-1"></div>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="beforeInteractive"
        />
        <Script id="script">
          {`VANTA.NET({
              el: "#homepage-background",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x69ff,
              backgroundColor: 0x0
            });`}
        </Script>
      </div>    
      <main className="flex flex-col gap-20">
        <PageSteper />
        <section className="flex w-full justify-center items-center flex-col gap-12 px-4">
          <div className="flex flex-col max-w-7xl gap-6">
            <span className="text-2xl font-semibold palt">
              天文同好会WAXA Webサイト制作
            </span>
            <ProjectDetailContainer />
          </div>
        </section>
      </main>

    </>
  );
}
