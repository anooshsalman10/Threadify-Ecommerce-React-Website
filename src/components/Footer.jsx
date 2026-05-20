import React from 'react'
import { Assets } from '../assets/Assets'

const Footer = () => {
  return (
    <div className='mx-6'>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
          <img src={Assets.logo1} className='w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600 mb-10'>
            At Threadify, we bring you modern fashion with comfort, quality, and affordability in every piece.
            Discover trendy collections designed to help you express your style with confidence every day.
          </p>
        </div>

        <div className="mt-11">
          <p className="text-lg font-medium mb-5">COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='mt-11'>
          <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+92 3067777288</li>
            <li>contact@threadify.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ threadify.com- All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
