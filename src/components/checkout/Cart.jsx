/** @format */

import React from "react";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce(
      (amount, item) => Number(item.formattedPrice.replace(/\$/, "")) + amount,
      0
    );
  // console.log(basket);
  // console.log(amount);
  // console.log(getBasketTotal(basket));
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-3 mx-3">
      <h1>
        Subtotal({basket.length} item):
        <NumericFormat
          value={getBasketTotal(basket)}
          thousandsGroupStyle={true}
          thousandSeparator=","
          displayType={"text"}
          prefix="$"
        />
      </h1>
      <small className="pb-5">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button
        onClick={(e) => navigate("/payment")}
        className="bg-yellow-400 rounded-md w-full text-sm py-1 cursor-pointer"
        type="button"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Cart;
