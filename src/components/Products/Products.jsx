/** @format */

import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductLink from "./ProductLink";
import ProductPromo from "./ProductPromo";
import ProductPromoAmazon from "./ProductPromoAmazon";
// import data from "../../CommonResources/storeAPI/FakeStoreAPI.json";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("./FakeStoreAPI.json")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  // console.log(product);

  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto -mt-36 sm:-mt-24 md:mt-0">
        {product?.slice(0, 3).map((item, i) => {
          const formattedPrice = item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          return (
            <ProductLink
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              formattedPrice={formattedPrice}
              rate={item.rating.rate}
              count={item.rating.count}
              description={item.description}
            />
          );
        })}
        <div className="bg-gray-100 w-[52vw] h-36 my-4 px-4 z-10 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h1 className="text-xl font-bold p-3">
            Sign in for the best experience
          </h1>
          <button className="bg-yellow-400 w-full border-s-slate-50 text-sm rounded-md h-6">
            Sign in securely
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto">
        {product?.slice(4, 8).map((item, i) => {
          const formattedPrice = item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          return (
            <ProductLink
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              formattedPrice={formattedPrice}
              rate={item.rating.rate}
              count={item.rating.count}
              description={item.description}
            />
          );
        })}
      </div>
      <div>
        <ProductPromo />
      </div>

      <div className="flex flex-wrap justify-center mx-auto">
        {product?.slice(9, 13).map((item, i) => {
          const formattedPrice = item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          return (
            <ProductLink
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              formattedPrice={formattedPrice}
              rate={item.rating.rate}
              count={item.rating.count}
              description={item.description}
            />
          );
        })}
      </div>
      <ProductPromoAmazon />
    </>
  );
};

export default Products;
