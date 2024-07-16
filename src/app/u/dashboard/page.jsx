import { authUserSession } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
  const user = await authUserSession();

  return (
    <div className="text-color-primary mt-8 flex flex-col items-center justify-center h-screen">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} className="rounded-full" />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/u/dashboard/collection"
          className="bg-color-accent text-color-dark px-4 py-3 text-xl font-bold"
        >
          My Collection
        </Link>
        <Link
          href="/u/dashboard/comment"
          className="bg-color-accent text-color-dark px-4 py-3 text-xl font-bold"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
}
