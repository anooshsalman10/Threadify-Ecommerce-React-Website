import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Assets } from '../assets/Assets';
import Title from '../components/Title.jsx'
import ProductItem from '../components/ProductItem.jsx';


const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  // below are state variables to add logic on the filters
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // state variable for sort high-low, low-high, relevance etc

  const [sortType, setSortType]= useState('relevant')

  // using the below arrow functions we will be able to store category/subcategory in the above state variables
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }

  }


const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  // we will use category & subcategory states to create a filter

  const applyFilter =()=>{

    let productsCopy= products.slice();// first create copy of all products (it will create copy of products array in 'productsCopy' variable)

     if(category.length > 0 ){
        productsCopy=productsCopy.filter(item=> category.includes(item.category));
     }

     // now add logic for subcategory as well
     if(subCategory.length > 0 ){
        productsCopy=productsCopy.filter(item=> subCategory.includes(item.subCategory)); // in filter, pass individual item and return subCategory includes method
     }

     setFilterProducts(productsCopy); // store setFilterProducts in productsCopy
  }

  // now after making category, subcategory completely functional, we will add logic to the relavent, low-high, high-low sorting

  const sortProduct=()=>{
    let fpCopy= filterProducts.slice(); // first create the copy of filterProducts & also slice them.

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
    
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      
      default:
          applyFilter();
          break;
    }
  }

  //useEffect(() => {
    //setFilterProducts(products);
  //}, [])

  //useEffect(() => {
    //console.log(subCategory)
  //}, [subCategory])

  useEffect(()=>{
    applyFilter();

  },[category,subCategory])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mx-6'>

      {/* filter options */}
      <div className='min-w-60'>
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2" onClick={() => setShowFilter(!showFilter)}>FILTERS
          <img src={Assets.arrow_down} alt="arrow-icon" />
        </p>


        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type='checkbox' className='w-3' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input type='checkbox' className='w-3' value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>

        {/* Sub-Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type='checkbox' className='w-3' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL '} text2={'COLLECTIONS'} className='gap-2' />

          {/*product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: relevant</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>

        {/*map products in the center of page */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />

            ))
          }
        </div>
      </div>


    </div>




  )
}

export default Collection
