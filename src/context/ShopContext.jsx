import { createContext,useState } from "react";
import { products } from "../assets/Assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency= '$';
    const delivery_fee= 10;

    // to implement 'search' feature create following state variables
    const [search, setSearch]= useState('');
    const [showSearch,setShowSearch]=useState(true);


    // now pass search, showSearch variables etc here so that these can be accessed anywhere
    const value = {
       products,
       currency,
       delivery_fee,
       search,
       setSearch,
       showSearch,
       setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;