import React from "react";
export default function Todoitem({ todos, onDelete }) {
  return (
    <div className="container">
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
  )
}
