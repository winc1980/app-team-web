export default async function PageHeader({ titleJa, titleEn, desc }: { titleJa: string, titleEn: string, desc?: string }) {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
        <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
        <div className="w-full max-w-7xl">
          <div className="flex flex-col justify-center">
            <section className="border-t border-b border-white/10 w-full max-w-7xl py-8">
              <h2 className="text-3xl lg:text-5xl font-light w-full divide-effect">
                <div className="pl-8">
                  <p className="font-mono text-sm opacity-60 px-1">
                    {titleEn}
                  </p>
                  {titleJa}
                </div>
              </h2>
              {
                desc != null ?
                  <div className="text-md text-foreground pt-8">
                    <p className="px-8 divide-effect">{desc}</p>
                  </div>
                  : <></>
              }
            </section>
          </div>
        </div>
        <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
      </div>
    </section>
  );
}
