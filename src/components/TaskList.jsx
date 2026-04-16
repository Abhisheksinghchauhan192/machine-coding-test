import { useState } from "react";

export default function TaskList({ todos, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [task, setTask] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setTask(todo.desc);
  };

  const saveEdit = (todo) => {
    if (!task.trim()) return;
    onEdit(todo, task);
    setEditingId(null);
    setTask("");
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-2 items-center mb-2">
          {editingId === todo.id ? (
            <>
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border p-1"
              />
              <button onClick={() => saveEdit(todo)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{todo.desc}</span>
              <button  className="text-red-500"onClick={() => onDelete(todo)}>Delete</button>
              <button className="text-emerald-400" onClick={() => startEditing(todo)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}