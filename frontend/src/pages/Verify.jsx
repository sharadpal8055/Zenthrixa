import React from 'react'
import { useContext } from 'react';
import { useSearchParams } from "react-router";
import { ShopContext } from '../context/ShopContext';
import axios from "axios"
import {toast} from 'react-toastify'
import { useEffect } from 'react';
const Verify = () => {
  const {navigate,token,setcartitem,backend_url}=useContext(ShopContext)
const [searchParams, setSearchParams] = useSearchParams();
const success=searchParams.get('success')
const orderId=searchParams.get('orderId')

const verify=async()=>{
  try {
    if(!token) return null
    const response=await axios.post(backend_url+'/api/order/verifystripe',{success,orderId},{headers:{token}})
    if(response.data.success){
      setcartitem({})
      navigate('/orders')
    }
    else{
       navigate('/cart')
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}
useEffect(() => {
 verify()
}, [token])
  return (
    <div>Verify</div>
  )
}

export default Verify