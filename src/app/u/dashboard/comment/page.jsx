import Link from "next/link";

import { authUserSession } from "@/utils/auth";
import prisma from "@/utils/prisma";

import DashboardHeader from "@/components/DashboardHeader";

export default async function CommentPage() {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 min-h-screen w-full px-4">
      <DashboardHeader title={"My Comment"} />
      <div className="grid grid-cols-1 gap-4 py-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
