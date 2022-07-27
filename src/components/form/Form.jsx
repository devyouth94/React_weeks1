import React, { useState } from "react";
import List from "../list/List";
import './form.css';

const Form = () => {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부합시다.",
      isDone: false
    }
  ])

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const doneToggle = (e) => {
    let done = todos.map(todo => {
      if(todo.id === e) {
        return {
          ...todo,
          isDone: true,
        }
      } else {
        return todo;
      }
    });
    setTodos(done);
  }

  const cancelToggle = (e) => {
    let cancel = todos.map(todo => {
      if(todo.id === e) {
        return {
          ...todo,
          isDone: false,
        }
      } else {
        return todo;
      }
    });
    setTodos(cancel);
  }

  return (
    <>
      <div className="form">
        <div className="form-left">
          <p>TITLE</p>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="➡️"
          />
          <p>CONTENTS</p>
          <input
            type="text"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
            placeholder="➡️"
          />
        </div>
        <div></div>
        <button
          onClick={() => {
            setTodos([...todos, { id: userId, title: title, content: content, isDone: false }]);
            setUserId(userId + 1);
            setTitle("");
            setContent("");
          }}
        >POST !</button>
      </div>
      <List todos={todos} onRemove={onRemove} doneToggle={doneToggle} cancelToggle={cancelToggle}/>
    </>
  )
}

export default Form;