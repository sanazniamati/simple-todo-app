"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title and description is required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "aplication/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Faild to create a task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        className="w-full border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex gap-8 justify-center">
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-56"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTask;
