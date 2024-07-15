"use client";

import AnimeCard from "@/components/AnimeCard";
import Pagination from "@/components/Pagination";

import { useEffect, useState } from "react";

export default function PopularPage() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}`,
    );
    const popularAnime = await response.json();
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-slate-100">Anime Terpopular</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-5">
        {topAnime.data?.map((anime, index) => (
          <AnimeCard
            key={index}
            animeUrl={`/anime/${anime.mal_id}`}
            title={anime.title}
            imgUrl={anime.images.webp.image_url}
          />
        ))}
      </div>
      <hr className="mt-8 bg-white/10" />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}
