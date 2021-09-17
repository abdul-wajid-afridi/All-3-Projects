import React from "react";
import CurrencyFormat from "react-currency-format";
import { AddTotalBasket } from "../reducer";
import { useGlobalContext } from "../StateProvider";
import "./Subtotal.css";
const SubTotal = () => {
  const [{ basket }] = useGlobalContext();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal : ({basket.length} Items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={AddTotalBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkout__button">Proceed To CheckOut</button>
    </div>
  );
};

export default SubTotal;
