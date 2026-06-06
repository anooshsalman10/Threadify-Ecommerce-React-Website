import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Assets } from '../assets/Assets.jsx';
import { Search, ShoppingCart, User, Menu, CircleChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const {setShowSearch,getCartCount} = useContext(ShopContext);

  return (
    <nav className='flex items-center justify-between font-medium py-2 px-8 shadow-sm'>

      <Link to='/'><img src={Assets.logo1} className='w-36' alt="logo" /></Link>

      <ul className='hidden md:flex items-center gap-10 list-none'>

        <li>
          <NavLink to='/' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/collection' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Collection
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to='/product' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Product
          </NavLink>
        </li>

        <li>
          <NavLink to='/shop' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Contact
          </NavLink>
        </li>


        <li>
          <NavLink to='/signup' className={({ isActive }) =>
            isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Sign-Up
          </NavLink>
        </li>

        <li>
          <NavLink to='/login' className={({ isActive }) => isActive ? " font-semibold border-b-2 border-gray-700 pb-1" : "text-gray-700 hover:text-black"}>
            Login
          </NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-6'>

        <NavLink to="/collection">
          < Search size={22} onClick={()=>setShowSearch(true)}/>
        </NavLink>

        <NavLink to='/cart' className='relative'>
          <ShoppingCart size={22} />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
        </NavLink>


        <div className='group relative'>
          <Link to={'/login'}><User size={22} className='cursor-pointer' /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Menu onClick={() => setMenuOpen(true)} className='cursor-pointer md:hidden w-5' />


      </div>

      {/*--------------------sidebar menu for small screen-----------*/}

      <div className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 ${menuOpen ? "w-64" : "w-0"}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setMenuOpen(false)} className=' flex items-center gap-4 p-3'>
            <CircleChevronLeft className='h-4' />
            <p>Back</p>
          </div>
          <NavLink  onClick={()=>setMenuOpen(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink  onClick={()=>setMenuOpen(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
          <NavLink onClick={()=>setMenuOpen(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={()=>setMenuOpen(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
