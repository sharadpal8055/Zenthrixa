import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import Cartamount from '../components/Cartamount'
import { assets } from '../assets/assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setmethod] = useState('cod');
  const {navigate} =useContext(ShopContext);
 return (
  <div
    className="
    border-t
    pt-10
    px-4 sm:px-8 lg:px-[8%]
    min-h-screen
    bg-gray-50"
  >

    <div
      className="
      flex flex-col lg:flex-row
      gap-10 lg:gap-14"
    >

      {/* ================= LEFT SECTION ================= */}
      <div className="flex-1">

        {/* Heading */}
        <div className="mb-8">
          <Title text1={"Delivery"} text2={"Information"} />

          <p
            className="
            text-sm text-gray-500 mt-2"
          >
            Fill in your shipping details carefully.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="First Name"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              bg-white"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              bg-white"
            />
          </div>

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
            focus:ring-2
            focus:ring-indigo-500
            bg-white"
          />

          {/* Street */}
          <input
            type="text"
            placeholder="Street Address"
            className="
            w-full
            rounded-xl
            border border-gray-300
            px-4 py-3
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            bg-white"
          />

          {/* City + State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="City"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              bg-white"
            />

            <input
              type="text"
              placeholder="State"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              bg-white"
            />
          </div>

          {/* Zip + Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Zip Code"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              bg-white"
            />

            <input
              type="text"
              placeholder="Country"
              className="
              w-full
              rounded-xl
              border border-gray-300
              px-4 py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              bg-white"
            />
          </div>

          {/* Phone */}
          <input
            type="number"
            placeholder="Phone Number"
            className="
            w-full
            rounded-xl
            border border-gray-300
            px-4 py-3
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            bg-white"
          />
        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div
        className="
        w-full lg:max-w-md
        space-y-8"
      >

        {/* Cart Amount */}
        <div
          className="
          bg-white
          rounded-2xl
          border border-gray-100
          shadow-sm
          p-6"
        >
          <Cartamount />
        </div>

        {/* Payment Methods */}
        <div
          className="
          bg-white
          rounded-2xl
          border border-gray-100
          shadow-sm
          p-6"
        >

          {/* Heading */}
          <div className="mb-6">
            <Title text1={"Payment"} text2={"Method"} />

            <p
              className="
              text-sm text-gray-500 mt-2"
            >
              Choose your preferred payment option.
            </p>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">

            {/* Stripe */}
            <div
              onClick={() => setmethod("stripe")}
              className={`
              flex items-center gap-4
              border rounded-xl
              p-4 cursor-pointer
              transition-all duration-300

              ${
                method === "stripe"
                  ? "border-indigo-600 bg-indigo-50 shadow-md"
                  : "border-gray-200 hover:border-indigo-300"
              }
              `}
            >

              <div
                className={`
                w-5 h-5 rounded-full border-2
                flex items-center justify-center

                ${
                  method === "stripe"
                    ? "border-indigo-600"
                    : "border-gray-400"
                }
                `}
              >
                {method === "stripe" && (
                  <div
                    className="
                    w-2.5 h-2.5
                    rounded-full
                    bg-indigo-600"
                  />
                )}
              </div>

              <img
                src={assets.stripe_logo}
                alt=""
                className="h-6 object-contain"
              />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setmethod("razorpay")}
              className={`
              flex items-center gap-4
              border rounded-xl
              p-4 cursor-pointer
              transition-all duration-300

              ${
                method === "razorpay"
                  ? "border-indigo-600 bg-indigo-50 shadow-md"
                  : "border-gray-200 hover:border-indigo-300"
              }
              `}
            >

              <div
                className={`
                w-5 h-5 rounded-full border-2
                flex items-center justify-center

                ${
                  method === "razorpay"
                    ? "border-indigo-600"
                    : "border-gray-400"
                }
                `}
              >
                {method === "razorpay" && (
                  <div
                    className="
                    w-2.5 h-2.5
                    rounded-full
                    bg-indigo-600"
                  />
                )}
              </div>

              <img
                src={assets.razorpay_logo}
                alt=""
                className="h-6 object-contain"
              />
            </div>

            {/* COD */}
            <div
              onClick={() => setmethod("cod")}
              className={`
              flex items-center gap-4
              border rounded-xl
              p-4 cursor-pointer
              transition-all duration-300

              ${
                method === "cod"
                  ? "border-indigo-600 bg-indigo-50 shadow-md"
                  : "border-gray-200 hover:border-indigo-300"
              }
              `}
            >

              <div
                className={`
                w-5 h-5 rounded-full border-2
                flex items-center justify-center

                ${
                  method === "cod"
                    ? "border-indigo-600"
                    : "border-gray-400"
                }
                `}
              >
                {method === "cod" && (
                  <div
                    className="
                    w-2.5 h-2.5
                    rounded-full
                    bg-indigo-600"
                  />
                )}
              </div>

              <button
                className="
                font-medium text-gray-700"
              >
                Cash On Delivery
              </button>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={() => {
              navigate("/orders");
            }}
            className="
            w-full mt-8
            py-4
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
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
)
}

export default PlaceOrder