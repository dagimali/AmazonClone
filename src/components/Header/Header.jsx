/** @format */

import React, { useEffect, useState } from "react";
import "./Header.css";
import amazonLogo from "../../CommonResources/Images/icons/pngimg.com - amazon_PNG11.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import flag from "../../CommonResources/Images/ImageFIles/Flag.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { auth } from "../firebase/firebase";
import cartIcon from "../../CommonResources/Images/icons/shoppingCarticon.png";
function Header() {
  const [show, setShow] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(user);
  const toggleSlideShow = () => {
    return setShow(!show);
  };
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="w-full items-center bg-black text-white px-10 sm:py-1 cursor-pointer z-50 sm:flex sm:gap-4 gap-2 text-lg header-wrapper">
        <div className="flex justify-between">
          <Link to="/">
            <img
              className="amzone-logo object-contain my-0 w-24 no-underline ml-1"
              src={amazonLogo}
              alt="amazon logo"
            />
          </Link>
          <div className="flex sm:hidden">
            <div className=" flex">
              <Link to="/login">
                <p className="text-sm">
                  Sign in <KeyboardArrowRightIcon />
                </p>
              </Link>
              <PermIdentityIcon />
            </div>
            <div className="cart  flex !flex-col no-underline ml-2 -mt-4">
              <span className="mb-0 text-center">{basket.length}</span>
              <Link to="checkout">
                <ShoppingCartIcon className=" w-30 items-center no-underline -mt-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" sm:flex flex-grow hidden w-48">
          <PlaceOutlinedIcon className="h-35 w-30 mt-2" />
          <div className="greeting nav-links">
            <span className="text-[0.857vw] text-gray-300 pl-3">Hello</span>
            <span className="font-bold text-[1vw]">Select your address</span>
          </div>
        </div>

        <div className="flex flex-grow h-10 items-center rounded-md  border-4 bg-orange-500 focus:border-orange-400 focus:shadow-orange-400 w-full sm:w-1/2">
          <div className=" flex text-[2vw] sm:text-[1vw] pt-2 item-center bg-gray-100 text-center text-gray-500 border-transparent h-10">
            All
            <ArrowDropDownIcon className="" />
          </div>
          <input
            type="text"
            className="h-10 pl-3 text-xs w-full"
            placeholder="Search Amazon"
          />
          <div className="px-1 rounded-r-md ">
            <SearchIcon />
          </div>
        </div>

        <div className="sm:flex nav-wrap items-center flex-shrink hidden">
          <div className="flex">
            <img className="w-5 h-4 mt-1" src={flag} alt="Flag" />
            <span className="text-[1.05vw] pl-1 text-bold"> EN</span>
          </div>
          <div onClick={toggleSlideShow} className="accountSignIn nav-links">
            <Link to="/login">
              <span className="text-[0.875vw] text-gray-300 no-underline">
                Hello, {!user ? "Guest" : user.email}
              </span>
            </Link>
            <span className="text-[1vw]">
              Account & Lists
              <ArrowDropDownIcon />
            </span>
          </div>
          <div
            onClick={toggleSlideShow}
            className={`fixed left-0 right-20 bg-black  items-end top-16 w-screen h-screen z-50 text-black justify-end transition-all  bg-opacity-50 px-20 ${
              show ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex justify-end ">
              <div className="bg-white rounded shadow p-4">
                <h2 className="font-bold pb-2">Your list</h2>
                <ul className="text-xs space-y-3 ">
                  <li>Create a list</li>
                  <li>Find a list or registory</li>
                </ul>
              </div>
              <div className="bg-white rounded shadow p-4">
                <Link to="/login">
                  <button className="bg-yellow-400 w-full rounded-md h-8 mb-5 text-xs font-bold no-underline">
                    Sign in
                  </button>
                </Link>
                <h2 className="pb-2 font-bold">Your Account</h2>
                <ul className="text-xs space-y-3 ">
                  <li>Account</li>
                  <li>Orders</li>
                  <li>Recommendations</li>
                  <li>Browsing history</li>
                  <li>Watch list</li>
                  <li> Video Purchases & Rentals</li>
                  <li> Kindle </li>
                  <li>Unlimited Content & Devices</li>
                  <li>Subscribe & Save Items </li>
                  <li>Memberships & Subscriptions </li>
                  <li>PrimeMembership </li>
                  <li>Amazon Credit Cards </li>
                  <li>Music Library </li>
                  <li>Start a Selling Account </li>
                  <li>Register for a free Business Account </li>
                  <li>Customer Service</li>
                  <li>Switch Accounts </li>
                  <li onClick={handleAuthentication}>Sign Out</li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/orders">
            <div className="orders nav-links no-underline hidden sm:block">
              <span className="text-[0.875vw] text-gray-300">Returns</span>{" "}
              <br />
              <span className="text-[1vw]">Orders</span>
            </div>
          </Link>

          <div className="cart  flex !flex-col no-underline ml-2">
            <span className="mb-0 text-center">{basket.length}</span>
            <Link to="checkout">
              <ShoppingCartIcon className="w-30 items-center no-underline -mt-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
