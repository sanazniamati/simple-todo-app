import React from "react";

function AddTask() {
  return (
    <form className="flex flex-col gap-4">
      <input
        className=" w-full border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task Title"
      />
      <input
        className=" w-full border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task description"
      />
      <button className=" bg-green-600 font-bold text-white py-3 px-6 w-fit ">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
