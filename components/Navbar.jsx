import React from "react";
import AddTask from "./AddTask";
import Link from "next/link";

function Navbar(props) {
  return (
    <div className=" flex justify-between items-center px-8 py-4 bg-slate-200 ">
      <Link href={"/"} className=" text-2xl font-semibold">
        TODO List App
      </Link>
      <AddTask />
    </div>
  );
}

export default Navbar;
