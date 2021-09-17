import React, { useEffect, useState } from "react";
import db from "./Firebase";
import firebase from "firebase";

const TodoIndex = () => {
  const [Input, setInput] = useState("");
  const [todos, settodos] = useState(["abc", "next", "dec"]);
  const TodoHandler = (event) => {
    event.preventDefault();
    //adding the data to firebase
    db.collection("todos").add({
      todo: Input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        settodos(snap.docs.map((doc) => doc.data().todo));
      });
  }, []);
  const DeleteHandler = () => {};
  return (
    <div>
      <h1>trying todo app</h1>
      <form>
        <label>Enter A Todo</label>
        <input
          value={Input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button disabled={!Input} onClick={TodoHandler}>
          Add Todo
        </button>
      </form>
      {todos.map((item) => {
        return (
          <ul>
            <li>{item}</li>
            <button onClick={DeleteHandler}>Delete</button>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoIndex;
