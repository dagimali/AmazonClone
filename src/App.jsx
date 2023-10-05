/** @format */

import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/LogIn/Login";
import { auth } from "./components/firebase/firebase";
import { useStateValue } from "./components/StateProvider/StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";
import FooterNav from "./components/Footer/FooterNav";
import Footer from "./components/Footer/Footer";
import Bottom from "./components/Footer/Bottom";
const stripe = loadStripe(
  "pk_test_51NQFIbGZcUHT1ragYYeLFOHqAOOZw8KYDooYtuyGw0WhFWDWY2t4JEfeVadI4IW9EVJMtFkjyXAtZ7Zt5LtoR9ze00tzQPLdAi"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged-In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged-out
        dispatch({
          type: `SET_USER`,
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
              <FooterNav />
              <Footer />
              <Bottom />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <Elements stripe={stripe}>
              <Payment />
            </Elements>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <>
              <Header /> <Orders />
            </>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <>
              <Header /> <Home />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
