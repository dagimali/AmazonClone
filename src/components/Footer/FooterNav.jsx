/** @format */

import React from "react";
// import { Link } from "react-router-dom";
const FooterNav = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <div className="bg-[#374859] hover:bg-opacity-90 text-center text-sm py-3 text-slate-50">
      <h5 onClick={handleClick}>Back to top</h5>
    </div>
  );
};

export default FooterNav;
