import React from 'react'
import  Todos  from "./Todos";
import  Addtodo  from "./Addtodo";
export const Home = (props) => {
  const {addTodo,todos,onDelete}=props
  return (
    
    <>
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    </>
      
  )
}
