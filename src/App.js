import './App.css';
import { useState } from 'react';
import Layout from './components/layout/Layout';

const App = () => {
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

  return (
    <>
      <div className="header">
        <div className="header-wrap">
          <h1>My Todo List</h1>
          <p>React</p>
        </div>
      </div>

      <div className="form">
        <div className="form-wrap">
          <div className="form-wrap-left">
            <p>제목</p>
            <input
              type="text" 
              value={title} 
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <p>내용</p>
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
                setTodos([...todos, { id: todos.length + 1, title: title, content: content, isDone: false}])
              }}
            >추가하기</button>
          </div>
        </div>
      </div>

      <div className="list">
        <div className="list-wrap">
          <h2>Working</h2>
          <div>
            {todos.map((todo) => {
              <div className="todo-box" id={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <div>
                  <button>삭제하기</button>
                  <button>완료</button>
                </div>
              </div>
            })}
          </div>
          <h2>Done</h2>
          <div>

          </div>
        </div>
      </div> 
    </>
  );
}

export default App;
