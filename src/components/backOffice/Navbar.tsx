import { BellIcon, MoonIcon, UserIcon, SunIcon, BagIcon } from "@/icons";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const theme = "dark";
  return (
    <header className="sticky top-0 w-full flex items-center justify-between px-20 h-16 bg-gray-800">
      <Link href={"#"} className="flex items-center cursor-pointer">
        <BagIcon className="w-8 h-8" />
        <span className="text-2xl font-bold font-sans text-gray-300">
          Nageshwar
          <span className="text-emerald-500 font-serif text-3xl">.</span>
        </span>
      </Link>
      <nav className="space-x-5">
        <button className="p-2 cursor-pointer">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="p-2 cursor-pointer">
          <BellIcon />
        </button>
        <button className="rounded-full p-2 bg-gray-500">
          <UserIcon />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
