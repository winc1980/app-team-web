"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Image from "next/image";

export default function Activities() {
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
          <p className="font-mono text-sm opacity-60 px-1">what we do;</p>
          主な活動内容
          {/*
            - コーディング
            - コードレビュー
            - アイデア出し
            - 要件定義
            - 運営

            - 活動日時
          */}
        </h2>
        <div>
          <div className="divide-effect">
            <div className="flex flex-col lg:flex-row max-w-7xl">
              <article className="bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/coding-icon.svg"
                    alt="プロジェクト1の説明"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light w-full gsap-lines">
                    <p className="font-mono text-sm opacity-60">Coding</p>
                    コーディング
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </div>
              </article>
              <article className="bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/code-review-icon.svg"
                    alt="プロジェクト1の説明"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light w-full gsap-lines">
                    <p className="font-mono text-sm opacity-60">
                      Code Reviewing
                    </p>
                    コードレビュー
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="divide-effect">
            <div className="flex flex-col lg:flex-row max-w-7xl">
              <article className="bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/idea-icon.svg"
                    alt="プロジェクト1の説明"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light w-full gsap-lines">
                    <p className="font-mono text-sm opacity-60">
                      Brainstorming
                    </p>
                    アイデア出し
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </div>
              </article>
              <article className="bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/definition-icon.svg"
                    alt="プロジェクト1の説明"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light w-full gsap-lines">
                    <p className="font-mono text-sm opacity-60">
                      Requirements Definition
                    </p>
                    要件定義
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </div>
              </article>
              <article className="bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/marketing-icon.svg"
                    alt="プロジェクト1の説明"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light w-full gsap-lines">
                    <p className="font-mono text-sm opacity-60">
                      Management
                    </p>
                    運営
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    アプリチームは、早稲田大学の学生団体であり、アプリケーション開発を通じて技術力を高めることを目的としています。
                    <br />
                    私たちは、学生同士の交流や技術の共有を大切にし、より良いアプリケーションを作るために日々努力しています。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
