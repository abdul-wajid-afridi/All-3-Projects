import React from "react";
import { useGlobalContext } from "../Pages/AmazonClone/StateProvider";
import "./Gallary.css";
const Gallary2 = ({ image, name, desc, price, id }) => {
  const [{ basket }, dispatch] = useGlobalContext();
  console.log(basket);
  const AddToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image,
        name,
        desc,
        price,
        id,
      },
    });
  };
  return (
    <>
      <div className="card-2">
        <div className="desc">
          <p>{id}</p>
          <h3>{name}</h3>
          <p>{desc}</p>
          <p>{price}</p>
        </div>
        <img src={image} className="img" />
        <button className="bnt-gallary" onClick={AddToBasket}>
          BUY
        </button>
      </div>
    </>
  );
};

export default Gallary2;
