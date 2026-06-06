import React, { useEffect, useState } from "react";
import { backend_url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

export const currency = "$";

const Listitem = ({ token }) => {
  const [list, setlist] = useState([]);
  const [loading, setloading] = useState(false);
  const [deletingId, setdeletingId] = useState(null);

  const fetchlist = async () => {
    try {
      setloading(true);

      const response = await axios.get(
        `${backend_url}/api/product/listproduct`
      );

      if (response.data.success) {
        setlist(response.data.product || []);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch products"
      );
    } finally {
      setloading(false);
    }
  };

  const removeproduct = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      setdeletingId(id);

      const response = await axios.post(
        `${backend_url}/api/product/removeproduct`,
        { id },
        {
          headers: {
            token,
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setlist((prev) => prev.filter((item) => item._id !== id));

        // Alternative:
        // await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete product"
      );
    } finally {
      setdeletingId(null);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

 return (

  <div className="p-4 sm:p-6 lg:p-8">

```
{/* Header */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      Product Management
    </h1>
    <p className="text-gray-500 mt-1">
      Manage all products from your store
    </p>
  </div>

  <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold shadow-sm">
    {list.length} Products
  </div>
</div>

{/* Loading */}
{loading && (
  <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
    <div className="inline-block w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
    <p className="mt-3 text-gray-500">Loading products...</p>
  </div>
)}

{/* Empty State */}
{!loading && list.length === 0 && (
  <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center shadow-sm">
    <h2 className="text-xl font-semibold text-gray-700">
      No Products Found
    </h2>
    <p className="text-gray-500 mt-2">
      Add your first product to get started.
    </p>
  </div>
)}

{/* Product List */}
{!loading && list.length > 0 && (
  <>
    {/* Header Row */}
    <div
      className="
        hidden md:grid
        md:grid-cols-[100px_3fr_1.5fr_1fr_80px]
        items-center
        bg-gradient-to-r
        from-slate-50
        to-gray-100
        border
        border-gray-200
        rounded-2xl
        px-6
        py-4
        font-semibold
        text-gray-700
        shadow-sm
      "
    >
      <p>Image</p>
      <p>Name</p>
      <p>Category</p>
      <p>Price</p>
      <p className="text-center">Action</p>
    </div>

    {/* Product Cards */}
    <div className="mt-5 flex flex-col gap-4">
      {list.map((item) => (
        <div
          key={item._id}
          className="
            grid
            grid-cols-1
            md:grid-cols-[100px_3fr_1.5fr_1fr_80px]
            gap-4
            md:gap-0
            items-center
            bg-white
            border
            border-gray-200
            rounded-2xl
            px-6
            py-5
            shadow-sm
            hover:shadow-xl
            hover:border-indigo-200
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          {/* Product Image */}
          <div>
            <img
              src={item.image?.[0]}
              alt={item.name}
              className="
                w-20
                h-20
                object-cover
                rounded-xl
                border
                border-gray-200
                shadow-sm
              "
            />
          </div>

          {/* Product Name */}
          <div className="min-w-0">
            <p className="font-semibold text-gray-800 truncate text-lg">
              {item.name}
            </p>

            <p className="text-xs text-gray-400 mt-1 md:hidden">
              {item.category}
            </p>

            <p className="text-xs text-gray-400 mt-1 md:hidden">
              {currency}
              {item.price}
            </p>
          </div>

          {/* Category */}
          <div className="hidden md:block">
            <span
              className="
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                bg-gray-100
                text-gray-700
                text-sm
                font-medium
              "
            >
              {item.category}
            </span>
          </div>

          {/* Price */}
          <div>
            <p className="hidden md:block font-bold text-lg text-indigo-600">
              {currency}
              {item.price}
            </p>
          </div>

          {/* Delete Button */}
          <div className="flex justify-center">
            <button
              disabled={deletingId === item._id}
              onClick={() => removeproduct(item._id)}
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-red-50
                text-red-500
                hover:bg-red-500
                hover:text-white
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {deletingId === item._id ? (
                <span className="animate-pulse">...</span>
              ) : (
                "✕"
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
)}
```

  </div>
);

};

export default Listitem;