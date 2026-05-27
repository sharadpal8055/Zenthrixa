import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import './App.css'; 
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Searchbar/>
      <ToastContainer/>
<Routes>
  
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/collections' element={<Collections/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/login' element={<Login/>}/>
{/* <Route path='/orders/:orderId' element={<Orders/>}/> */}
<Route path='/orders' element={<Orders/>}/>
{/* <Route path='/placeorder/:placeorderId' element={<PlaceOrder/>}/> */}
<Route path='/placeorder' element={<PlaceOrder/>}/>
<Route path='/product/:productId' element={<Product/>}/>

</Routes>

<Footer/>
    </div>
  )
}

export default App