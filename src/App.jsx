import { useState } from "react";
import "./App.css";
import ItemToDo from "./components/ItemToDo";
import React from "react";
import AddTask from "./components/AddTask";

function App() {
  const [itemKey, setItemKey] = useState([1]);
  const [count, setCount] = useState(2);
  let addTaskFuction = () => {
    console.log("in add function");
    setItemKey([...itemKey, count]);
    setCount((prevCount) => prevCount + 1);
  };
  const removeItem = (i) => {
    let rev = itemKey.filter((item) => item !== i);
    setItemKey(rev);
    console.log("in remove item", rev);
  };

  return (
    <>
      <div className="screen bg-gray-700 w-screen h-screen flex  flex-col items-center">
        <h1 className="text-white text-center font-bold text-4xl pt-5 mb-10">
          To Do List
        </h1>
        <div className="w-3/4 flex flex-col items-center">
          {itemKey.map((item, index) => (
            <ItemToDo
              key={item}
              id={item}
              index={index + 1}
              removeItem={removeItem}
            />
          ))}
        </div>
        <AddTask onClick={addTaskFuction} />
      </div>
    </>
  );
}

export default App;
// add fuctionality to the add function DONE
// add remove fuctionality DONE
// make the components drangable
// add time and date selection on click clicking time and date
// add cross threw on task complete
// store the data in local storage
