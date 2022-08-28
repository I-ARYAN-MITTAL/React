import './App.css';
import  Header  from "./my components/Header";
import  Footer  from "./my components/Footer";
import {About} from "./my components/About";
import {Home} from "./my components/Home";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  } 

  const onDelete=(todo)=>{
    console.log("i m on delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title , desc)=>{
    console.log("i m adding this todo",title,desc)
    let sno;
    if(todos.length===0)
    {
      sno = 0;
    }
    else{
       sno=todos[todos.length-1].sno + 1;
    }
     const myTodo={
      sno:sno,
      title:title,
      desc:desc
  }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Router>
      <Header title="My list" searchbar={true}/>
      <Routes>
          <Route exact path="/" element={<Home onDelete={onDelete} todos={todos} addTodo={addTodo} />}/>
          <Route exact path="/about" element={<About/>}/>
          </Routes>
        <Footer/>
    </Router>
     </>
  ); 
}
export default App;