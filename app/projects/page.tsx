import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectSection from "@/components/projects/ProjectSection";
import Script from "next/script";

export default function Home() {
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
      <main className="flex flex-col items-center gap-20">
        <section className="flex w-full max-w-7xl justify-center items-center flex-col lg:flex-row lg:gap-12">
          <div className="mt-24 lg:mt-8 mx-2 px-2">
          <div className="flex flex-col gap-6 text-center lg:text-start">
              <span className="text-4-5xl  lg:text-6xl font-semibold palt">
                プロジェクト
              </span>
              <ProjectSection sectionName="進行中のプロジェクト" />
              <ProjectSection sectionName="過去のプロジェクト" />
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
