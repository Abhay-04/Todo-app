import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {toast} from "react-toastify"

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSumbit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please Fill Input!" , {
        autoClose: 2000,
      })
      return;
    }

    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };

    addTodo(newTodo);

    setTitle("");
  }

  return (
    <form onSubmit={handleSumbit} className="todoForm">
      <input className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todoForm__btn" 
       type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
