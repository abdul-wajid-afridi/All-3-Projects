import React from "react";
import "./CheckOut.css";
import check from "../../../../Images/check.jpg";
import SubTotal from "./SubTotal";
import { useGlobalContext } from "../StateProvider";
import CheckOutProducts from "./CheckOutProducts";
const CheckOut = () => {
  const [{ basket }, dispatch] = useGlobalContext();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={check} className="header-img" />
        <div className="">
          <h2 className="checkout__title"> YOUR SHOPPING CART</h2>

          {basket.map((item) => {
            const { id, image, name, desc, price } = item;
            return (
              <CheckOutProducts
                id={id}
                image={image}
                name={name}
                price={price}
                desc={desc}
                button={"Remove Items"}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;
