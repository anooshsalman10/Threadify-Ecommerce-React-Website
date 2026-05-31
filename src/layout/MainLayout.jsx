import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
