import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { products } from "../assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const Shopcontextprovider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartitem, setcartitem] = useState({});
  const [products, setproducts] = useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [token, settoken] = useState("");
  const currency = "$";
  const delivery_fee = 10;
  let addtocartproduct = structuredClone(cartitem);

  const fetchproducts = async () => {
    try {
      const response = await axios.get(
        backend_url + "/api/product/listproduct",
      );

      if (response.data.success) {
        setproducts(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getusercart = async (token) => {
    try {
      if (token) {
        const response = await axios.post(
          backend_url + "/api/cart/getUserCart",
          {},
          { headers: { token } },
        );
        if (response.data.success) {
          setcartitem(response.data.cartitem);
        }
      
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
    }
    getusercart(localStorage.getItem("token"));
  }, []);

  const addtocart = async ({ itemid, size }) => {
    if (!size) {
      toast.error("Please select size ");
      return;
    }
    if (addtocartproduct[itemid]) {
      if (addtocartproduct[itemid][size]) {
        addtocartproduct[itemid][size] += 1;
      } else {
        addtocartproduct[itemid][size] = 1;
      }
    } else {
      addtocartproduct[itemid] = {};
      addtocartproduct[itemid][size] = 1;
    }

    if (token) {
      try {
        const response = await axios.post(
          backend_url + "/api/cart/addtocart",
          { itemid, size },
          { headers: { token } },
        );
        setcartitem(addtocartproduct);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  const getcartcount = () => {
    let totalcartcount = 0;
    for (const items in cartitem) {
      for (const item in cartitem[items])
        try {
          if (cartitem[items][item] > 0) {
            totalcartcount += cartitem[items][item];
          }
        } catch (error) {}
    }
    return totalcartcount;
  };

  const updatequantity = async ({ itemid, size, quantity }) => {
    let cartdata = structuredClone(cartitem);
    cartdata[itemid][size] = quantity;

    if (token) {
      try {
        const response = await axios.post(
          backend_url + "/api/cart/updatetocart",
          { itemid, size, quantity },
          { headers: { token } },
        );
        setcartitem(cartdata);
       
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getcartamount = () => {
    let totalcartamount = 0;
    for (const items in cartitem) {
      const iteminfofromproducts = products.find(
        (product) => product._id === items,
      );
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            totalcartamount +=
              iteminfofromproducts.price * cartitem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalcartamount;
  };
  const navigate = useNavigate();
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartitem,
    addtocart,
    getcartcount,
    updatequantity,
    getcartamount,
    navigate,
    backend_url,
    token,
    settoken,
    setcartitem,
    products
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default Shopcontextprovider;
