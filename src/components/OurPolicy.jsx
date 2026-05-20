import React from 'react'
import { Assets } from '../assets/Assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700  '>
      
      <div>
        <img src={Assets.exchange_icon} alt="" className='w-12 m-auto mb-5 ' />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy.</p>
      </div>

      <div>
        <img src={Assets.quality_icon} alt="" className='w-12 m-auto mb-5 ' />
        <p className='font-semibold'>One Week Return Policy</p>
        <p className='text-gray-400'>We offer one week return policy.</p>
      </div>

      <div>
        <img src={Assets.customer_icon} alt="" className='w-12 m-auto mb-5 ' />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide customer support 24/7.</p>
      </div>

    </div>
  )
}

export default OurPolicy
