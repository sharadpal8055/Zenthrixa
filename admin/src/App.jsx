import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route,Router, Routes } from "react-router-dom";
import Additem from "./pages/Additem";
import Listitem from "./pages/Listitem";
import Orders from "./pages/Orders";
import Login from "./components/Login";
 import { ToastContainer, toast } from 'react-toastify';
 export const backend_url=import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, settoken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"")
  useEffect(() => {
   localStorage.setItem('token',token)
  }, [token])
  return (
   <>
    <div className="min-h-screen bg-gray-50">
       <ToastContainer/>
      {/* Top Navbar */}
       
 {
          token===""?<Login settoken={settoken}/>: 
          <>
           <Navbar settoken={settoken} />
          <div className="flex">
          
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
       
       <Routes >
        <Route path="/add" element={<Additem token={token}/>} />
        <Route path="/list" element={<Listitem token={token}/>} />
        <Route path="/orders" element={<Orders token={token}/>} />
       </Routes>
    
      </div>
        </>
 }
        
      {/* Dashboard Layout */}
     

    </div>
    </>
  );
};

export default App;
