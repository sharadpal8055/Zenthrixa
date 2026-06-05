import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route,Router, Routes } from "react-router-dom";
import Additem from "./pages/Additem";
import Listitem from "./pages/Listitem";
import Orders from "./pages/Orders";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        
       <Routes >
        <Route path="/add" element={<Additem/>} />
        <Route path="/list" element={<Listitem/>} />
        <Route path="/orders" element={<Orders/>} />
       </Routes>
      </div>
    </div>
  );
};

export default App;
