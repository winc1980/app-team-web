"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

export default function News() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const scope = useRef(null);
  
  useGSAP(
    () => {
      const splitChars = SplitText.create(".gsap-chars", { type: "chars" });
      const tlChars = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-chars",
          start: "bottom bottom",
          end: "+=90%", // end after scrolling 500px beyond the start
          scrub: true,
        },
      });
      tlChars.from(splitChars.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });

      const splitLines = SplitText.create(".gsap-lines", {
        type: "lines",
        mask: "lines",
      });
      const tlLines = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-lines",
          start: "top bottom",
          end: "+=66.6%", // end after scrolling 500px beyond the start
          scrub: true,
        },
      });
      tlLines.from(splitLines.lines, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });

      const tlObjects = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-lines",
          start: "top bottom",
          end: "+=66.6%", // end after scrolling 500px beyond the start
          scrub: true,
        },
      });
      tlObjects.from(".reveal-on-scroll", {
        duration: 1,
        y: 100,
        autoAlpha: 0,
      });
    },
    { scope: scope }
  );

  return (
    <div className="divide-effect flex flex-col justify-center" ref={scope}>
      <section className="border-t border-b border-white/10 w-full max-w-7xl py-32 flex flex-col gap-20">
        <h2 className="text-5xl font-light w-full divide-effect gsap-chars">
          <p className="font-mono text-sm opacity-60 px-1">News;</p>
          ニュース
        </h2>
        <div className="min-h-[80vh] divide-effect flex flex-col items-center">
          <article className="bg-foreground/10 mb-8 divide-effect w-full max-w-7xl">
            <div className="bg-background rounded-2xl p-4 m-2">
              <h3 className="text-3xl font-light w-full divide-effect gsap-lines">
                <p className="font-mono text-sm opacity-60 px-1">
                  2025 May 9; UTC+0900
                </p>
                アプリチームについて
              </h3>
              <p className="text-md text-foreground py-8 gsap-lines">
                アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                <br />
                私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
              </p>
            </div>
          </article>
          <article className="bg-foreground/10 mb-8 divide-effect w-full max-w-7xl">
            <div className="bg-background rounded-2xl p-4 m-2">
              <h3 className="text-3xl font-light w-full divide-effect gsap-lines">
                <p className="font-mono text-sm opacity-60 px-1">
                  2025 May 9; UTC+0900
                </p>
                アプリチームについて
              </h3>
              <p className="text-md text-foreground py-8 gsap-lines">
                アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                <br />
                私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
              </p>
            </div>
          </article>
          <article className="bg-foreground/10 mb-8 divide-effect w-full max-w-7xl">
            <div className="bg-background rounded-2xl p-4 m-2">
              <h3 className="text-3xl font-light w-full divide-effect gsap-lines">
                <p className="font-mono text-sm opacity-60 px-1">
                  2025 May 9; UTC+0900
                </p>
                アプリチームについて
              </h3>
              <p className="text-md text-foreground py-8 gsap-lines">
                アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                <br />
                私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
              </p>
            </div>
          </article>
          <Link
            href="/news/"
            className="flex gap-1  hover:gap-3  p-4 rounded-xs border border-foreground w-fit bg-background/80 hover:bg-foreground/30 transition duration-300"
          >
            もっと見る
            <Plus />
          </Link>
        </div>
      </section>
    </div>
  );
}
