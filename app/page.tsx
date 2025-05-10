"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

export default function Home() {
  gsap.registerPlugin(TextPlugin);
  const heroMainText = useRef(null);
  const scope = useRef(null);

  useEffect(() => {

    gsap.to(heroMainText.current, {
      autoAlpha: 1,
      text: "アプリで、世界を変えよう。",
      duration: 2,
    });
  }, []);

  useGSAP(() => {
    gsap.to('.divide-effect', {
      delay: 0.2,
      duration: 0.5,
      ease: "power2.out", //型がリテラル型なので注意
      stagger: 0.05,
      y: 0,
    });

  }, { scope: scope });


  return (
    <>
      <main className="flex flex-col items-center gap-20" ref={scope}>
        <section className="flex w-full max-w-7xl justify-start items-center flex-col lg:flex-row lg:gap-12 min-h-[80vh]">
          <div className="mt-24 lg:mt-8 mx-2 px-2">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <span className="text-5xl overflow-hidden lg:text-7xl font-light palt break-keep" ref={heroMainText}>

              </span>
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

        <section className="backdrop-blur backdrop-saturate-200 backdrop-brightness-200 w-full flex flex-col items-center divide-effect">
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <div className="w-full max-w-7xl">
              {/* アプリチームについて */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">About(us);</p>
                    アプリチームについて
                  </h2>
                  <p className="text-md text-foreground py-8 divide-effect">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </section>
              </div>

              {/* 主な活動内容 */}
              <div className="h-[80vh] divide-effect flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-32">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <p className="font-mono text-sm opacity-60 px-1">Activities.that(we.do);</p>
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
                    <p className="font-mono text-sm opacity-60 px-1">About(us);</p>

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
                    <p className="font-mono text-sm opacity-60 px-1">Projects;</p>
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
                    <p className="font-mono text-sm opacity-60 px-1">Newcomers;</p>
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
