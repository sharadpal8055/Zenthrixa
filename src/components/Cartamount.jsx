import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';


const Cartamount = () => {
  const {currency,getcartamount,delivery_fee,navigate}=useContext(ShopContext);
 return (
  <div
    className="
    w-full
    bg-white
    rounded-2xl
    border border-gray-100
    shadow-sm
    p-6 sm:p-8"
  >

    {/* ===== Heading ===== */}
    <div className="mb-8">
      <Title text1={"Total"} text2={"Amount"} />

      <p
        className="
        text-sm text-gray-500
        mt-2"
      >
        Review your order summary before checkout.
      </p>
    </div>

    {/* ===== Pricing Details ===== */}
    <div className="space-y-5">

      {/* Subtotal */}
      <div
        className="
        flex items-center justify-between
        text-gray-600
        text-sm sm:text-base"
      >
        <p>Subtotal</p>

        <p className="font-semibold text-gray-800">
          {currency}
          {getcartamount()}.00
        </p>
      </div>

      {/* Shipping */}
      <div
        className="
        flex items-center justify-between
        text-gray-600
        text-sm sm:text-base"
      >
        <p>Shipping Charge</p>

        <p className="font-semibold text-gray-800">
          {currency}
          {delivery_fee}.00
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Total */}
      <div
        className="
        flex items-center justify-between"
      >

        <h1
          className="
          text-lg sm:text-xl
          font-bold text-gray-900"
        >
          Total
        </h1>

        <h1
          className="
          text-2xl sm:text-3xl
          font-extrabold
          text-indigo-600"
        >
          {currency}
          {getcartamount() === 0
            ? 0
            : getcartamount() + delivery_fee}
          .00
        </h1>
      </div>
    </div>

   
  </div>
);
}

export default Cartamount;