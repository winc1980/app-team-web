"use client";
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
        <h2 className="text-4xl lg:text-5xl font-light w-full divide-effect gsap-chars">
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
            <div className="lg:grid lg:grid-cols-15 max-w-7xl">
              <article className="lg:col-span-9 bg-foreground/10 border border-white/10">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/coding-icon.svg"
                    alt="コーディング"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light gsap-lines">
                    <p className="font-mono text-sm opacity-60">Coding</p>
                    コーディング
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    3~5人のチームで、実際の開発現場で使用される手法を用いて、最新技術によるアプリ開発を進めます。<br />
                    用件定義、設計、実装、テスト、リリースの各工程を、ウォーターフォール開発またはアジャイル開発で進行します。<br />
                    ネイティブアプリ開発ではFlutter、ウェブアプリ開発では主にNext.jsを使用しています。
                  </p>
                </div>
              </article>
              <article className="lg:col-span-6 bg-foreground/10 border border-white/10">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/code-review-icon.svg"
                    alt="コードレビュー"
                    className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
                    width={384}
                    height={384}
                  />
                  <h3 className="text-3xl pt-8 font-light gsap-lines">
                    <p className="font-mono text-sm opacity-60">
                      Code Reviewing
                    </p>
                    コードレビュー
                  </h3>
                  <p className="text-md py-4 gsap-lines">
                    書籍の情報やインターンでの実務で得た経験をもとに、コードの可読性や保守性を考慮し、より良いコードを書くためのアドバイスを行います。<br />
                    レビューを受けることで、他のメンバーの考え方や技術を学ぶことができるのは、個人開発では得られないメリットです。
                  </p>
                </div>
              </article>
              <article className="lg:col-span-5 bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/idea-icon.svg"
                    alt="アイデア出し"
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
                    アプリ開発とウェブ制作の一番の違いは、提供するものがサービスだということ。<br />
                    ミニビジコンのような形でアイデアを出し合い、検討します。<br />
                  </p>
                </div>
              </article>
              <article className="lg:col-span-6 bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/definition-icon.svg"
                    alt="要件定義"
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
                    チームでの計画的なアプリ開発に欠かせないのが要件定義。<br />
                    これから制作するアプリは、どんな人に、どんな価値を提供するのか。どんな機能を実装するのか。<br />
                    最低限の機能を実装するMVPを考え、開発の指針とします。<br />
                  </p>
                </div>
              </article>
              <article className="lg:col-span-4 bg-foreground/10 border border-white/10 grow">
                <div className="bg-background rounded-2xl p-4 m-2">
                  <Image
                    src="/icons/marketing-icon.svg"
                    alt="運営"
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
                    作ったらおわりではないのがアプリ開発。<br />
                    保守やマネタイズなど、継続的な価値提供のために知恵を絞り尽くします。<br />
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
