import React from "react";
import { DoneTodo, WorkingTodo } from "../todo/Todo";
import './list.css';

const List = ({todos, onRemove, doneToggle, cancelToggle}) => {
  return (
    <div className="list">
      <h2>Working</h2>
      <div>
        {todos.filter(todo => todo.isDone === false).map((todo) => (
          <WorkingTodo key={todo.id} todo={todo} onRemove={onRemove} doneToggle={doneToggle}/>
        ))}
      </div>
      <h2>Done</h2>
      <div>
        {todos.filter(todo => todo.isDone === true).map((todo) => (
          <DoneTodo key={todo.id} todo={todo} onRemove={onRemove} cancelToggle={cancelToggle}/>
        ))}
      </div>
    </div>
  )
}

export default List;
