"use client";

import React from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";
import Image from "next/image";

export default function UserDropdown({ user, img }) {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);

  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div
        className="block cursor-pointer select-none"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center gap-2 text-white">
          <Image
            src={img}
            alt="profile picture"
            className="size-10 rounded-full"
            width={250}
            height={250}
          />
          {user}
        </div>
      </div>

      <div
        ref={popoverDropdownRef}
        className={`${dropdownPopoverShow ? "block" : "hidden"} z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg`}
      >
        <Link
          href="/u/dashboard"
          className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700"
        >
          Dashboard
        </Link>
        <Link
          href="/api/auth/signout"
          className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-slate-700"
        >
          Sign Out
        </Link>
      </div>
    </>
  );
}
