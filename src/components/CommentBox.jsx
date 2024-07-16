import prisma from "@/utils/prisma";

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="mb-4 flex flex-col bg-neutral-800 rounded-md">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="p-4"
          >
            <p className="font-semibold">{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
