import React from "react";
import { useGlobalContext } from "../StateProvider";
import "./CheckOutProducts.css";
const CheckOutProducts = ({ id, image, name, price, desc, button }) => {
  const [state, dispatch] = useGlobalContext();
  const RemoveFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="checkOutProducts">
      <img src={image} className="checkOutProducts__image" />
      <div className="checkOutProducts__info">
        <p>{name}</p>
        <p>{id}</p>
        <p>
          $<strong>{price}</strong>
        </p>
        <p1>{desc}</p1>
        <br />
        <button onClick={RemoveFromBasket} className="checkOutProducts__btn">
          Remove Items
        </button>
      </div>
    </div>
  );
};

export default CheckOutProducts;
