import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets/frontend_assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [proimage, setProimage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => item._id === productId
    );

    if (foundProduct) {
      setProduct(foundProduct);
      setProimage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return product ? (
    <div className="border-t pt-8 sm:pt-10 transition-opacity duration-500 opacity-100">

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 px-4 sm:px-8 lg:px-[8%]">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 flex-1">

          {/* Thumbnail Images */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
            {product.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onClick={() => setProimage(item)}
                className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl cursor-pointer border-2 flex-shrink-0 transition-all duration-300
                ${
                  proimage === item
                    ? "border-indigo-600 scale-105"
                    : "border-gray-200 hover:border-indigo-400"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={proimage}
                alt="product"
                className="w-full h-[350px] sm:h-[500px] lg:h-[650px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Product Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Premium quality product crafted for modern lifestyle.
            </p>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-1 flex-wrap">
            <img src={assets.star_icon} alt="" className="w-4 sm:w-5" />
            <img src={assets.star_icon} alt="" className="w-4 sm:w-5" />
            <img src={assets.star_icon} alt="" className="w-4 sm:w-5" />
            <img src={assets.star_icon} alt="" className="w-4 sm:w-5" />
            <img
              src={assets.star_dull_icon}
              alt=""
              className="w-4 sm:w-5"
            />

            <p className="pl-2 text-sm text-gray-500">
              (122 Reviews)
            </p>
          </div>

          {/* Price */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
              {currency}
              {product.price}
            </h2>

            <p className="text-sm text-green-600 mt-1">
              Inclusive of all taxes
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Product Description
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              Select Size
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-5 py-2 rounded-lg border text-sm font-medium transition-all duration-200
                  ${
                    size === item
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 hover:border-indigo-600 hover:text-indigo-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <button
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 text-white
              font-semibold hover:bg-indigo-700 active:scale-[0.98]
              transition-all duration-200 shadow-lg"
            >
              Add To Cart
            </button>

            <button
              className="w-full sm:w-auto px-8 py-3 rounded-xl border border-gray-300
              font-semibold hover:border-indigo-600 hover:text-indigo-600
              transition-all duration-200"
            >
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="pt-6 border-t space-y-3 text-sm text-gray-500">
            <p>✔ 100% Original Product</p>
            <p>✔ Cash on Delivery Available</p>
            <p>✔ Easy 7 Days Return & Exchange</p>
            <p>✔ Free Shipping Across India</p>
          </div>
        </div>
      </div>
     <div className="mt-16 px-4 sm:px-0">

  {/* Tabs */}
  <div className="flex flex-wrap items-center border-b border-gray-200">

    <button
      className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold
      border-b-2 border-indigo-600 text-indigo-600
      bg-indigo-50 transition-all duration-200"
    >
      Description
    </button>

    <button
      className="px-6 sm:px-8 py-3 text-sm sm:text-base font-medium
      text-gray-500 hover:text-indigo-600 transition-all duration-200"
    >
      Reviews (122)
    </button>
  </div>

  {/* Content */}
  <div
    className="bg-white border border-t-0 border-gray-200
    rounded-b-2xl p-5 sm:p-8 shadow-sm space-y-5"
  >

    <p
      className="text-sm sm:text-base text-gray-600
      leading-relaxed tracking-wide"
    >
      This premium e-commerce product is designed to deliver
      exceptional quality, durability, and modern aesthetics.
      Crafted with precision and attention to detail, it offers
      outstanding comfort and performance for everyday use.
      Whether you are upgrading your lifestyle or enhancing your
      workspace, this product blends innovation with elegance
      to provide a truly premium experience.
    </p>

    <p
      className="text-sm sm:text-base text-gray-600
      leading-relaxed tracking-wide"
    >
      Built using high-quality materials and engineered for long-term
      reliability, it combines functionality with a sleek contemporary
      design. Perfect for users who value performance, style, and
      comfort in one complete package.
    </p>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">

      <div
        className="flex items-center gap-3 p-4 rounded-xl
        bg-gray-50 border border-gray-100"
      >
        <span className="text-green-600 text-lg">✔</span>

        <p className="text-sm text-gray-700 font-medium">
          Premium Build Quality
        </p>
      </div>

      <div
        className="flex items-center gap-3 p-4 rounded-xl
        bg-gray-50 border border-gray-100"
      >
        <span className="text-green-600 text-lg">✔</span>

        <p className="text-sm text-gray-700 font-medium">
          Fast & Secure Delivery
        </p>
      </div>

      <div
        className="flex items-center gap-3 p-4 rounded-xl
        bg-gray-50 border border-gray-100"
      >
        <span className="text-green-600 text-lg">✔</span>

        <p className="text-sm text-gray-700 font-medium">
          Easy Return Policy
        </p>
      </div>

      <div
        className="flex items-center gap-3 p-4 rounded-xl
        bg-gray-50 border border-gray-100"
      >
        <span className="text-green-600 text-lg">✔</span>

        <p className="text-sm text-gray-700 font-medium">
          Trusted by Thousands of Customers
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  
  ) : (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      Loading Product...
    </div>
  );
};

export default Product;