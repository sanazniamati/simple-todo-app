import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

function TaskList() {
  return (
    <div className=" border-2 border-solid border-black p-8 mb-4 flex justify-between">
      <div>
        <h1>topic title</h1>
        <div>topic description</div>
      </div>
      <div className="flex justify-between items-center">
        <RemoveBtn />
        <Link href={"/editTask/1"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}

export default TaskList;
