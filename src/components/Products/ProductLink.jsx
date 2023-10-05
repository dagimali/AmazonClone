/** @format */

import React from "react";
import StarRatings from "react-star-ratings";
import { useStateValue } from "../StateProvider/StateProvider";

const ProductLink = ({
  id,
  image,
  title,
  formattedPrice,
  rate,
  count,
  description,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        formattedPrice: formattedPrice,
        rate: rate,
        count: count,
        description: description,
      },
    });
  };
  return (
    <div className="w-[20rem] xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <div className="bg-gray-100 h-full  mx-2 py-4 px-4 z-10 hover:scale-[1.05] duration-500 ">
        <div>
          <img className="h-[16rem] w-full" key={id} src={image} alt="" />
        </div>
        <h3 className="text-blue-500 text-lg">{title}</h3>
        <div className="flex justify-between mb-2">
          <div className="">Price: {formattedPrice}</div>
          <div className="leading-none">
            <StarRatings
              rating={rate}
              starRatedColor="rgb(255,170,1)"
              starEmptyColor="lightgray"
              starDimension="0.875rem"
              starSpacing="0.05vw"
            />

            <span className="text-sm">{count}</span>
          </div>
        </div>

        <button
          onClick={addToBasket}
          className="text-center bg-yellow-400 text-black-400 rounded-md h-10 text-blue-500 w-full font-bold text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductLink;
