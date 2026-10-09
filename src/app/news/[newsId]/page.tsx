import Image from "next/image";
import React from "react";

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const newsDetails = data.data;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <article>
        <h1 className="mb-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {newsDetails.title}
        </h1>

        <div className="mb-8 overflow-hidden rounded-xl sm:rounded-2xl">
          <Image
            src={newsDetails.imageUrl}
            alt={newsDetails.title}
            width={1200}
            height={675}
            className="h-auto max-h-125 w-full object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
          />
        </div>

        <p className="text-base leading-7 text-base-content/80 sm:text-lg sm:leading-8">
          {newsDetails.text}
        </p>
      </article>
    </div>
  );
};

export default NewsDetails;
