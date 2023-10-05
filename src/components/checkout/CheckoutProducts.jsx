/** @format */

import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { NumericFormat } from "react-number-format";
import StarRatings from "react-star-ratings";
const CheckoutProducts = ({
  id,
  image,
  title,
  rate,
  formattedPrice,
  count,
  description,
  hideButton,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="bg-white w-[35rem] h-full mx-2 py-4 px-4 z-10 my-5 object-fill">
      <div className=" flex mx-2 py-4 ">
        <div className="h-full w-full pr-3 object-fill">
          <img key={id} src={image} alt="" />
        </div>
        <div className="mt-8 ml-3 inline-block">
          <h3 className="text-blue-500 text-sm">{title}</h3>
          <p className="checkoutDesc">{description}</p>
          <div className=" mt-8">
            <div>
              Price:
              <NumericFormat
                value={formattedPrice}
                thousandsGroupStyle={true}
                thousandSeparator=","
                displayType={"text"}
                prefix="$"
              />
            </div>
            <div className="mb-3">
              <StarRatings
                rating={rate}
                starRatedColor="rgb(255,170,1)"
                starEmptyColor="lightgray"
                starDimension="20px"
                starSpacing="0.15px"
              />
              <span className="mt-3">{count}</span>
            </div>
          </div>
          {!hideButton && (
            <button
              onClick={removeFromBasket}
              className="text-center bg-yellow-400 text-black-400 rounded-md h-10 text-blue-500 w-full font-bold mt-5"
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
