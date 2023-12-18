import React from "react";
import { ImCross } from "react-icons/im";

function Todo({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo__title">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          return toggleCompleted(id);
        }}
      />

      <p className={`${completed ? "completed" : ""}`}>{title}</p>


      </div>

      <div className="cross__btn" onClick={() => {
          return removeTodo(id);
        }}>
          <ImCross />

      </div>
      
      
      
    </div>
  );
}

export default Todo;
