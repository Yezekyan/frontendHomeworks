import { useContext, useState } from "react";
import { ToDoContext } from "../context/context";

export const Add = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const context = useContext(ToDoContext);
  if(!context){
    throw new Error("Wrong place");
  }
  const { addToDo } = context;
  function addHandler(){
    if(inputValue.trim() === ""){
      setError("Input cannot be empty");
      return;
    }
    const newToDo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      completed: false
    }
    addToDo(newToDo)
    setInputValue("");
    setError("");
  }
  return (
    <>
    <div>
      {error && <p style={{color: "red"}}>{error}</p>}
      <input onChange={(e)=> setInputValue(e.target.value)} value = {inputValue} type="text" placeholder="Enter a new todo..." />
      <button onClick={addHandler}>Add</button>

    </div>
    </>
  )
}