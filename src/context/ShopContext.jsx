import { createContext, useEffect, useState } from "react";
import { products } from "../assets/Assets";
import { toast } from "react-toastify";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;

    // to implement 'search' feature create following state variables
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});// for add to cart feature-it is an object



    const addToCart = async (itemId, size) => {
     
        if(!size){
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems); // first create copy of cartItems
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }
        setCartItems(cartData);

    }

    /*useEffect(()=>{
        console.log(cartItems);
    },[cartItems])*/

    //create function for numbers to dynamically update in cart icon
    const getCartCount=()=>{

      let totalCount=0;

      for(const items in cartItems){ // create for-in loop to iterate through items, help us to iterate the items

        for(const item in cartItems[items]){ // in second for-in loop it will help us to iterate through size
            try {
                if(cartItems[items][item]>0){
                    totalCount+=cartItems[items][item]; // so that we get the total count of that particular item with size 
                }
            } catch (error) {
                
            }
        }

      }
      return totalCount;
    }

    // now pass search, showSearch variables etc here so that these can be accessed anywhere
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;