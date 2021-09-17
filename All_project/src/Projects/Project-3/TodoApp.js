import React, { useState } from "react";

const TodoApp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [User, setUser] = useState([""]);

  const FormHandler = (event) => {
    event.preventDefault();
    const BothUsers = { Name, Email };
    setUser([BothUsers, ...User]);
    setName("");
    setEmail("");
  };
  const DeleteHandler = (Name) => {
    const UpdatedData = User.filter((it) => it.Name !== Name);
    setUser(UpdatedData);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={FormHandler}>
        <input
          name="Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
          className="inpt"
        />
        <input
          name="Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          className="inpt"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {User.map((person) => {
          const { Email, Name } = person;
          return (
            <div>
              <li>
                {Name} : {Email}
                <button onClick={() => DeleteHandler(Name)}>Delete</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
