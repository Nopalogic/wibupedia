import { authUserSession } from "@/utils/auth";
import prisma from "@/utils/prisma";

import AnimeCard from "@/components/AnimeCard";
import DashboardHeader from "@/components/DashboardHeader";

export default async function CollectionPage() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-16 min-h-screen w-full px-4">
      <DashboardHeader title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((anime, index) => (
          <AnimeCard
            key={index}
            animeUrl={`/anime/${anime.anime_mal_id}`}
            title={anime.anime_title}
            imgUrl={anime.anime_image}
          />
        ))}
      </div>
    </section>
  );
}
