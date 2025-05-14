export default function Home() {
  return (
    <main className="flex flex-col items-center gap-20">
      <section className="flex w-full max-w-7xl justify-center items-center flex-col lg:flex-row lg:gap-12">
        <div className="mt-24 lg:mt-8 mx-2 px-2">
          <div className="flex flex-col gap-6 text-center lg:text-start">
            <span className="text-4-5xl  lg:text-6xl font-semibold palt">
              お問い合わせ
            </span>
            <span className="break-keep">
              お問い合わせはこちらから
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
