import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { backend_url } from "../App";
import { useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";
import { currency } from "./Listitem";
const Orders = ({ token }) => {
  const [allorders, setallorders] = useState([]);
  const fetchallorders = async () => {
    try {
      if (!token) return null;
      const response = await axios.post(
        backend_url + "/api/order/allorders",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        setallorders(response.data.orders);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchallorders();
  }, [token]);
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-8">
  <div className="max-w-7xl mx-auto">
    
    <h1 className="text-3xl font-bold text-gray-900 mb-8">
      Orders Management
    </h1>

    <div className="space-y-6">
      {allorders.map((orderitem, index) => {
        return (
          <div
            key={index}
            className="
            bg-white
            rounded-2xl
            shadow-sm
            border border-gray-200
            p-6
            hover:shadow-lg
            transition-all duration-300
          "
          >
            <div className="grid lg:grid-cols-[80px_1.5fr_1fr_0.7fr_0.8fr] gap-6 items-start">
              
              {/* Parcel Icon */}
              <div className="flex justify-center">
                <img
                  src={assets.parcel_icon}
                  alt=""
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Ordered Items
                </h3>

                <div className="text-gray-600 text-sm space-y-1">
                  {orderitem.items.map((item, index) => (
                    <p key={index}>
                      {item.name} × {item.quantity}{" "}
                      <span className="font-medium">
                        ({item.size})
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Delivery Address
                </h3>

                <div className="text-sm text-gray-600 leading-6">
                  <p className="font-semibold text-gray-800">
                    {orderitem.address.firstName}{" "}
                    {orderitem.address.lastName}
                  </p>

                  <p>{orderitem.address.street}</p>
                  <p>
                    {orderitem.address.city},{" "}
                    {orderitem.address.state}
                  </p>
                  <p>{orderitem.address.country}</p>
                  <p>{orderitem.address.zipcode}</p>
                  <p>{orderitem.address.phone}</p>
                </div>
              </div>

              {/* Order Details */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Details
                </h3>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Items:</span>{" "}
                    {orderitem.items.length}
                  </p>

                  <p>
                    <span className="font-medium">Method:</span>{" "}
                    {orderitem.paymentMethod}
                  </p>

                  <p>
                    <span className="font-medium">Payment:</span>

                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        orderitem.payment
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {orderitem.payment
                        ? "Paid"
                        : "Pending"}
                    </span>
                  </p>

                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(
                      orderitem.date
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Amount + Status */}
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Amount
                  </h3>

                  <p className="text-2xl font-bold text-indigo-600">
                    {currency}
                    {orderitem.amount}
                  </p>
                </div>

                <select
                defaultValue={orderitem.status}
                  className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-2.5
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  bg-white
                  text-sm
                "
                >
                  <option value="Order Placed">
                    Order Placed
                  </option>

                  <option value="Packing">
                    Packing
                  </option>

                  <option value="Shipping">
                    Shipping
                  </option>

                  <option value="Out for Delivery">
                    Out for Delivery
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>
                </select>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>
  );
};

export default Orders;
