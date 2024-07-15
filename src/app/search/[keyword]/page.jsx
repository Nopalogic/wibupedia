import AnimeCard from "@/components/AnimeCard";
import { getAnimeResponse } from "@/utils/api";

export default async function SearchPage({ params }) {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-slate-100">
            {`Searching for ${decodedKeyword}`}
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-5">
          {searchAnime.map((anime, index) => (
            <AnimeCard
              key={index}
              animeUrl={`/anime/${anime.mal_id}`}
              title={anime.title}
              imgUrl={anime.images.webp.image_url}
            />
          ))}
        </div>
      </section>
    </>
  );
}
