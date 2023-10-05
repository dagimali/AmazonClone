/** @format */

import React, { useState, useEffect } from "react";
import ProductPromoLink from "./ProductPromoLink";

const ProductPromoAmazon = () => {
  const [promoProduct, setPromoProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPromoProduct(data.products);
      });
  }, []);
  // console.log(promoProduct);
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className=" w-full bg-white">
          <h1 className="text-xl font-bold">
            Frequently purchased Electronics
          </h1>
          <div className="bg-white flex overflow-x-scroll overflow-y-hidden whitespace-nowrap mt-2">
            {promoProduct.slice(0, 10).map((item, i) => {
              return (
                <div key={i} className="w-full object-contain mx-1">
                  <ProductPromoLink thumbnail={item.thumbnail} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPromoAmazon;
