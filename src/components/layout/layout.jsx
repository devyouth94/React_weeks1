import React, {useState} from "react";
import TodoList from "../../pages/TodoList";
import Form from "../form/Form";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <Header/>
      <Form/>
      <TodoList/>
    </>
  )
}

export default Layout;