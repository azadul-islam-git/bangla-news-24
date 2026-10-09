import Image from "next/image";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex gap-2 mt-2">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            height={600}
            width={600}
            alt={firstNews.imageAlt}
            className="p-2 rounded-xl"
          />
        </figure>
        <div className="card-body">
          <p className="font-semibold text-lg text-red-600">
            {firstNews.category}
          </p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>

      {/* other news */}

      <div className="grid grid-2 gap-2">
        {otherNews.slice(0, 4).map((on) => (
          <div
            key={on.id}
            className="bg-base-200 border border-gray-300 p-5 rounded-xl"
          >
            <p className="font-bold text-sm text-red-600">
              {firstNews.category}
            </p>
            {on.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
