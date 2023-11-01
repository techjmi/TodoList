import React from "react";
import { FaTimes } from 'react-icons/fa';

export default function TodoList(props) {
 
  return (
    <div className="todo_style">
       <li>{props.text}</li>
      
      <FaTimes className="close-icon" aria-hidden="true" onClick={()=>{
      props.onSelect(props.id)} }/>
     
    </div>
  );
}
