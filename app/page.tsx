"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

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
      const tl = gsap.timeline()
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
      const splitChars = SplitText.create('.gsap-chars', { type: "chars" });
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

      const splitLines = SplitText.create(".gsap-lines", { type: "lines", mask: 'lines' });
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
                <section className="gsap-trigger border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="overflow-hidden text-7xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">
                      About(us);
                    </p>
                    <div className="gsap gsap-chars ">code <span className="to-text-gradient-child *:bg-linear-to-r *:from-rose-600 *:to-fuchsia-600">=</span> <span className="to-text-gradient-child *:bg-linear-to-r *:from-yellow-400 *:to-orange-400">new</span> Vision<span className="to-text-gradient-child *:bg-linear-to-b *:from-cyan-600 *:to-indigo-600">()</span>;</div>
                  </h2>
                  <div className="overflow-hidden text-lg text-foreground my-8 divide-effect">
                    <div className="gsap gsap-lines text-base/12">
                      <p className="text-4xl/16 font-light">コードを書いて、未来をえがく。</p>
                      アプリチームでは起業やビジネス創出を目標として最先端技術を用いたアプリ開発を行います。<br />
                      実際のシステム開発現場で用いられるプロジェクト管理の方法を採用し、3〜5人のチームでアプリ開発を行います。<br />
                      プロジェクトに関わるメンバーのマネジメントが、あなたにとってエンジニア以外の進路にも活きる経験を生みます。<br />
                      ユーザー体験の向上やコスト削減を目指し、ステークホルダーとの交渉や関係性の構築にも取り組みます。<br />
                      その過程で得た知見が、経営者的視点の獲得につながります。<br />
                      個人開発では得られないチーム開発のノウハウを学び、就職後にも生きる経験と繋がりを得ることができます。
                    </div>
                  </div>
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
