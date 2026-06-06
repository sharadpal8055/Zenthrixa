import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";

const Additem = ({ token }) => {
  const [image1, setimage1] = useState(false);
  const [image2, setimage2] = useState(false);
  const [image3, setimage3] = useState(false);
  const [image4, setimage4] = useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("Men");
  const [subcategory, setsubcategory] = useState("Topwear");
  const [price, setprice] = useState(0);
  const [sizes, setsizes] = useState([]);
  const [bestseller, setbestseller] = useState(false);
const [loading, setloading] = useState(false);
  const onsubmithandler = async (e) => {
    setloading(true);
    try {
      e.preventDefault();
      if (!name.trim()) {
  return toast.error("Product name is required");
}

if (!description.trim()) {
  return toast.error("Product description is required");
}

if (price <= 0) {
  return toast.error("Enter valid price");
}

if (sizes.length === 0) {
  return toast.error("Select at least one size");
}

if (!image1 && !image2 && !image3 && !image4) {
  return toast.error("Upload at least one image");
}
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      console.log(token);
      const response = await axios.post(
        backend_url + "/api/product/addproduct",
        formData,
        { headers: { token: token } },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setname("")
        setdescription("")
        setimage1(false)
        setimage2(false)
        setimage3(false)
        setimage4(false)
        setprice('')
        setsizes([])
setbestseller(false)
setcategory("Men")
setsubcategory("Topwear")
setprice(0)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }finally{
       setloading(false);
    }
  };
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <form
        onSubmit={onsubmithandler}
        className="max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Add New Product
        </h1>

        {/* Upload Images */}
        <div className="mb-8">
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Upload Images
          </p>

          <div className="flex flex-wrap gap-4">
            <label htmlFor="image1" className="cursor-pointer">
              <img
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt=""
                className="w-28 h-28 object-cover border border-gray-300 rounded-xl hover:scale-105 transition"
              />
              <input
                onChange={(e) => {
                  setimage1(e.target.files[0]);
                }}
                type="file"
                id="image1"
                name="image1"
                hidden
                accept="image/png,image/jpeg,image/jpg,image/webp"
              />
            </label>

            <label htmlFor="image2" className="cursor-pointer">
              <img
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt=""
                className="w-28 h-28 object-cover border border-gray-300 rounded-xl hover:scale-105 transition"
              />
              <input
                onChange={(e) => {
                  setimage2(e.target.files[0]);
                }}
                type="file"
                id="image2"
                name="image2"
                hidden
                accept="image/png,image/jpeg,image/jpg,image/webp"
              />
            </label>

            <label htmlFor="image3" className="cursor-pointer">
              <img
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt=""
                className="w-28 h-28 object-cover border border-gray-300 rounded-xl hover:scale-105 transition"
              />
              <input
                onChange={(e) => {
                  setimage3(e.target.files[0]);
                }}
                type="file"
                id="image3"
                name="image3"
                hidden
                accept="image/png,image/jpeg,image/jpg,image/webp"
              />
            </label>

            <label htmlFor="image4" className="cursor-pointer">
              <img
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt=""
                className="w-28 h-28 object-cover border border-gray-300 rounded-xl hover:scale-105 transition"
              />
              <input
                onChange={(e) => {
                  const file = e.target.files[0];

if (file.size > 5 * 1024 * 1024) {
   return toast.error("Image must be below 5MB");
}

                  setimage4(e.target.files[0]);
                }}
                type="file"
                id="image4"
                name="image4"
                hidden
                accept="image/png,image/jpeg,image/jpg,image/webp"
              />
            </label>
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Product Name</p>

          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
            type="text"
            id="name"
            placeholder="Enter Product Name"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-indigo-500
            "
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Product Description</p>

          <textarea
          value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            id="description"
            rows="5"
            placeholder="Enter Product Description"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              resize-none
              outline-none
              focus:ring-2
              focus:ring-indigo-500
            "
          />
        </div>

        {/* Category / Subcategory / Price */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div>
            <p className="font-medium text-gray-700 mb-2">Product Category</p>

            <select
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
              "
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-2">
              Product Subcategory
            </p>

            <select
              onChange={(e) => {
                setsubcategory(e.target.value);
              }}
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
              "
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-2">Product Price</p>

            <input
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
              type="number"
              id="price"
              placeholder="25"
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-wrap gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                setsizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size],
                )
              }
              className={`
        px-6 py-2.5
        rounded-xl
        font-semibold
        border
        transition-all
        duration-200
        cursor-pointer
        focus:outline-none
        ${
          sizes.includes(size)
            ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
            : "bg-white text-gray-700 border-gray-300 hover:border-indigo-600 hover:text-indigo-600"
        }
      `}
            >
              {size}
            </button>
          ))}
        </div>
        {/* Bestseller */}
        <div className="flex items-center gap-3 mb-8">
          <input
            onChange={() => setbestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
            className="w-5 h-5 accent-indigo-600"
          />

          <label
            htmlFor="bestseller"
            className="cursor-pointer text-gray-700 font-medium"
          >
            Add to Bestseller
          </label>
        </div>

        {/* Submit */}
       <button
  disabled={loading}
  type="submit"
  className={`
    px-8 py-3 rounded-xl font-semibold transition shadow-md
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-indigo-600 hover:bg-indigo-700 text-white"
    }
  `}
>
  {loading ? "Adding Product..." : "Add Product"}
</button>
      </form>
    </div>
  );
};

export default Additem;
