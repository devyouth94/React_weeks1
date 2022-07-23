import React, { useState } from "react";
import './form.css';

const Form = () => {
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
    let done = todos.map(todo => {
      if(todo.id === e) {
        return {
          ...todo,
          isDone: false,
        }
      } else {
        return todo;
      }
    });
    setTodos(done);
  }

  console.log(todos);

  return (
    <div className="form">
      <div className="form-left">
        <p>Title</p>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <p>Contents</p>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setTodos([...todos, { id: todos.length, title: title, content: content, isDone: false }]);
            setTitle("");
            setContent("");
          }}
        >POST !</button>
      </div>
    </div>
  )
}

export default Form;