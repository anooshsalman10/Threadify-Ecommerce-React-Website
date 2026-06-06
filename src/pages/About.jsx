import React from 'react'
import Title from '../components/Title'
import { Assets } from '../assets/Assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={Assets.about_img} alt="" className="w-full md:max-w-[450px] h-96" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">

          <p>At Threadify, we bring together style, comfort, and quality to help you express yourself with confidence. Discover trendy fashion pieces designed to fit every occasion and elevate your everyday wardrobe.</p>

          <p>Threadify is your destination for timeless fashion and everyday essentials. We make shopping effortless with quality clothing, modern designs, and a seamless online experience. From casual wear to statement pieces, we help you stay stylish and confident every day.</p>

          <b className="text-gray-800 mx-28">OUR VISION</b>

          <p className="class">Our vision is to become a trusted destination for fashion, inspiring confidence through quality, style, and affordability. We aim to make trendy clothing accessible to everyone while delivering an exceptional shopping experience.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US?'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Quality is at the heart of everything we do, ensuring every product meets our standards for comfort, durability, and style. We carefully select and inspect our collections to provide a reliable and satisfying shopping experience.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Ease of Use:</b>
          <p className="text-gray-600">We make shopping simple and hassle-free with an intuitive browsing experience and secure checkout process. From discovering products to doorstep delivery, convenience is built into every step of your journey.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Service:</b>
          <p className="text-gray-600">Our dedicated customer support team is always ready to assist you with any questions or concerns. We are committed to providing a friendly, responsive, and satisfying experience at every stage of your shopping journey.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
