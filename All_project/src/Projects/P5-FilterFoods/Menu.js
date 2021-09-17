import React from "react";
const Menu = ({ MenuItems }) => {
  return (
    <div className="g__body">
      <div>
        <h2>
          The List Of The Foods
          <hr />
        </h2>
      </div>
      <div className="g__gallary">
        {MenuItems.map((item) => {
          const { id, image, desc, catagory } = item;
          return (
            <div className="g__card">
              <h3>{catagory}</h3>
              <img className="g__image" src={image} />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
