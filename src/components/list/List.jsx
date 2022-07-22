import React, {useState} from "react";
import './list.css'
import Todo from "../todo/Todo";

const List = () => {
  return (
    <div className="list">
      <div className="list-wrap">
        <h2>Working</h2>
        <Todo></Todo>
        <h2>Done</h2>
        <div>

        </div>
      </div>
    </div> 
  )
}

export default List;
