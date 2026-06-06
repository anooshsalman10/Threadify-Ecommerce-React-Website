import React from 'react';
import Title from '../components/Title';
import { Assets } from '../assets/Assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
       <img src={Assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
       <div className="flex flex-col justify-center items-start gap-6">
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>house no 153, street no 18-A, <br/> Railway Officers colony, Walton, Lahore</p>
        <p className='text-gray-500'> Mobile no: 0306 7788288 <br /> Email: adminthreadify@gmail.com </p>
        <p className='font-semibold text-xl text-gray-600'>Careers at THREADIFY</p>
        <p className='text-gray-500'> Learn more about our teams and job openings.</p>
        <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
       </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default Contact
