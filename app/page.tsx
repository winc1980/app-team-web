'use client';
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function Home() {

  return (
    <>
      <div>
        <div id="homepage-background"></div>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="beforeInteractive"
        />
        <Script id="script">
          {`VANTA.NET({
              el: "body",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x69ff,
              backgroundColor: 0x0
            });`}
        </Script>
      </div>
      <main className="flex flex-col items-center gap-20">
        <section className="flex w-full max-w-7xl justify-start items-center flex-col lg:flex-row lg:gap-12 min-h-[80vh]">
          <div className="mt-24 lg:mt-8 mx-2 px-2">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <span className="text-4-5xl  lg:text-6xl font-semibold palt">
                Realise Your Idea in <span className="bg-linear-to-r from-cyan-500 to-blue-500 to-text-gradient">Waseda</span>
              </span>
              <span className="break-keep">
                A Quick Brown Fox Jumps Over The Lazy Dog
              </span>
            </div>
            <div className="flex flex-wrap gap-4 my-6  justify-center lg:justify-start">
              <Link href=''>
                <div className="flex gap-1 bg-foreground text-background p-4">
                  新入生向け情報
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
