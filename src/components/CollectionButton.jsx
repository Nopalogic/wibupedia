"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function CollectionButton({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();

    if (collection.isCreated) {
      setIsCreated(true);
    }

    return;
  };

  return (
    <>
      {isCreated ? (
        <>
          <p className="flex w-full justify-center gap-2 rounded bg-orange-500 px-2 py-1 hover:bg-orange-600">
            Collected
          </p>
        </>
      ) : (
        <>
          <button
            onClick={handleCollection}
            className="flex w-full justify-center gap-2 rounded bg-orange-500 px-2 py-1 hover:bg-orange-600"
          >
            <PlusIcon className="size-6" />
            Add to Collection
          </button>
        </>
      )}
    </>
  );
}
