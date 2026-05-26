import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

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
    <div>

    </div>
  )
}

export default RelatedProducts
