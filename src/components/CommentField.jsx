"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentField({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }

    return;
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-primary">postingan terkirim...</p>}

      <textarea
        onChange={handleInput}
        value={comment}
        className="h-32 w-full rounded-md bg-neutral-800 p-4 text-base outline-none ring-1 ring-orange-600 focus:ring-2"
      />
      <div className="flex justify-end">
        <button
          onClick={handlePosting}
          className="w-52 rounded bg-orange-500 px-3 py-2"
        >
          Post
        </button>
      </div>
    </div>
  );
}
