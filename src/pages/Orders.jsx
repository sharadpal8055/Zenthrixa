import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const {products,currency}=useContext(ShopContext);
  const displayproduct=products.slice(0,4);
 // console.log(displayproduct)
 return (
  <div
    className="
    border-t
    pt-10
    px-4 sm:px-8 lg:px-[8%]
    min-h-screen
    bg-gray-50"
  >

    {/* ================= PAGE TITLE ================= */}
    <div className="mb-10">
      <Title text1={"MY"} text2={"ORDERS"} />

      <p
        className="
        text-sm sm:text-base
        text-gray-500 mt-2"
      >
        Track and manage all your recent purchases.
      </p>
    </div>

    {/* ================= ORDERS LIST ================= */}
    <div className="space-y-6">

      {displayproduct.map((item, index) => (

        <div
          key={index}
          className="
          bg-white
          rounded-2xl
          border border-gray-100
          shadow-sm
          hover:shadow-lg
          transition-all duration-300
          p-5 sm:p-6"
        >

          <div
            className="
            flex flex-col
            lg:flex-row
            lg:items-center
            justify-between
            gap-6"
          >

            {/* ================= LEFT SECTION ================= */}
            <div
              className="
              flex flex-col sm:flex-row
              gap-5"
            >

              {/* Product Image */}
              <div
                className="
                w-28 h-28
                rounded-xl
                overflow-hidden
                bg-gray-100
                flex-shrink-0"
              >
                <img
                  src={item.image[0]}
                  alt=""
                  className="
                  w-full h-full
                  object-cover
                  hover:scale-105
                  transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="space-y-3">

                <h1
                  className="
                  text-lg sm:text-xl
                  font-semibold
                  text-gray-800"
                >
                  {item.name}
                </h1>

                {/* Price + Quantity */}
                <div
                  className="
                  flex flex-wrap
                  items-center gap-3
                  text-sm sm:text-base"
                >

                  <p
                    className="
                    font-bold
                    text-indigo-600"
                  >
                    {currency}
                    {item.price}
                  </p>

                  <span className="text-gray-300">|</span>

                  <p className="text-gray-600">
                    Size:
                    <span className="font-medium ml-1">
                      M
                    </span>
                  </p>

                  <span className="text-gray-300">|</span>

                  <p className="text-gray-600">
                    Qty:
                    <span className="font-medium ml-1">
                      1
                    </span>
                  </p>
                </div>

                {/* Date */}
                <p
                  className="
                  text-sm text-gray-500"
                >
                  Ordered on:
                  <span className="ml-2 font-medium text-gray-700">
                    24 July, 2026
                  </span>
                </p>
              </div>
            </div>

            {/* ================= RIGHT SECTION ================= */}
            <div
              className="
              flex flex-col
              sm:flex-row
              items-start sm:items-center
              gap-4"
            >

              {/* Status */}
              <div
                className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-green-50
                border border-green-200"
              >

                {/* Status Dot */}
                <span
                  className="
                  w-2.5 h-2.5
                  rounded-full
                  bg-green-500"
                />

                <h2
                  className="
                  text-sm font-medium
                  text-green-700"
                >
                  Ready to Ship
                </h2>
              </div>

              {/* Track Button */}
              <button
                className="
                px-5 py-3
                rounded-xl
                bg-indigo-600
                text-white
                text-sm font-medium
                hover:bg-indigo-700
                active:scale-[0.98]
                transition-all duration-200
                shadow-sm hover:shadow-md"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ================= EMPTY STATE ================= */}
    {displayproduct.length === 0 && (
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
          <span className="text-4xl">📦</span>
        </div>

        <h2
          className="
          text-2xl font-bold
          text-gray-700"
        >
          No Orders Yet
        </h2>

        <p
          className="
          text-gray-500 mt-2
          max-w-md"
        >
          Your recent purchases will appear here once
          you place an order.
        </p>
      </div>
    )}
  </div>
)
}

export default Orders