import { useRef, useState } from "react";
import TaskList from "../components/TaskList";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const inputref = useRef(null);

  const addTodo = (task) => {
    setTodos((prev) => [task, ...prev]);
  };

  const removeTodo = (task) => {
    setTodos((prev) => prev.filter((item) => item.id !== task.id));
  };

  const editTodo = (task, newTask) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === task.id
          ? { ...item, desc: newTask }
          : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value.trim();

    if (!task) return; 

    const randomid = Date.now();
    addTodo({ id: randomid, desc: task });

    inputref.current.value = "";
  };

  return (
    <div className="flex flex-col  h-[60vh] w-full items-center justify-center gap-4 p-4">
      <h1 className="text-xl font-bold">Add Your Tasks</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputref}
          type="text"
          name="task"
          className="border p-2"
          placeholder="Enter task..."
        />
        <button type="submit" className="ml-2 bg-black text-white px-3 py-1">
          Add
        </button>
      </form>

      <div>
        <h2 className="font-semibold">Your Tasks:</h2>
        <TaskList
          todos={todos}
          onEdit={editTodo}
          onDelete={removeTodo}
        />
      </div>
    </div>
  );
}