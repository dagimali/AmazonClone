/** @format */

import React, { useState } from "react";
import flag from "../../CommonResources/Images/ImageFIles/Flag.png";
import { BottomNavigation } from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import amazonLogo from "../../CommonResources/Images/icons/pngimg.com - amazon_PNG11.png";
import { Link } from "react-router-dom";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import "./bottom.css";
const Bottom = () => {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("");
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className=" bg-gray-800 ">
      <div className="w-[400px] py-10 flex justify-between mx-auto">
        <div className="mt-3">
          <Link to="/">
            <img
              className="amzone-logo object-contain my-auto w-24 no-underline"
              src={amazonLogo}
              alt="amazon logo"
            />
          </Link>
        </div>
        <div className="flex space-x-4 text-slate-50 text-center">
          <div
            onClick={handleClick}
            className="border border-s-gray-400 text-xs py-2 px-3 flex"
          >
            <LanguageRoundedIcon /> <h6 className="pt-1 pl-2">English</h6>
            <div className="space-y-0 ">
              <UnfoldMoreIcon className="text-slate-300" />
            </div>
          </div>
          {show && (
            <form
              action=""
              className="fixed left-[50%] bottom-0 items-end  z-50 text-white w-48 transition-all  bg-opacity-50"
            >
              <div className="flex-column attach">
                <input type="radio" name="language" value="English" />
                <label for="language">English - EN</label> <br />
                <input type="radio" name="language" value="English" />
                <label for="language">espanol-ES</label>
                <h5>
                  <a href="">learn more</a>
                </h5>
                <hr />
                <h5 className="">
                  <img className="w-5 h-4" src={flag} alt="Flag" />
                  <span className="text-xs">
                    You are shopping on Amazon.com
                  </span>
                </h5>
              </div>
            </form>
          )}

          <div className="flex border border-s-gray-400 py-2 px-3">
            <img className="w-5 h-4 mr-2" src={flag} alt="Flag" />
            <span className="text-xs">United States</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
