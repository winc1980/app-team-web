"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Image from "next/image";

export default function Home() {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const heroAnimScope = useRef(null);
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.to("#hero-main-typo", {
        autoAlpha: 1,
        text: "アプリで、世界を変えよう。",
        duration: 2,
      });
      const tl = gsap.timeline();
      tl.fromTo(
        "#hero-main-typo",
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
    { scope: heroAnimScope }
  );
  useGSAP(
    () => {
      const splitChars = SplitText.create(".gsap-chars", { type: "chars" });
      const tlChars = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-chars",
          start: "top bottom",
          end: "+=66.6%", // end after scrolling 500px beyond the start
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
      tlObjects.from('.reveal-on-scroll', {
        duration: 1,
        y: 100,
        autoAlpha: 0,
      });
    },
    { scope: scope }
  );

  return (
    <>
      <main className="flex flex-col items-center gap-20">
        <section
          className="flex w-full max-w-7xl justify-start items-center flex-col lg:flex-row lg:gap-12 min-h-[80vh]"
          ref={heroAnimScope}
        >
          <div className="mt-24 lg:mt-8 mx-2 px-2">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <span
                id="hero-main-typo"
                className="text-5xl overflow-hidden lg:text-7xl font-light palt break-keep w-fit border-r-8 border-red-500"
              ></span>
              <span className="break-keep font-mono">
                Realise Your Vision in Waseda with{" "}
                <span className="bg-linear-to-r from-cyan-500 to-blue-500 to-text-gradient">
                  Code
                </span>
                .
              </span>
            </div>
            <div className="flex flex-wrap gap-4 my-6  justify-center lg:justify-start">
              <Link href="https://secure.register.winc.ne.jp/">
                <div className="flex gap-1  hover:gap-3  p-4 rounded-2xl duration-300 button-slider from-purple-500 to-purple-500">
                  新入生向け情報
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="backdrop-blur backdrop-saturate-200 backdrop-brightness-200 w-full flex flex-col items-center divide-effect"
          ref={scope}
        >
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <div className="w-full max-w-7xl">
              {/* アプリチームについて */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="gsap-trigger border-t border-b border-white/10 w-full max-w-7xl py-32 relative">
                  <h2 className="overflow-hidden text-7xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">
                      About(us);
                    </p>
                    <div className="gsap gsap-chars ">
                      code{" "}
                      <span className="to-text-gradient-child *:bg-linear-to-r *:from-rose-600 *:to-fuchsia-600">
                        =
                      </span>{" "}
                      <span className="to-text-gradient-child *:bg-linear-to-r *:from-yellow-400 *:to-orange-400">
                        new
                      </span>{" "}
                      Vision
                      <span className="to-text-gradient-child *:bg-linear-to-b *:from-cyan-600 *:to-indigo-600">
                        ()
                      </span>
                      ;
                    </div>
                  </h2>
                  <div className="overflow-hidden text-lg text-foreground my-8 divide-effect">
                    <div className="gsap gsap-lines text-base/12">
                      <p className="text-4xl/16 font-light">
                        コードを書いて、未来をえがく。
                      </p>
                      アプリチームでは起業やビジネス創出を目標として最先端技術を用いたアプリ開発を行います。
                      <br />
                      実際のシステム開発現場で用いられるプロジェクト管理の方法を採用し、3〜5人のチームでアプリ開発を行います。
                      <br />
                      プロジェクトに関わるメンバーのマネジメントが、あなたにとってエンジニア以外の進路にも活きる経験を生みます。
                      <br />
                      ユーザー体験の向上やコスト削減を目指し、ステークホルダーとの交渉や関係性の構築にも取り組みます。
                      <br />
                      その過程で得た知見が、経営者的視点の獲得につながります。
                      <br />
                      個人開発では得られないチーム開発のノウハウを学び、就職後にも生きる経験と繋がりを得ることができます。
                    </div>
                  </div>
                  <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 371.32 748.29"
                    width={300}
                    height={800}
                    className="hidden lg:block absolute right-0 bottom-1/2 translate-y-1/2 mr-16 opacity-50 svg-animate reveal-on-scroll"
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g id="Graphic_Elements" data-name="Graphic Elements">
                        <g>
                          <g>
                            <path
                              className="cls-1"
                              d="M364.73,50.87v646.56c0,2.27-.17,4.51-.5,6.7-.09.54-.18,1.09-.28,1.61-.52,2.72-1.29,5.35-2.28,7.87-.19.52-.41,1.04-.63,1.54-1.4,3.18-3.17,6.17-5.24,8.92-.2.25-.41.53-.61.78-1.43,1.83-3.03,3.52-4.72,5.11-.69.64-1.4,1.25-2.13,1.84-.25.22-.52.43-.78.62-.78.61-1.58,1.19-2.41,1.75-.05.04-.1.08-.15.11-.51.33-1.02.65-1.52.96-.57.34-1.15.68-1.73,1.01-.59.32-1.18.63-1.78.92-.29.14-.6.29-.89.43-.3.15-.61.29-.91.42-.92.41-1.86.77-2.81,1.12-.63.23-1.27.45-1.91.64-.33.1-.65.2-.97.29-.98.26-1.98.52-2.98.72-.33.07-.66.14-1.01.2-.34.06-.68.12-1.02.17-.68.11-1.37.21-2.06.28-.49.07-.97.1-1.46.14-.41.03-.81.05-1.22.07-.76.04-1.51.06-2.28.06H50.89c-.78,0-1.54-.02-2.3-.06-.41-.02-.81-.04-1.22-.07-.79-.06-1.57-.13-2.37-.22.3.03.6.05.9.08-22.09-2.49-39.32-21.28-39.32-44.02V50.87C6.58,27.22,25.21,7.84,48.58,6.63h.03c.75-.04,1.5-.06,2.27-.06h269.55c.77,0,1.51.02,2.27.06h.01c.41.02.81.04,1.22.07.39.03.79.07,1.19.1,22.22,2.36,39.61,21.22,39.61,44.06Z"
                            />
                            <path
                              className="cls-1"
                              d="M320.44.5H50.88C23.06.5.5,23.05.5,50.87v646.56c0,27.82,22.56,50.37,50.38,50.37h269.56c27.82,0,50.38-22.55,50.38-50.37V50.87c0-27.82-22.56-50.37-50.38-50.37ZM350.47,729.96c-.69.64-1.4,1.25-2.13,1.84-.25.22-.52.43-.78.62-.78.61-1.58,1.19-2.41,1.75-.05.04-.1.08-.15.11-.51.33-1.02.65-1.52.96-.57.34-1.15.68-1.73,1.01-.59.32-1.18.63-1.78.92-.29.14-.6.29-.89.43-.3.15-.61.29-.91.42-.92.41-1.86.77-2.81,1.12-.63.23-1.27.45-1.91.64-.33.1-.65.2-.97.29-.98.26-1.98.52-2.98.72-.33.07-.66.14-1.01.2-.34.06-.68.12-1.02.17-.68.11-1.37.21-2.06.28-.49.07-.97.1-1.46.14-.41.03-.81.05-1.22.07-.76.04-1.51.06-2.28.06H50.89c-.78,0-1.54-.02-2.3-.06-.41-.02-.81-.04-1.22-.07-.79-.06-1.57-.13-2.37-.22.3.03.6.05.9.08-22.09-2.49-39.32-21.28-39.32-44.02V50.87C6.58,27.22,25.21,7.84,48.58,6.63h.03c.75-.04,1.5-.06,2.27-.06h269.55c.77,0,1.51.02,2.27.06h.01c.41.02.81.04,1.22.07.39.03.79.07,1.19.1,22.22,2.36,39.61,21.22,39.61,44.06v646.56c0,2.27-.17,4.51-.5,6.7-.09.54-.18,1.09-.28,1.61-.52,2.72-1.29,5.35-2.28,7.87-.19.52-.41,1.04-.63,1.54-1.4,3.18-3.17,6.17-5.24,8.92-.2.25-.41.53-.61.78-1.43,1.83-3.03,3.52-4.72,5.11Z"
                            />
                          </g>
                          <path
                            className="cls-1"
                            d="M204.26,31.3h-39.48c-.98,0-1.77-.79-1.77-1.77v-.98c0-.98.79-1.77,1.77-1.77h39.48c.98,0,1.77.79,1.77,1.77v.98c0,.98-.79,1.77-1.77,1.77Z"
                          />
                          <path
                            className="cls-1"
                            d="M322.23,23.93h-.24l-.36-.04c-.43-.02-.82-.02-1.19-.02h-38.89c-2.23.11-4.02,1.83-4.24,4.03,0,.15-.02.3-.02.46v.06c-.53,11.4-9.94,20.47-21.46,20.47H115.5c-11.52,0-20.93-9.07-21.46-20.47v-.06c0-.16,0-.31-.02-.46-.22-2.2-2.02-3.92-4.24-4.03h-38.89c-.36,0-.76,0-1.19.02l-.36.04h-.24c-14.16.93-25.21,12.71-25.21,26.94v646.55c0,13.99,10.92,25.82,24.86,26.91.14,0,.25.02.36.03h.17s.16,0,.16,0h.06c.47.03.93.05,1.4.05h269.54c.47,0,.93-.02,1.4-.04h.06s.16,0,.16,0h.08s.09,0,.09,0c.11,0,.22-.02.36-.03,13.93-1.09,24.86-12.92,24.86-26.91V50.88c0-14.23-11.05-26.02-25.21-26.94Z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </section>
              </div>

              {/* 主な活動内容 */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">
                      Activities.that(we.do);
                    </p>
                    主な活動内容
                  </h2>
                  <p className="text-md text-foreground py-8 divide-effect">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </section>
              </div>
              {/* アプリチームについて */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">
                      About(us);
                    </p>
                  </h2>
                  <p className="text-md text-foreground py-8 divide-effect">
                    私たちの活動は、アプリケーション開発だけでなく、技術勉強会やイベントの開催など多岐にわたります。
                    <br />
                    具体的には、以下のような活動を行っています。
                  </p>
                </section>
              </div>

              {/* プロジェクト紹介（進行中、成果物） */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">
                      Projects;
                    </p>
                    プロジェクト紹介
                  </h2>
                  <p className="text-md text-foreground py-8 divide-effect">
                    現在進行中のプロジェクトや、過去に開発したアプリケーションについて紹介します。
                    <br />
                    各プロジェクトの詳細は、以下のリンクからご覧いただけます。
                  </p>
                </section>
              </div>

              {/* 新歓情報 */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">
                      Newcomers;
                    </p>
                    新歓情報
                  </h2>
                  <p className="text-md text-foreground py-8 divide-effect">
                    新入生向けの情報やイベントについて紹介します。
                    <br />
                    参加希望の方は、以下のリンクから詳細をご確認ください。
                  </p>
                </section>
              </div>

              {/* ニュース */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">News;</p>
                    ニュース
                  </h2>
                  <p className="text-md text-foreground py-8 divide-effect">
                    アプリチームの最新情報や、アプリチームの活動について紹介します。
                    <br />
                    各ニュースの詳細は、以下のリンクからご覧いただけます。
                  </p>
                </section>
              </div>

              {/* 締めの文章 */}
              <section className="w-full max-w-7xl p-8 flex flex-col gap-4">
                <p className="text-md text-foreground text-center">
                  アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                  <br />
                  私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                </p>
              </section>
            </div>
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </section>
      </main>
    </>
  );
}
