/** @format */

import React, { useState } from "react";
import "./Nav.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import flag from "../../CommonResources/Images/ImageFIles/Flag.png";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const Nav = () => {
  const [show, setShow] = useState(false);
  const toggleSlideShow = () => {
    return setShow(!show);
  };

  return (
    <>
      <div className="bg-slate-800 text-white h-35 flex ServiceLists pl-3 mt-4">
        <div className="flex mt-2 cursor-pointer ">
          <MenuOutlinedIcon onClick={toggleSlideShow} className="menuIcon" />
          All
        </div>
        <ul className=" Nav-Links w-full flex justify-between pr-10 h-10 items-center pl-4 cursor-pointer">
          <li>Clinic</li>
          <li>Best Sellers</li>
          <li>Costomers Service</li>
          <li>Amazone Basics</li>
          <li>New Releases</li>
          <li>Prime</li>
          <li>Music</li>
          <li className="hidden sm:block">Todays Deals</li>
          <li className="hidden sm:block">Books</li>
          <li className="hidden md:block">Registry</li>
          <li className="hidden md:block">Fashion</li>
          <li className="hidden md:block">Amazone Home</li>
          <li className="hidden lg:block">Pharmacy</li>
          <li className="hidden lg:block">Gift Cards</li>
          <li className="hidden lg:block">Toys and Games</li>
        </ul>
      </div>
      <div
        className={` fixed flex left-0 top-0 h-full w-screen bg-black bg-opacity-50 z-50 transition-all ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-y-auto overflow-x-hidden">
          <div className=" fixed w-80 bg-white flex ">
            <span className="bg-slate-700 h-13 items-center py-2 text-xl font-500 text-white w-full">
              <AccountCircleOutlinedIcon /> Hello, Sign in
            </span>
          </div>
          <div className="">
            <div className="bg-white w-80 h-full !text-black ServiceLists space-y-5 pt-16">
              <ul className="space-y-5 border-b-2 pb-2">
                <h1>Trading</h1>
                <li>Best Sellers</li>
                <li>New Release</li>

                <li>Movers & Shakers</li>
              </ul>
              <ul className="space-y-5">
                <h1>Digital Content & Devices</h1>
                <li>Prime Video</li>
                <li>Amazone Music</li>
                <li>Echo & Alexa</li>
                <li>Fire Tablets</li>
                <li>Fire Tv</li>
                <li>Kindle E-readers & Books</li>
                <li>Audible Books & Originals</li>
                <li>Amazone Photos</li>
                <li>Amazone Appstore</li>
              </ul>
              <ul className="space-y-5">
                <h1>Shop by Department</h1>
                <li>Clothing, Shoes, Jewelery & Watches</li>
                <li>Amazone Fresh</li>
                <li>Books</li>
                <li>Movies, Music & Games</li>
                <li></li>
              </ul>
              <ul className="space-y-5">
                <h1>Programs & Features</h1>
                <li>Whole Foods Market</li>
                <li>Amazone Health</li>
                <li>Amazone Physical Stores</li>
                <li>Subscribe & Save</li>
              </ul>
              <ul className="space-y-5">
                <h1>Help & Settings</h1>
                <li>Your Account</li>
                <li>
                  {" "}
                  <LanguageOutlinedIcon className="w-5 h-4 mt-1" /> English
                </li>
                <li className="flex">
                  <img className="w-5 h-4 mt-1 mr-1" src={flag} alt="Flag" />{" "}
                  Unites States
                </li>
                <li>Sign in</li>
              </ul>
            </div>
          </div>
        </div>
        <CloseOutlinedIcon
          onClick={toggleSlideShow}
          className="flex-shrink bg-opacity-0 relative text-white"
          viewBox="0,0,20,20"
        />
      </div>
    </>
  );
};

export default Nav;
