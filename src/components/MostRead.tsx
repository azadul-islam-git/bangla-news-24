import React from "react";

interface IMostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead: IMostReadNews[] = data.data;

  return (
    <div className="card p-2 bg-base-100 border border-gray-300 mt-2">
      <h1 className="text-lg font-bold text-red-600 mb-2">সর্বাধিক পঠিত</h1>
      <div className="grid gap-3">
        {mostRead.map((mr, i) => (
          <div key={mr.id}>
            <h2 className="font-medium">
              {i + 1}. {mr.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
