/** @format */

import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import amazonLogo from "../../CommonResources/Images/ImageFIles/amazonLogo.jpg";
import CheckoutProducts from "../checkout/CheckoutProducts";
import { NumericFormat } from "react-number-format";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "../axios/axios";
import { dataBase } from "../firebase/firebase";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce(
      (amount, item) => Number(item.formattedPrice.replace(/\$/, "")) + amount,
      0
    );
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log(response.data);
    };
    getClientSecret();
  }, [basket]);
  console.log("the secret is >>> ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        // console.log(basket);
        // console.log(paymentIntent);
        dataBase
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent?.amount,
            created: paymentIntent?.created,
          })
          .then(() => {
            console.log("processing");
          })
          .catch((error) => {
            console.log("Error happened");
          });

        // console.log(basket);
        // console.log(amount);
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders");
      });
    // console.log("basket", basket);
    // console.log("amount", paymentIntent.amount);
    // console.log("created", paymentIntent.created);
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="mx-5 h-16 object-center">
      <div className="flex justify-between bg-gray-100 px-20">
        <Link to="/">
          <img
            className="amzone-logo object-contain my-0 w-28 bg-gray-700"
            src={amazonLogo}
            alt="amazon logo"
          />
        </Link>
        <h1 className="text-[2vw]">
          Checkout<Link to="/checkout">({basket.length} item)</Link>
        </h1>
        <LockIcon className="opacity-50" />
      </div>
      <div className="flex justify-between px-20 border-gray-400 border-b-2 border-opacity-30  space-y-5">
        <h1 className="text-[1.5vw] ">
          <span className="pr-12 text-bold">1</span>
          <strong>Shipping address</strong>
        </h1>
        <div className="text-[1.25vw] text-left w-1/3">
          <h3>{user?.email}</h3>
          <h3>1901 M St</h3>
          <h3>Washington, DC, 20010</h3>
        </div>
        <h3 className="text-blue-500">change</h3>
      </div>
      <div className="flex justify-between px-20 border-gray-400 border-b-2 border-opacity-30  space-y-5 pb-5">
        <div>
          <h1 className="text-[1.5vw] ">
            <span className="pr-12 text-bold">2</span>
            <strong>Payment method</strong>
          </h1>
        </div>
        <div className="w-1/3  space-y-2">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
          </form>
          <h3>
            <span className="text-blue-500">Billing address:</span> Same as
            shipping address.
          </h3>
          <label className="text-sm font-bold">
            Add a gift card or promotion code or voucher
          </label>
          <div className="flex w-full">
            <input
              type="text"
              className="text-sm w-2/4 opacity-50 border-2 border-gray-400 rounded-md mr-2 shadow-lg "
              placeholder="Enter code"
            />
            <button className="border-2 rounded-lg w-1/4">Apply</button>
          </div>
        </div>
        <h3 className="text-blue-500">change</h3>
      </div>
      <div className="justify-between px-20 border-gray-400 border-b-2 border-opacity-30  space-y-5">
        <h1 className="text-[1.5vw] flex-none">
          <span className="pr-12 text-bold">3</span>
          <strong>Review items</strong>
        </h1>
        <div className="w-[24rem] pl-20 grow h-full object-contain">
          {basket?.map((item, i) => {
            return (
              <CheckoutProducts
                key={i}
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
          <form onSubmit={handleSubmit}>
            <div className="flex border-2 w-[85vw] items-center object-center pr-20">
              <button
                disabled={processing || disabled || succeeded}
                className="bg-yellow-400 rounded-md h-8 mb-5 text-[1.25vw] m-5 w-1/4 border-gray-100 border-2 font-bold"
              >
                <span className="mb-1">
                  {processing ? <p>Processing...</p> : "Place your order"}
                </span>
                {error && <div className="text-xs">{error}</div>}
              </button>
              <div className="pt-1 px-3 text-left">
                <span className="">Order total:</span>
                <NumericFormat
                  value={getBasketTotal(basket)}
                  thousandsGroupStyle={true}
                  thousandSeparator=","
                  displayType={"text"}
                  prefix="$"
                />
                <h2 className="text-[0.875vw]">
                  By placing your order, you agree to AMAZON CLONE
                  <span className="text-blue-500"> privacy notice </span>
                  and <span className="text-blue-500">conditions of use</span>.
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
