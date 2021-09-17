import React, { useEffect, useState } from "react";
import db from "./Config";
const FileIndex = () => {
  const [Upload, setUpload] = useState();
  const [Input, setInput] = useState("");
  const [InputForm, setInputForm] = useState([]);
  const [Form, setForm] = useState([]);
  const FormHandler = (e) => {
    e.preventDefault();

    setForm([...Form, Upload]);
    setInputForm([...InputForm, Input]);
    db.collection("Forms").add({
      Form1: Upload,
    });
    // setForm([...Form, Input]);
    setInput("");
  };

  useEffect(() => {
    db.collection("Forms").onSnapshot((snap) => {
      setForm(snap.docs.map((doc) => doc.data().Form1));
    });
  }, []);
  return (
    <div>
      <form>
        <input
          type="file"
          onChange={(e) => setUpload(URL.createObjectURL(e.target.files[0]))}
          placeholder="+"
        />
        <input
          placeholder="Enter Your Name"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!Input} type="submit" onClick={FormHandler}>
          Submit
        </button>
      </form>
      <div>
        {Form.map((it) => (
          <img src={it} />
        ))}
        {InputForm.map((it) => (
          <h1>{it}</h1>
        ))}
      </div>
    </div>
  );
};

export default FileIndex;
