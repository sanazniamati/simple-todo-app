import React from "react";
import AddTask from "./AddTask";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

function Navbar() {
  return (
    <div className=" flex justify-between items-center px-8 py-6 border-2 border-black text-white bg-gray-700 ">
      <Link href={"/"} className=" text-2xl font-semibold">
        TODO List App
      </Link>
      <div className="flex justify-center items-center gap-4">
        <AddTask />
        <ThemeButton />
      </div>
    </div>
  );
}

export default Navbar;
