"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "aplication/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update task");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className=" w-full border border-slate-500 px-8 py-2"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          className=" w-full border border-slate-500 px-8 py-2"
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-green-600 font-bold text-white py-3 px-6 w-fit "
        >
          UpdateTask
        </button>
      </form>
    </div>
  );
}

export default EditTaskForm;
