import Link from "next/link";

import Searchbar from "./Searchbar";

import { getAnimeResponse } from "@/utils/api";

import { authUserSession } from "@/utils/auth";
import UserDropdown from "./UserDropdown";

export default async function Navbar() {
  const animeData = await getAnimeResponse("anime");

  const user = await authUserSession();

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-900 text-white">
      <nav className="flex flex-col justify-between gap-2 p-4 md:flex-row md:items-center">
        <Link href={"/"} className="text-lg font-bold uppercase">
          Wibupedia
        </Link>

        <div>
          <Searchbar data={animeData} />
        </div>

        <div className="flex justify-end gap-2">
          {user ? (
            <UserDropdown user={user.name} img={user.image} />
          ) : (
            <Link href="/api/auth/signin">
              <button className="rounded-md bg-orange-500 px-5 py-2 hover:bg-orange-600">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
