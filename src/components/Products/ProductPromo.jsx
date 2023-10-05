/** @format */

import React, { useState, useEffect } from "react";
import ProductPromoLink from "./ProductPromoLink";

const ProductPromo = () => {
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
      <div className="bg-gray-100 p-2 w-full h-36 mb-5 md:h-64">
        <div className=" w-full h-full bg-white">
          <h1 className="text-xl font-bold">Best Sellers in Home & Kitchen</h1>
          <div className="bg-white flex overflow-x-auto whitespace-nowrap">
            {promoProduct.slice(10, 18).map((item, i) => {
              return (
                <div key={i} className="w-auto">
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

export default ProductPromo;
