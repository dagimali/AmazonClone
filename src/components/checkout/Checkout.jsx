/** @format */

import React from "react";
import CheckoutImage from "../../CommonResources/Images/ImageFIles/OCC_Amazon1._CB423492668_.jpg";
import Cart from "./Cart";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "../StateProvider/StateProvider";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  return (
    <>
      <div className="flex mt-5 px-5">
        <div className="w-3/4">
          <div>
            <img src={CheckoutImage} alt="Checkout" />
          </div>
          <div className="ml-5 w-full">
            <span className="text-md font-bold ">Hello,</span>
            <h1 className="text-xl font-bold ml-5">Your Shoping Basket</h1>
          </div>
        </div>
        <Cart className="flex-grow w-1/4" />
      </div>
      <div className="w-[24rem]">
        {basket?.map((item, i) => {
          return (
            <CheckoutProducts
              id={item.id}
              image={item.image}
              rate={item.rate}
              title={item.title}
              formattedPrice={item.formattedPrice}
              count={item.count}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Checkout;
