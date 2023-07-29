import React from "react";

function AddTask() {
  return (
    <form>
      <input
        className=" w-full border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task Title"
      />
    </form>
  );
}

export default AddTask;
