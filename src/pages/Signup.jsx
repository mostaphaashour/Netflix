import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/62076392-13cf-4fac-b04c-508ca2032c92/EG-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
          className=" absolute w-full h-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">
                Sign Up
                {error && (
                  <p className="text-sm p-3 my-2 bg-red-500">{error}</p>
                )}
              </h1>
              <form
                onSubmit={handleSubmit}
                action=""
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="flex justify-center align-middle">
                    <input className="mr-2" type="checkbox" id="re" />
                    <label htmlFor="re"> Remmember me</label>
                  </p>
                  <p>
                    <span className="hover:text-red-600 cursor-pointer">
                      Need Help?
                    </span>
                  </p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  {"  "}
                  <Link to="/Signin">
                    <span className="hover:text-red-600">Sign In</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
