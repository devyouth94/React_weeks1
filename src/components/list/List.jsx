import React, { useState } from "react";
import { DoneTodo, WorkingTodo } from "../todo/Todo";
import './list.css';

const List = ({todos}) => {
  return (
    <div className="list">
      <h2>Working</h2>
      <div>
        {todos.filter(todo => todo.isDone === false).map((todo) => (
          <WorkingTodo todo={todo}/>
        ))}
      </div>
      <h2>Done</h2>
      <div>
        {todos.filter(todo => todo.isDone === true).map((todo) => (
          <DoneTodo todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default List;
