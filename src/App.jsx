import React, { useState } from "react";
import './App.css';
import TodoList from "./TodoList";

export default function App() {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setList(event.target.value);
  };

  const listOfItem = () => {
    setItem((oldItem) => {
      return [...oldItem, list];
    });
    setList("");
  }

  const deleteItem = (id) => {
    // console.log("deletd")
    setItem((oldItem) => {
      return oldItem.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="Main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Your Item"
            className="input_div"
            value={list}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}>+</button>
          <ol>
            {item.map((itemVal, index) => (
              <TodoList key={index} id={index} onSelect={() => deleteItem(index)} text={itemVal} />
            ))}
          </ol>
        </div>
      </div>
     
      <div className="footer">
        <p>Copyright &copy; 2023 Developed by <a href="https://portfolio.md-shamimsham11.repl.co/" className="no-underline">Md Shamim Akhter</a></p>
      </div>

    </>
  );
}
