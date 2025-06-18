import React from 'react';

export default function TodoItem({ todoitems, ondeletething }) {
  return (
    <div>
      <h4>{todoitems.title}</h4>
      <p>{todoitems.desc}</p>
      <button className="btn btn-sm btn-danger" onClick = {()=>{ondeletething(todoitems)} }>
        Delete
      </button>
    </div>
  );
}
