import React, { useState, useRef, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function ItemToDo({ id, time, removeItem, index }) {
  const [doneTask, setDoneTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const taskDoneRef = useRef(null);

  const isTaskDone = (e) => {
    setDoneTask(e.target.checked);
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const styleCheckedDiv = "line-through bg-green-400 shadow-inner";
  const styleCheckedRemoveButton = "bg-green-700 text-black";

  useEffect(() => {
    useLocalStorage(id, "doneTask", doneTask);
    useLocalStorage(id, "taskName", taskName);
  }, [doneTask, taskName]);

  useEffect(() => {
    if (doneTask) {
      taskDoneRef.current.classList.add("line-through");
    } else {
      taskDoneRef.current.classList.remove("line-through");
    }
  }, [doneTask]);

  return (
    <li className="flex flex-wrap flex-row items-center mb-5" draggable>
      <h1 className="text-white text-xl mr-4">{index}</h1>
      <div
        className={`bg-gray-800 text-2xl text-gray-700 p-2 rounded-md drop-shadow-2xl hover:scale-105 transition-all grid grid-flow-col gap-5 justify-items-center ${
          doneTask ? styleCheckedDiv : ""
        }`}
        ref={taskDoneRef}
      >
        <input type="checkbox" checked={doneTask} onChange={isTaskDone} />
        <h2 className="mr-3 text-sm text-center">{time}</h2>
        <input
          type="text"
          className="text-gray-950 outline-none bg-zinc-50 rounded-lg text-m h-6 p-2 text-sm"
          placeholder="task"
          value={taskName}
          onChange={handleTaskNameChange}
        />
        <select className="text-black rounded-md text-sm">
          <option value="select">Select difficulty</option>
          <option value="hard">hard</option>
          <option value="medium">medium</option>
          <option value="easy">easy</option>
        </select>
        <button
          className={`text-white bg-blue-600 rounded-xl text-sm px-2 ${
            doneTask ? styleCheckedRemoveButton : ""
          }`}
          onClick={() => removeItem(id)}
        >
          remove
        </button>
      </div>
      <img
        src="src/assets/grip-vertical-solid.svg"
        alt=""
        className="w-3 ml-5 text-white invert"
      />
    </li>
  );
}

export default ItemToDo;
