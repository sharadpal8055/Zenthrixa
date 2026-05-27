import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {

  const [currentstate, setcurrentstate] = useState("Sign UP");

  const onsubmithandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-50
      px-4"
    >

      {/* ================= FORM CONTAINER ================= */}
      <form
        onSubmit={onsubmithandler}
        className="
        w-full max-w-md
        bg-white
        rounded-3xl
        shadow-xl
        border border-gray-100
        p-8 sm:p-10"
      >

        {/* ================= HEADER ================= */}
        <div className="text-center mb-8">

          <div className="flex justify-center mb-3">
            <Title
              text1={currentstate === "Sign UP" ? "CREATE" : "WELCOME"}
              text2={currentstate === "Sign UP" ? "ACCOUNT" : "BACK"}
            />
          </div>

          <p
            className="
            text-sm text-gray-500 mt-2"
          >
            {
              currentstate === "Sign UP"
                ? "Join us and explore premium collections."
                : "Login to continue your shopping journey."
            }
          </p>
        </div>

        {/* ================= INPUTS ================= */}
        <div className="space-y-5">

          {/* Name */}
          {currentstate === "Sign UP" && (
            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              bg-gray-50
              focus:bg-white
              focus:ring-2
              focus:ring-indigo-500
              transition-all duration-200"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="
            w-full
            rounded-xl
            border border-gray-300
            px-4 py-3
            outline-none
            bg-gray-50
            focus:bg-white
            focus:ring-2
            focus:ring-indigo-500
            transition-all duration-200"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            rounded-xl
            border border-gray-300
            px-4 py-3
            outline-none
            bg-gray-50
            focus:bg-white
            focus:ring-2
            focus:ring-indigo-500
            transition-all duration-200"
          />
        </div>

        {/* ================= OPTIONS ================= */}
        <div
          className="
          flex items-center justify-between
          mt-5 text-sm"
        >

          <button
            type="button"
            className="
            text-gray-500
            hover:text-indigo-600
            transition"
          >
            Forgot Password?
          </button>

          {
            currentstate === "Sign UP" ? (
              <button
                type="button"
                onClick={() => setcurrentstate("Login")}
                className="
                text-indigo-600
                font-medium
                hover:text-indigo-700
                transition"
              >
                Already have an account?
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setcurrentstate("Sign UP")}
                className="
                text-indigo-600
                font-medium
                hover:text-indigo-700
                transition"
              >
                Create Account
              </button>
            )
          }
        </div>

        {/* ================= BUTTON ================= */}
        <button
          type="submit"
          className="
          w-full mt-8
          py-3.5
          rounded-xl
          bg-indigo-600
          text-white
          font-semibold
          text-sm sm:text-base
          hover:bg-indigo-700
          active:scale-[0.99]
          transition-all duration-200
          shadow-md hover:shadow-xl"
        >
          {
            currentstate === "Sign UP"
              ? "Create Account"
              : "Login"
          }
        </button>

        {/* ================= FOOTER ================= */}
        <p
          className="
          text-center
          text-xs sm:text-sm
          text-gray-400
          mt-6"
        >
          Secure authentication powered by encrypted login.
        </p>
      </form>
    </div>
  );
};

export default Login;