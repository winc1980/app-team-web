import NewsArticle from "@/components/news-article";
import { client } from "@/libs/microcms";
import { NewsType } from "@/types/News";
import { Plus } from "lucide-react";
import Link from "next/link";

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
      <div className="divide-effect flex flex-col justify-center">
        <section className="border-t border-b border-white/10 w-full max-w-7xl py-32 flex flex-col gap-20">
          <h2 className="text-4xl lg:text-5xl font-light w-full divide-effect gsap-chars">
            <p className="font-mono text-sm opacity-60 px-1">News;</p>
            ニュース
          </h2>
          <div className="min-h-[80vh] divide-effect flex flex-col items-center">
            {news.map((newsContent: NewsType, i: number) => {
              if (i < 3)
                return (
                  <NewsArticle newsContent={newsContent} key={newsContent.id} />
                );
            })}
            <Link
              href="/news/"
              className="flex gap-1  hover:gap-3  p-4 rounded-xs border border-foreground w-fit bg-background/80 hover:bg-foreground/30 transition duration-300"
            >
              もっと見る
              <Plus />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
