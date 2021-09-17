import React, { useEffect, useState } from "react";
import "./Style.css";
import img1 from "../../ASSET/img1.jpg";
const Index2 = () => {
  const Url = "https://api.github.com/users";
  const [Tours, setTours] = useState([""]);
  const Lorem = `{Ipsum fugiat anim velit do ut pariatur aliqua mollit eu proident culpa sit. Excepteur officia anim eu amet anim ex. Duis id id anim dolore id deserunt pariatur dolore esse consequat consectetur consequat culpa ad. Ex enim veniam eu do amet enim aliqua qui nostrud sit. Amet minim Lorem quis et. Ex non occaecat laborum tempor deserunt ullamco nostrud irure et.
  Cupidatat elit reprehenderit esse cupidatat ipsum reprehenderit do amet. Velit laboris in cupidatat mollit pariatur cillum reprehenderit veniam amet fugiat ad. Esse in dolor irure aute ipsum duis. Commodo minim est amet ad enim deserunt. Veniam occaecat aliqua ipsum ullamco fugiat minim do minim culpa. Eu non tempor fugiat nulla do quis incididunt. Voluptate commodo fugiat fugiat fugiat ea nisi cillum deserunt culpa.
  Velit ut pariatur laborum consequat enim est ad labore et occaecat. Aute cillum ut culpa sit eu elit commodo velit ullamco. Aliqua Lorem id ut laboris sit ullamco aliquip consequat enim velit et non.`;

  const ToursData = async () => {
    const GetTours = await fetch(Url);
    const ReceivedTours = await GetTours.json();
    setTours(ReceivedTours);
  };

  useEffect(() => {
    ToursData();
  }, []);
  {
    return (
      <div className="container">
        {Tours.map((tour) => {
          const { login, type, id, avatar_url } = tour;
          return (
            <div className="card" key={id}>
              <img
                className="image"
                src={avatar_url}
                style={{ width: "100%" }}
              />
              <p>{login}</p>
              <p>{type}</p>
              <p>{Lorem}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Index2;
