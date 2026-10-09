import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSections {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSections[] = sections.slice(1);

  return (
    <div>
      <Marquee />

      {/* home page layout */}
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-4">
        {/* main section*/}
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>

          <div className="grid gap-5 mt-5">
            {/* other sections */}
            {otherSections.map((os) => (
              <div key={os.curationId} className="">
                <h1 className="text-xl font-bold border-b-2 border-red-700 pb-2">
                  {os.title}
                </h1>
                <div className="grid grid-cols-3 gap-2 mt-5">
                  {os.articles.map((news) => (
                    <NewsCard news={news} key={news.id}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* most read section */}
        <div className="col-span-1">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
