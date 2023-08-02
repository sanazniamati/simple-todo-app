import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("faild to fetch tasks");
    }
    return res.json();
  } catch (error) {
    console.log("error list: ", error);
  }
};

async function TaskList() {
  const { tasks } = await getTasks();
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className=" border-2 border-solid border-black p-8 mb-4 flex justify-between dark:border-white dark:bg-white "
        >
          <div>
            <h1 className=" font-extrabold text-2xl">{task.title}</h1>
            <div className=" font-semibold">{task.description}</div>
          </div>
          <div className="flex justify-between items-center">
            <RemoveBtn id={task._id} />
            <Link href={`/editTask/${task._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskList;
