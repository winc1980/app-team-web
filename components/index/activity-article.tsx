"use client";
import { JSX, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import Image from "next/image";

export default function ActivityArticle({
  className,
  imageSrc,
  imageAlt,
  titleEn,
  titleJa,
  body,
}: {
  className: string;
  imageSrc: string;
  imageAlt: string;
  titleEn: string;
  titleJa: string;
  body: JSX.Element;
}) {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  const scope = useRef(null);

  useGSAP(
    () => {
      const splitLines = SplitText.create(".gsap-lines", {
        type: "lines",
        mask: "lines",
      });
      const tlLines = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-lines",
          start: "top bottom",
          end: "+=50%", // end after scrolling 500px beyond the start
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
          trigger: ".reveal-on-scroll",
          start: "top bottom",
          end: "+=50%", // end after scrolling 500px beyond the start
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
    <article
      ref={scope}
      className={`${className} bg-foreground/10 border border-white/10 grow`}
    >
      <div className="bg-background rounded-2xl p-4 m-2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-fit h-40 object-contain reveal-on-scroll opacity-50"
          width={384}
          height={384}
        />
        <h3 className="text-3xl pt-8 font-light w-full gsap-lines">
          <p className="font-mono text-sm opacity-60">{titleEn}</p>
          {titleJa}
        </h3>
        <p className="text-md py-4 reveal-on-scroll">
          {body}
        </p>
      </div>
    </article>
  );
}
