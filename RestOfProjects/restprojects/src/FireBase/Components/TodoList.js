import React from "react";
import db from "./Firebase";

const TodoList = ({ todo }) => {
  return (
    <div>
      <ul>
        <li style={{ color: "red", fontSize: 30 }}>{todo.todo}</li>
        <button onClick={() => db.collection("todos").doc(todo.id).delete()}>
          Delete Me
        </button>
      </ul>
    </div>
  );
};

export default TodoList;
