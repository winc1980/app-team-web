import NewsArticle from "@/components/news-article";
import { client } from "@/libs/microcms";
import { NewsType } from "@/types/News";

async function getNews() {
  const data = await client.get({
    endpoint: "news",
  });
  return data.contents;
}

export default async function News() {
  const news = await getNews();

  console.log(news[0].description);

  return (
    <>
      <main className="flex flex-col items-center">
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <div className="w-full max-w-7xl">
              <div className="flex flex-col justify-center">
                <section className="border-t border-b border-white/10 w-full max-w-7xl py-8">
                  <h2 className="text-5xl font-light w-full divide-effect">
                    <div className="pl-8">
                      <p className="font-mono text-sm opacity-60 px-1">
                        Our.latest.news();
                      </p>
                      ニュース
                    </div>
                  </h2>
                  <div className="text-md text-foreground py-8 divide-effect">
                    <p className="p-8">私達の最新ニュースをお届けします。</p>
                  </div>
                </section>
              </div>
            </div>
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center divide-effect bg-background">
          <div className="w-full max-w-[1440px] flex flex-row items-stretch relative">
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
            <div className="w-full max-w-7xl">
              <div className="min-h-[80vh] flex flex-col justify-start">
                {news.map((newsContent: NewsType) => (
                  <NewsArticle newsContent={newsContent} key={newsContent.id} />
                ))}
              </div>
            </div>
            <div className="grow-[1] border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed max-lg:hidden [--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </section>
      </main>
    </>
  );
}
