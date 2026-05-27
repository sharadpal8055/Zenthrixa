import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
export const ShopContext = createContext();

const Shopcontextprovider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartitem, setcartitem] = useState({});
  const currency = "$";
  const delivery_fee = 10;
  let addtocartproduct = structuredClone(cartitem);
  const addtocart = ({ itemid, size }) => {
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
    setcartitem(addtocartproduct);
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
    setcartitem(cartdata);
  };
  const getcartamount =  () => {
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
  const navigate=useNavigate();
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
    updatequantity,getcartamount,navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default Shopcontextprovider;
