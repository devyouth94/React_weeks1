import React, {useState} from "react";

const WorkingTodo = ({todo}) => {

  console.log(todo);
  return (
    <div className="todo-box" key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={() => onRemove(todo.id)}>삭제하기</button>
        <button onClick={() => doneToggle(todo.id)}>완료</button>
      </div>
    </div>
  )
}

const DoneTodo = ({todo}) => {
  return (
    <div className="todo-box" key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={() => onRemove(todo.id)}>삭제하기</button>
        <button onClick={() => cancelToggle(todo.id)}>취소</button>
      </div>
    </div>
  )
}

export {WorkingTodo, DoneTodo};
