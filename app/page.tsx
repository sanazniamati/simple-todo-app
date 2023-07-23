import Image from "next/image";
// component
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className=" text-center flex flex-col gap-4 my-5">
        <h1 className=" text-2xl font-semibold">TODO List App</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
}
