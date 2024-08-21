import Button from "./Button";
import { useState } from "react";

// Tasks component: Manages and displays tasks associated with a project
export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  const [enteredTask, setEnteredTask] = useState("");

  // Handle input change and update state
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  // Handle adding a new task when the button is clicked
  function handleAddTask() {
    onAddTask(enteredTask);
    setEnteredTask(""); // Clear input field after adding task
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-600 mb-2">Tasks</h2>
      <div className="w-[35rem]">
        <div className="flex items-center justify-between">
          <input
            onChange={handleChange}
            value={enteredTask}
            type="text"
            className="w-2/3 p-1 border-b-4 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
          <Button onClick={handleAddTask}>+ Add Task</Button>
        </div>
        {tasks.length === 0 && (
          <p className="flex flex-col gap-1 my-4">
            This project doesn't have any task for now
          </p>
        )}
        {tasks.length > 0 && (
          <ul className="bg-stone-100 text-lg text-stone-800  gap-4 mt-2.5 p-1 list-inside list-[circle]">
            {tasks.map((task) => (
              <li key={task.id} className="flex  justify-between mt-2 ">
                <span>{task.text}</span>
                <button className="text-stone-700 hover:text-red-700   " onClick={() => onDeleteTask(task.id)}>Clear</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
