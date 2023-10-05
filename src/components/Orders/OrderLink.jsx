/** @format */

import React from "react";
import moment from "moment";
import CheckoutProducts from "../checkout/CheckoutProducts";
import { NumericFormat } from "react-number-format";

function OrderLink({ orderValue }) {
  console.log(orderValue.id);
  return (
    <div className="bg-gray-100 m-5">
      <div className="w-full bg-white m-5 p-10">
        <div className="flex justify-between px-3">
          <h1 className="font-bold text-xl">Order</h1>
          <h2>{orderValue.id}</h2>
        </div>
        <h2 className="pt-1">
          {moment.unix(orderValue.data.created).format("MMMM Do YYYY, h:mma")}
        </h2>
        <div className="bg-gray-100">
          <div className="bg-white my-10">
            {orderValue.data.basket?.map((item) => (
              <CheckoutProducts
                className="bg-white w-full"
                id={item.id}
                image={item.image}
                rate={item.rate}
                title={item.title}
                formattedPrice={item.formattedPrice}
                count={item.count}
                description={item.description}
                hideButton
              />
            ))}
            <h3 className="text-xl font-bold text-end pr-10">
              Order total:
              <NumericFormat
                className="pl-1"
                value={orderValue.data.amount / 100}
                thousandsGroupStyle={true}
                thousandSeparator=","
                displayType={"text"}
                prefix="$"
              />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderLink;
