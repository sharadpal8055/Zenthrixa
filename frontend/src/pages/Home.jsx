import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Latestcollections from '../components/Latestcollections'
import Bestseller from '../components/Bestseller'
import Policy from '../components/Policy'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (<>
    <div><Hero/></div>
    <div><Latestcollections/></div>
    <div><Bestseller/></div>
    <div><Policy/></div>
    <div><Newsletter/></div>
    
    </>
  )
}

export default Home