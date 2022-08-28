import React from "react";
import Todoitem from "./Todoitem";
export default function Todos(props) {
  let myStyle={
    minHeight : "70vh",
    margin:"40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h4 className="my-3">TODOS LIST</h4>
    {props.todos.length===0? "No Todos to display" :
      props.todos.map((todo) => {
        
        return(
        <> <Todoitem todos={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })
    }
    </div>
  )
}
 