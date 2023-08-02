import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddTask() {
  return (
    <div>
      <Link
        href={"/addTask"}
        className="flex border-2 p-2 rounded-lg border-blue-600 bg-blue-600 font-bold text-white w-full"
      >
        <div> ADD New Task</div>
        <AiOutlinePlus className="ml-2 font-extrabold" size={18} />
      </Link>
    </div>
  );
}

export default AddTask;
