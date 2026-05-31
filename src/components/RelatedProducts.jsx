import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  // in useeffect we create new copy of products and then filter them. 
  useEffect(() => {

    if (products.length > 0) {

      let productsCopy = products.slice(); // new copy
      productsCopy = productsCopy.filter((item) => category === item.category); // apply filter method
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

      //console.log(productsCopy.slice(0,5));
       setRelated(productsCopy.slice(0,5));
    }

  }, [products])
  return (
    <div className='my-24'>
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"products"}/>
      </div>
     
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {related.map((item,index)=>(
         <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image}/>
      ))

      }
     </div>
    </div>
  )
}

export default RelatedProducts
