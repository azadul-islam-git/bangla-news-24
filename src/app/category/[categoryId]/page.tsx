import NewsCard, { INews } from "@/components/NewsCard";

interface CategoryNewsProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryNews = async ({ params }: CategoryNewsProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews: INews[] = data.data;

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-2xl my-2 border-b-2 border-red-800 mb-5">
        {data.title}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
