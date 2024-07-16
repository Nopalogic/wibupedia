import Image from "next/image";

import VideoPlayer from "@/components/VideoPlayer";
import CollectionButton from "@/components/CollectionButton";
import CommentBox from "@/components/CommentBox";
import CommentField from "@/components/CommentField";

import { getAnimeResponse } from "@/utils/api";
import { authUserSession } from "@/utils/auth";

import prisma from "@/utils/prisma";

export default async function AnimeDetail({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  const members = new Intl.NumberFormat("en-Id").format(anime.members);

  return (
    <>
      <div className="mx-4 mb-4 mt-[70px] flex gap-4 pt-4 md:flex-col">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.images.jpg.image_url}
          width={450}
          height={450}
          className="w-full rounded-md object-cover md:hidden"
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
              {anime.title}
            </h3>
            <div className="flex h-5 items-center gap-3">
              <p className="text-sm capitalize">
                {anime.season} {anime.year}
              </p>
              <div className="h-4 w-[1px] bg-white/10" />
              <p className="text-sm capitalize">{anime.type}</p>
              <div className="h-4 w-[1px] bg-white/10" />
              <p className="text-sm capitalize">{anime.studios[0].name}</p>
            </div>
          </div>

          <div className="my-4 flex items-center gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <div className="flex items-center gap-1 md:flex-col md:justify-center">
                <h3 className="capitalize">score</h3>
                <p>
                  <span className="font-bold md:text-xl">{anime.score}</span>/10
                </p>
              </div>
              <div className="flex items-center gap-1 md:flex-col md:justify-center">
                <h3 className="capitalize">rank</h3>
                <p className="font-bold">#{anime.rank}</p>
              </div>
              <div className="flex items-center gap-1 md:flex-col md:justify-center">
                <h3 className="capitalize">popularity</h3>
                <p className="font-bold">#{anime.popularity}</p>
              </div>
              <div className="flex items-center gap-1 md:flex-col md:justify-center">
                <h3 className="capitalize">members</h3>
                <p className="font-bold">{members}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4 flex flex-col gap-4 md:flex-row">
        <div className="hidden w-1/4 md:block">
          <Image
            src={anime.images.webp.image_url}
            alt={anime.images.jpg.image_url}
            width={450}
            height={450}
            className="w-full rounded-md object-cover"
          />
        </div>

        <div className="w-full md:w-3/4">
          <VideoPlayer videoUrl={anime.trailer.youtube_id} />
        </div>
      </div>

      <div className="mx-4 mb-4">
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.images.webp.image_url}
            anime_title={anime.title}
          />
        )}
      </div>

      <div className="mx-4 mb-8 flex gap-4">
        <div className="hidden w-1/4 md:block">
          <div className="mb-3 text-sm">
            <h4 className="text-lg font-semibold">Alternative Title</h4>
            <hr className="mb-2" />
            <p>Japanese: {anime.title_japanese}</p>
            <p>English: {anime.title_english}</p>
          </div>
          <div className="text-sm">
            <h4 className="text-lg font-semibold">Information</h4>
            <hr className="mb-2" />
            <p>Type: {anime.type} </p>
            <p>Episodes: {anime.episodes} </p>
            <p>Status: {anime.status} </p>
            <p>Aired: {anime.aired.string} </p>
            <p>Source: {anime.source} </p>
            <p>Genre: {anime.genres.map((genre) => `${genre.name}, `)} </p>
            <p>Duration: {anime.duration} </p>
            <p>Rating: {anime.rating} </p>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <h4 className="text-lg font-semibold">Synopsis</h4>
          <hr className="mb-2" />
          <p className="whitespace-pre-wrap text-justify text-base">
            {anime.synopsis}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h3 className="text-color-primary mb-2 text-xl">Comment</h3>

          {user && (
            <CommentField
              anime_mal_id={id}
              user_email={user?.email}
              username={user?.name}
              anime_title={anime.title}
            />
          )}
        </div>

        <CommentBox anime_mal_id={id} />
      </div>
    </>
  );
}
