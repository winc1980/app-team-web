"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-20">
        <section className="flex w-full max-w-7xl justify-start items-center flex-col lg:flex-row lg:gap-12 min-h-[80vh]">
          <div className="mt-24 lg:mt-8 mx-2 px-2">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <span className="text-5xl  lg:text-7xl font-light palt break-keep">
                アプリで、世界を変えよう。
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
              </div>              {/* 締めの文章 */}
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
