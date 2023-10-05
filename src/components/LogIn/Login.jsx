/** @format */

import React, { useState } from "react";
import amazonLogo from "../../CommonResources/Images/ImageFIles/amazonLogo.jpg";
import { auth } from "../firebase/firebase";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [showText, setShowText] = useState("");
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [createAcct, setCreateAcct] = useState(false);
  const navigate = useNavigate();
  const catchEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSignEmail = () => {
    setShowEmail(!showEmail);
    setShowPassword(!showPassword);
  };
  const handleCreateAcct = () => {
    setShowEmail(!showEmail);
    setCreateAcct(!createAcct);
  };
  const printEmail = (e) => {
    if (e.key === "Enter" && email !== "") {
      setShowText([...showText, email]);
      setEmail("");
    }
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password, displayName)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const signUP = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password, displayName)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex flex-col h-screen items-center w-[20rem] m-auto">
      <Link to="/">
        <img
          className="amzone-logo object-contain my-0 w-28 bg-gray-700"
          src={amazonLogo}
          alt="amazon logo"
        />
      </Link>

      {showEmail && (
        <>
          <form className="border-2 p-4 rounded-md">
            <h1 className="font-md text-[1.5rem]">Sign in</h1>
            <div>
              <label className="text-xs font-bold">
                Email or mobile phone number
              </label>
              <input
                type="email"
                onChange={catchEmail}
                value={email}
                onKeyDown={printEmail}
                className="w-full border-2 border-gray-200 rounded-md pl-3 text-xs focus:border-yellow-200 h-8 mb-4 focus:shadow-outline cursor-pointer "
              />
              <button
                onClick={handleSignEmail}
                className="bg-yellow-400 w-full rounded-md h-8 mb-5 text-xs font-bold"
              >
                Continue
              </button>
              <small className="overflow-wrap text-[0.675rem] mt-8">
                By continuing, you agree to AMAZON FAKE CLONE
                <span className="text-blue-600"> Conditions of Use </span>
                and <span className="text-blue-600">Privacy Notice</span>
              </small>
              <h5 className="text-xs mt-8 text-blue-600">Need help?</h5>
            </div>
          </form>
          <div>
            <div className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-slate-300 after:inline-block after:relative after:align-middle after:w-[5rem] before:bg-slate-300 before:inline-block before:relative before:align-middle before:w-[6rem] before:right-5 after:left-1 text-xs text-gray-500 p-4">
              New to Amazone?
            </div>
          </div>

          <button
            type="submit"
            onClick={handleCreateAcct}
            className="w-full border-2 border-gray-300 rounded-md pl-3 text-xs onCLick:border-blue-200 h-8 mt-2"
          >
            Create your Amazon account
          </button>
        </>
      )}
      {showPassword && (
        <>
          <form action="" method="get" className="border-2 p-4 rounded-md">
            <h1 className="font-md text-[1.5rem]">Sign in</h1>
            <h2 className="text-xs my-4">
              {email}
              <span className="text-xs text-blue-500"> Change</span>
            </h2>
            <div className="flex justify-between">
              <label className="text-xs font-bold"> Password</label>
              <h3 className="text-xs text-blue-500">Forgot your paassword?</h3>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-md pl-3 text-xs focus:border-yellow-200 h-8 mb-4 focus:shadow-outline cursor-pointer "
            />
            <button
              type="submit"
              onClick={signIn}
              className="bg-yellow-400 w-full rounded-md h-8 mb-5 text-xs font-bold"
            >
              sign in
            </button>
            <input type="checkbox" className="text-xs" />
            <span className="text-xs">Keep me signed in.</span>

            <span className="text-xs text-blue-500">Details</span>
          </form>
        </>
      )}
      {createAcct && (
        <div>
          <form action="" method="get" className="border-2 p-4 rounded-md">
            <h1 className="font-md text-[1.5rem]">Create account</h1>
            <label className="text-xs font-bold">Your name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="First and last name"
              className="w-full border-2 border-gray-200 rounded-md pl-3 text-xs focus:border-yellow-200 h-8 mb-4 focus:shadow-outline cursor-pointer "
            />
            <label className="text-xs font-bold">Mobile number or email</label>
            <input
              type="email"
              onChange={catchEmail}
              value={email}
              className="w-full border-2 border-gray-200 rounded-md pl-3 text-xs focus:border-yellow-200 h-8 mb-4 focus:shadow-outline cursor-pointer "
            />
            <label className="text-xs font-bold">password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="At least 6 characters"
              className="w-full border-2 border-gray-200 rounded-md pl-3 text-xs focus:border-yellow-200 h-8 mb-4 focus:shadow-outline cursor-pointer "
            />
            <label className="text-xs font-bold">Re-enter password</label>
            <input
              type="password"
              className="w-full border-2 border-gray-200 rounded-md pl-3 text-xs focus:border-yellow-200 h-8 mb-4 focus:shadow-outline cursor-pointer "
            />
            <button
              onClick={signUP}
              className="bg-yellow-400 w-full rounded-md h-8 mb-5 text-xs font-bold"
            >
              Continue
            </button>
            <small className="overflow-wrap text-[0.675rem] mt-8">
              By continuing, you agree to AMAZON FAKE CLONE
              <span className="text-blue-600"> Conditions of Use </span>
              and <span className="text-blue-600">Privacy Notice</span>
            </small>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
