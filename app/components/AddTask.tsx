import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddTask() {
  return (
    <div>
      <button className="btn btn-primary w-full">
        ADD New Task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
    </div>
  );
}

export default AddTask;
