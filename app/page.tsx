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
                <div className="flex gap-1  hover:gap-3 bg-foreground text-background p-4 rounded-2xl transition-all">
                  新入生向け情報
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="backdrop-blur backdrop-saturate-200 backdrop-brightness-200 w-full flex flex-col items-center border border-white/10">
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <div className="w-full max-w-7xl">
              {/* アプリチームについて */}
              <div className="h-[80vh] border-b border-white/10 flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl p-8 flex flex-col gap-4 justify-center py-32">
                  <h2 className="text-4xl font-semibold">
                    <p className="font-mono text-sm opacity-60">About(us);</p>
                    アプリチームについて
                  </h2>
                  <p className="text-md text-foreground ">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </section>
              </div>
              {/* 主な活動内容 */}
              <section className="w-full max-w-7xl p-8 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">
                  <p className="font-mono text-sm opacity-60">
                    Activities.that(we.do);
                  </p>
                  主な活動内容
                </h2>
                <p className="text-md text-foreground ">
                  私たちの活動は、アプリケーション開発だけでなく、技術勉強会やイベントの開催など多岐にわたります。
                  <br />
                  具体的には、以下のような活動を行っています。
                </p>
              </section>
              {/* プロジェクト紹介（進行中、成果物） */}
              <section className="w-full max-w-7xl p-8 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">
                  <p className="font-mono text-sm opacity-60">Projects;</p>
                  プロジェクト紹介
                </h2>
                <p className="text-md text-foreground ">
                  現在進行中のプロジェクトや、過去に開発したアプリケーションについて紹介します。
                  <br />
                  各プロジェクトの詳細は、以下のリンクからご覧いただけます。
                </p>
              </section>
              {/* 新歓情報 */}
              <section className="w-full max-w-7xl p-8 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">
                  <p className="font-mono text-sm opacity-60">Newcomers;</p>
                  新歓情報
                </h2>
                <p className="text-md text-foreground ">
                  新入生向けの情報やイベントについて紹介します。
                  <br />
                  参加希望の方は、以下のリンクから詳細をご確認ください。
                </p>
              </section>
              {/* 主な行事→年間スケジュール */}
              <section className="w-full max-w-7xl p-8 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">
                  <p className="font-mono text-sm opacity-60">Schedule;</p>
                  主な行事
                </h2>
                <p className="text-md text-foreground ">
                  私たちの年間スケジュールや、主な行事について紹介します。
                  <br />
                  詳細は、以下のリンクからご確認ください。
                </p>
              </section>
              {/* ブログ */}
              <section className="w-full max-w-7xl p-8 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">
                  <p className="font-mono text-sm opacity-60">Blog;</p>ブログ
                </h2>
                <p className="text-md text-foreground ">
                  私たちの活動や技術についてのブログを公開しています。
                  <br />
                  最新の記事は、以下のリンクからご覧いただけます。
                </p>
              </section>
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
