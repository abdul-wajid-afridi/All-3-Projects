import React, { useEffect, useState } from "react";
import firebase from "firebase";
import db from "./Firebase";
const FormIdex = () => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Store, setStore] = useState([]);
  const FormHandler = (event) => {
    event.preventDefault();
    // const saveData = [Name, Email];
    setStore([...Store, Name, Email]);
    db.collection("FormData").add({
      name: Name,
      email: Email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setEmail("");
  };
  useEffect(() => {
    db.collection("FormData")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setStore(
          snap.docs.map((doc) => {
            //distructured the data
            const name = doc.data().name;
            const email = doc.data().email;
            return (
              <div>
                <li>{name}</li>
                <li>{email}</li>
              </div>
            );
          })
        );
      });
  }, []);
  return (
    <div>
      <form>
        <input
          placeholder=" user Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder=" user Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button disabled={(!Name, !Email)} type="submit" onClick={FormHandler}>
          Submit
        </button>
      </form>
      {Store.map((it) => (
        <li>{it}</li>
      ))}
    </div>
  );
};

export default FormIdex;
