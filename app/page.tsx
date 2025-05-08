import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-20">
        <section className="flex w-full max-w-7xl justify-center items-center flex-col lg:flex-row lg:gap-12">
          <div className="mt-24 lg:mt-8 mx-2 px-2">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <span className="text-4-5xl  lg:text-6xl font-semibold palt">
                <b>WINC</b>アプリチーム
              </span>
              <span className="break-keep">
                A Quick Brown Fox Jumps Over The Lazy Dog
              </span>
            </div>
            <div className="flex flex-wrap gap-4 my-6  justify-center lg:justify-start">
              <Link href=''>
                <button>
                  Google Playでダウンロード
                  <ArrowRight />
                </button>
              </Link>
              <Link href=''>
                <button>
                  App Storeでダウンロード
                  <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
