import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets/frontend_assets/assets";
import Cartamount from "../components/Cartamount";

const Cart = () => {
  const { products, currency, cartitem, updatequantity,getcartamount, delivery_fee,navigate } =
    useContext(ShopContext);
  const [cartitemsdata, setcartitemsdata] = useState([]);
  useEffect(() => {
    let tempcartdata = [];
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        if (cartitem[items][item] > 0) {
          tempcartdata.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item],
          });
          // console.log(tempcartdata);
        }
      }
    }
    setcartitemsdata(tempcartdata);
  }, [cartitem]);
  return (
    <div className="border-t pt-10 px-4 sm:px-8 lg:px-[8%] min-h-screen bg-gray-50">
      {/* ================= TITLE ================= */}
      <div className="mb-10">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* ================= CART ITEMS ================= */}
      <div className="space-y-6">
        {cartitemsdata.map((item, index) => {
          let productdata = products.find(
            (product) => product._id === item._id,
          );

          return (
            <div
              key={index}
              className="
            bg-white
            rounded-2xl
            shadow-sm
            border border-gray-100
            p-4 sm:p-6
            hover:shadow-lg
            transition-all duration-300"
            >
              <div
                className="
              flex flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-6"
              >
                {/* ================= LEFT ================= */}
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Product Image */}
                  <div
                    className="
                  w-24 h-24 sm:w-28 sm:h-28
                  rounded-xl
                  overflow-hidden
                  bg-gray-100
                  flex-shrink-0"
                  >
                    <img
                      src={productdata.image[0]}
                      alt="productImage"
                      className="
                    w-full h-full
                    object-cover
                    hover:scale-105
                    transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2">
                    <h1
                      className="
                    text-base sm:text-lg lg:text-xl
                    font-semibold text-gray-800"
                    >
                      {productdata.name}
                    </h1>

                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Price */}
                      <h2
                        className="
                      text-lg sm:text-xl
                      font-bold text-indigo-600"
                      >
                        {currency}
                        {productdata.price}
                      </h2>

                      {/* Size */}
                      <p
                        className="
                      px-3 py-1
                      rounded-md
                      bg-gray-100
                      text-sm font-medium
                      text-gray-600"
                      >
                        Size: {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div
                  className="
                flex items-center
                justify-between sm:justify-end
                gap-5"
                >
                  {/* Quantity Input */}
                  <div className="flex flex-col gap-1">
                    <label
                      className="
                    text-xs font-medium
                    text-gray-500"
                    >
                      Quantity
                    </label>

                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updatequantity({
                          itemid: item._id,
                          size: item.size,
                          quantity: Number(e.target.value),
                        })
                      }
                      className="
  w-20
  border border-gray-300
  rounded-lg
  px-3 py-2
  outline-none
  focus:ring-2
  focus:ring-indigo-500
  text-center"
                    />
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => {
                      updatequantity({
                        itemid: item._id,
                        size: item.size,
                        quantity: 0,
                      });
                    }}
                    className="
                  p-3 rounded-xl
                  hover:bg-red-50
                  transition-all duration-200
                  group"
                  >
                    <img
                      src={assets.bin_icon}
                      alt=""
                      className="
                    w-5 sm:w-6
                    group-hover:scale-110
                    transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
       
      </div>
<Cartamount/>
        {/* ===== Checkout Button ===== */}
    <button onClick={()=>navigate('/placeorder')}
      className="
      w-full mt-8
      py-3 sm:py-4
      rounded-xl
      bg-indigo-600
      text-white
      font-semibold
      text-sm sm:text-base
      hover:bg-indigo-700
      active:scale-[0.99]
      transition-all duration-200
      shadow-md hover:shadow-lg"
    >
      Proceed to Checkout
    </button>

    {/* ===== Security Note ===== */}
    <p
      className="
      text-center
      text-xs sm:text-sm
      text-gray-400
      mt-4"
    >
      Secure checkout powered by encrypted payment processing.
    </p>

      {/* ================= EMPTY CART ================= */}
      {cartitemsdata.length === 0 && (
        <div
          className="
        flex flex-col
        items-center justify-center
        py-24 text-center"
        >
          <div
            className="
          w-24 h-24
          rounded-full
          bg-gray-100
          flex items-center justify-center
          mb-6"
          >
            <span className="text-4xl">🛒</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-700">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-2">
            Add some amazing products to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
