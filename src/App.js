import './App.css';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import TodoList from './pages/TodoList';

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
  
  return (
    <>
      <Layout/>
      <TodoList/>
      

      <div className="list">
        <div className="list-wrap">
          <h2>Working</h2>
          <div>
            {todos.filter(todo => todo.isDone === false).map((todo) => (
              <div className="todo-box" key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <div>
                  <button onClick={()=>onRemove(todo.id)}>삭제하기</button>
                  <button onClick={()=>doneToggle(todo.id)}>완료</button>
                </div>
              </div>
            ))}
          </div>
          <h2>Done</h2>
          <div>
            {todos.filter(todo => todo.isDone === true).map((todo) => (
              <div className="todo-box" key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <div>
                  <button onClick={()=>onRemove(todo.id)}>삭제하기</button>
                  <button onClick={()=>cancelToggle(todo.id)}>취소</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </>
  );
}

export default App;