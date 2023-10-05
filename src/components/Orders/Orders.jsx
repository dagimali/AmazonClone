/** @format */

import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import { dataBase } from "../firebase/firebase";
import OrderLink from "./OrderLink";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      dataBase
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log(orders);
  return (
    <div className="bg-gray-100 px-5 w-full">
      <h1 className="text-[2.5vw] font-bold pt-10 pl-10">Your Orders</h1>
      <div className="px-10 bg-gray-100 w-[60vw]">
        {orders?.map((order) => {
          return <OrderLink orderValue={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
