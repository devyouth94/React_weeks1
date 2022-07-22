import React, {useState} from "react";
import './todo.css'

const Todo = () => {
  return (
    <div className="todo-box">
      <h3>리액트 공부하기</h3>
      <p>리액트 기초를 공부합니다.</p>
      <div>
        <button>삭제하기</button>
        <button>완료</button>
      </div>
    </div>
  )
}

export default Todo;
