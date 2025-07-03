import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [current, setCurrent] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (current === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(current === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
    
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 
    sm:justify-evenly max-sm:flex-col backdrop-blur-2xl "
    >
      {/* left */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

      {/* right */}
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 
      flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-medium flex justify-between items-center">
          {current}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className="cursor-pointer w-5"
            />
          )}
        </h2>

        {current === "Sign up" && !isDataSubmitted && (
          <input
            type="text"
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              className="p-2 border border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Email "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="p-2 border border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {current === "Sign up" && isDataSubmitted && (
          <textarea
            className="p-2 border border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="bio"
            required
            rows={4}
          ></textarea>
        )}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600
        text-white rounded-md cursor-pointer"
        >
          {current === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="flex flex-col gap-2">
          {current === "Sign up" ? (
            <p className="text-sm text-gray-500">
              Already have an account?&nbsp;
              <span
                onClick={() => {
                  setCurrent("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Create an account&nbsp;
              <span
                onClick={() => setCurrent("Sign up")}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
