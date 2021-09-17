import React, { useEffect, useState } from "react";
import firebase from "firebase";
import db from "./Firebase";
const Image = () => {
  const [Name, setName] = useState("");
  const [image, setimage] = useState();
  const [Store, setStore] = useState([]);
  const FormHandler = (event) => {
    event.preventDefault();
    db.collection("Gallary").add({
      name: Name,
      img: image,
    });
    // setStore([
    //   ...Store,
    //   {
    //     name: [Name],
    //     img: [image],
    //   },
    // ]);
    setName("");
    setimage("");
  };
  useEffect(() => {
    db.collection("Gallary").onSnapshot((snap) => {
      setStore(
        snap.docs.map((doc) => {
          const name = doc.data().name;
          const imgs = doc.data().img;
          return (
            <div>
              <p>{name}</p>
              <img src={imgs} style={{ height: 200, width: 200 }} />
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
          placeholder="say some thing"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="file"
          onChange={(event) =>
            setimage(URL.createObjectURL(event.target.files[0]))
          }
        />
        <button type="submit" onClick={FormHandler}>
          Save
        </button>
      </form>
      {Store}
    </div>
  );
};

export default Image;
