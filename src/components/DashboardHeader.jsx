"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function DashboardHeader({ title }) {
  const router = useRouter();

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="my-4 flex items-center gap-4">
      <button onClick={handleBack}>
        <ArrowLeftIcon className="size-6" />
      </button>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
}
