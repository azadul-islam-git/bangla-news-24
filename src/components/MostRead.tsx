import Link from "next/link";
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
    <div className="card mt-3 rounded-xl border border-base-300 bg-base-100 p-4">
      <h1 className="mb-3 border-b border-base-300 pb-2 text-lg font-bold text-red-600">
        সর্বাধিক পঠিত
      </h1>

      <div className="grid gap-3">
        {mostRead.map((mr, i) => (
          <Link
            href={`/news/${mr.id}`}
            key={mr.id}
            className="flex gap-3 text-sm font-medium hover:text-red-600 transition-colors"
          >
            <span className="font-bold text-red-600">{i + 1}.</span>
            <h2>{mr.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
