import React, { useEffect, useState } from "react";
import db from "./Components/Firebase";
import TodoList from "./Components/TodoList";
import firebase from "firebase";
const FireBaseIndex = () => {
  const [todos, settodos] = useState([""]);
  const [Input, setInput] = useState("");
  const FormHandler = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      // indsie the add we are adding the objects objects mean{brakets} which we can easily store multiple arrays inside objects
      //inside the db collection that will create a collection with the name of the todos and that will add
      //the down key as todo and the values will be from the inputs
      todo: Input,
      //the todo is actually a key that generates inside the firebase (collection/documents) inside the key we store the data
      //the input is actually the values which comes from the imputs data
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //this is been used for the time and to make the data in order form
    });
    // settodos([...todos, Input]);
    setInput("");
  };

  useEffect(() => {
    //here we are accessing the database as (db)inside that db we have a collection that we have created and inside that
    //we created a todos name collection so we accessed that now we want to take a onSnapshot
    // (onSnapshot is just like a map function that takes a parameter and loops the data) of the data
    // (snapshot means take a picture and show us the result on time) onSnapshot takes a parameter and we looped all the data
    //in it
    // db.collection("todos").onSnapshot((snapshot) => {
    //   settodos(snapshot.docs.map((doc) => doc.data().todo));
    // });
    // db.collection("todos").onSnapshot((snap) => {
    //   settodos(snap.docs.map((doc) => doc.data().todo));
    // });
    db.collection("todos")
      .orderBy("timestamp", "desc")
      //oreder by takes two parameters the 1 is for the value which we take from timestamp and the second is the accending por descending order
      .onSnapshot((snap) => {
        settodos(
          snap.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  return (
    <div>
      <form>
        <input
          placeholder="write a todo"
          value={Input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button disabled={!Input} onClick={FormHandler}>
          Add-Todo
        </button>
      </form>
      <div>
        {todos.map((it) => (
          <TodoList todo={it} />
        ))}
      </div>
    </div>
  );
};

export default FireBaseIndex;
