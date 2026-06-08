import React, { useContext, useState } from "react";
import Title from "../components/Title";
import Cartamount from "../components/Cartamount";
import { assets } from "../assets/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setmethod] = useState("cod");
  const {
    getcartamount,
    navigate,
    backend_url,
    token,
    settoken,
    setcartitem,
    delivery_fee,
    cartitem,
    products,
  } = useContext(ShopContext);
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onsubmithandler = async (e) => {
    e.preventDefault();
    try {
      let orderitem = [];
      for (const items in cartitem) {
        for (const item in cartitem[items]) {
          if (cartitem[items][item] > 0) {
            let orderiteminfo = structuredClone(
              products.find((product) => product._id === items),
            );

            if (orderiteminfo) {
              ((orderiteminfo.size = item),
                (orderiteminfo.quantity = cartitem[items][item]),
                orderitem.push(orderiteminfo));
            }
          }
        }
      }
      let orderdata = {
        items: orderitem,
        address: FormData,
        amount:await getcartamount() + delivery_fee,
      };
      switch (method) {
        case "cod":
          const response = await axios.post(
            backend_url + "/api/order/placeordercod",
            orderdata,
            { headers: { token } },
            
          );
          console.log(response.data)
          if (response.data.success) {
            setcartitem({});
            navigate('/orders')
          }
          else{
            toast.error(response.data.message)
          }
          break;

        default:
          break;
      }
    } catch (error) {
    toast.error(error.message)
    }
  };
  return (
    <form
      onSubmit={onsubmithandler}
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
                required
                onChange={onchangehandler}
                name="firstName"
                value={FormData.firstName}
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
                required
                onChange={onchangehandler}
                name="lastName"
                value={FormData.lastName}
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
              required
              onChange={onchangehandler}
              name="email"
              value={FormData.email}
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
              required
              onChange={onchangehandler}
              name="street"
              value={FormData.street}
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
                required
                onChange={onchangehandler}
                name="city"
                value={FormData.city}
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
                required
                onChange={onchangehandler}
                name="state"
                value={FormData.state}
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
                required
                onChange={onchangehandler}
                name="zipcode"
                value={FormData.zipcode}
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
                required
                onChange={onchangehandler}
                name="country"
                value={FormData.country}
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
              required
              onChange={onchangehandler}
              name="phone"
              value={FormData.phone}
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

                ${method === "stripe" ? "border-indigo-600" : "border-gray-400"}
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

                ${method === "cod" ? "border-indigo-600" : "border-gray-400"}
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
              type="submit"
              // onClick={() => {
              //   navigate("/orders");
              // }}
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
    </form>
  );
};

export default PlaceOrder;
