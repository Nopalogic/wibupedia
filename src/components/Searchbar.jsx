"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Searchbar({ data }) {
  const searchRef = useRef();
  const router = useRouter();

  const [showSuggestion, setShowSuggestion] = useState(false);
  const [animeData, setAnimeData] = useState([]);
  const [searchingText, setSearchingText] = useState("");

  const handleChangeInput = (event) => {
    const keyword = searchRef.current.value;
    if (keyword.trim() === "") {
      setShowSuggestion(false);
      return;
    }

    const animeSuggest = data.filter((item) =>
      item.title.toLowerCase().startsWith(event.target.value.toLowerCase()),
    );

    setAnimeData(animeSuggest);
    setShowSuggestion(true);
    setSearchingText(`Searching for '${keyword}'`);
  };

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
      setShowSuggestion(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    searchRef.current.value = "";
    setShowSuggestion(false);
    router.push(`/anime/${suggestion.mal_id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.parentElement.contains(event.target)
      ) {
        setShowSuggestion(false);
        setSearchingText("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative w-full md:w-[30rem]">
        <input
          type="text"
          placeholder="Search for anime..."
          ref={searchRef}
          onKeyDown={handleSearch}
          onChange={handleChangeInput}
          className="w-full rounded p-2 pl-8 text-black outline-none focus:ring focus:ring-orange-500"
        />
        <MagnifyingGlassIcon className="absolute left-1 top-2 size-6 text-gray-500" />
      </div>

      {showSuggestion && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm md:w-[30rem]">
          {animeData.map((anime) => (
            <div
              key={anime.mal_id}
              onMouseDown={() => handleSuggestionClick(anime)}
              className="relative cursor-pointer select-none py-2 pl-4 pr-4 text-black hover:bg-slate-600 hover:text-white"
            >
              {anime.title}
            </div>
          ))}
          <p className="relative cursor-pointer select-none py-2 pl-4 pr-4 text-black hover:bg-slate-600 hover:text-white">
            {searchingText}
          </p>
        </div>
      )}
    </>
  );
}
