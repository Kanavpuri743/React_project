import React from 'react';
import TodoItem from "./Todoitem.js";

export default function Todos(props) {
  const todos = props.todoitems || [];

  let mystyle = {
    minHeight: "70vh"
  };

  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="my-3">Todos List</h3>
      <hr />
      {
        todos.length === 0 ? (
          <p>No items to display</p>
        ) : (
          todos.map(todo => (
            <div key={todo.sno}>
              <TodoItem 
                todoitems={todo} 
                ondeletething={props.ondeletething} 
              />
              <hr />
            </div>
          ))
        )
      }
    </div>
  );
}
