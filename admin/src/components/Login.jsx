import React, { useState } from "react";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";
const Login = ({ settoken }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onsubmithandler = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(backend_url + "/api/user/adminLogin", {
        email,
        password,
      });
      if (response.data.success) {
        settoken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-900">Admin Login</h1>

            <p className="text-gray-500 mt-2">
              Sign in to access the Zenthrixa dashboard
            </p>
          </div>

          <form onSubmit={onsubmithandler} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                placeholder="admin@zenthrixa.com"
                required
                className="
              w-full
              px-4 py-3
              border border-gray-300
              rounded-xl
              outline-none
              transition
              focus:ring-2
              focus:ring-indigo-500
              focus:border-indigo-500
            "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                required
                className="
              w-full
              px-4 py-3
              border border-gray-300
              rounded-xl
              outline-none
              transition
              focus:ring-2
              focus:ring-indigo-500
              focus:border-indigo-500
            "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
            w-full
            py-3
            bg-indigo-600
            text-white
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:bg-indigo-700
            hover:shadow-lg
            active:scale-[0.98]
          "
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Zenthrixa Admin Dashboard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
