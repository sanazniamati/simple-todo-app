import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddTask() {
  return (
    <div>
      <Link href={"/addTask"} className="btn btn-primary w-full">
        ADD New Task
        <AiOutlinePlus className="ml-2" size={18} />
      </Link>
    </div>
  );
}

export default AddTask;
