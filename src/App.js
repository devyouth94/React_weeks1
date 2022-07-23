import './App.css';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <>
      <Layout/>
      <TodoList/> 
    </>
  );
}

export default App;