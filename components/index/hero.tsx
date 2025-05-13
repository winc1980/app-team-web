"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

export default function Hero() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.to("#hero-main-typo-1", {
        autoAlpha: 1,
        text: "アプリで、",
        delay: 0.5,
        duration: 5 * 0.15,
      });
      gsap.to("#hero-main-typo-2", {
        autoAlpha: 1,
        text: "世界を変えよう。",
        delay: 0.5 + 5 * 0.15,
        duration: 8 * 0.15,
      });
      const tl = gsap.timeline();
      tl.fromTo(
        "#hero-main-typo-cursor",
        1,
        {
          "border-right-color": "rgba(255,255,255,1)",
        },
        {
          "border-right-color": "rgba(255,255,255,0)",
          repeat: -1,
          ease: "steps(1)",
        },
        0
      );
    },
    { scope: scope }
  );

  return (
    <section
      className="flex flex-col w-full max-w-7xl justify-stretch lg:justify-center items-center lg:items-start lg:gap-12 min-h-[80vh]"
      ref={scope}
    >
      <div className="mt-24 lg:mt-8 mx-2 px-2 flex flex-col grow lg:grow-0">
        <div className="flex flex-col gap-6 text-center justify-center lg:text-start grow">
          <div
            id="hero-main-typo"
            className="w-fit flex flex-wrap justify-center"
          >
            <span id="hero-main-typo-1" className="break-keep text-5xl lg:text-7xl font-light palt ">
            </span>
            <span id="hero-main-typo-2" className="break-keep text-5xl lg:text-7xl font-light palt ">
            </span>
            <div id="hero-main-typo-cursor" className="inline-block text-5xl lg:text-7xl border-r-8">
              <span className="opacity-0">I</span>
            </div>
          </div>
          <span className="break-keep font-mono">
            Realise Your Vision in Waseda with{" "}
            <span className="bg-linear-to-r from-cyan-500 to-blue-500 to-text-gradient">
              Code
            </span>
            .
          </span>
        </div>
        <div className="flex flex-wrap gap-4 my-6 justify-start">
          <Link href="https://secure.register.winc.ne.jp/">
            <div className="flex gap-1  hover:gap-3  p-4 rounded-2xl duration-300 button-slider from-purple-500 to-purple-500">
              新入生向け情報
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
