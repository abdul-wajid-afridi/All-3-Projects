import React, { useEffect, useState } from "react";

const Index = () => {
  const [User, setUser] = useState([""]);
  const Url = "https://api.github.com/users";
  const GetData = async () => {
    const Data = await fetch(Url);
    const received = await Data.json();
    setUser(received);
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      {User.map((it) => {
        return (
          <div>
            <p>{it.login}</p>
            <p>{it.type}</p>
            <img src={it.avatar_url} style={{ height: 300, width: 300 }} />
          </div>
        );
      })}
    </div>
  );
};

export default Index;
