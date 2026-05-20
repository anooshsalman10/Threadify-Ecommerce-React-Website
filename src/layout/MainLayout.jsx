import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
