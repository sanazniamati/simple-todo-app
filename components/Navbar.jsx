import React from "react";
import AddTask from "./AddTask";

function Navbar(props) {
  return (
    <div className=" flex justify-between items-center px-8 py-4 bg-slate-200 ">
      <h1 className=" text-2xl font-semibold">TODO List App</h1>
      <AddTask />
    </div>
  );
}

export default Navbar;
