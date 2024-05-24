import React, { createContext, useState } from "react";
import all_product from "../../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemid) => {
        setCartItems((prev) => ({...prev, [itemid]: prev[itemid]+1}));
        console.log(cartItems)
    }

    const removeFromCart = (itemid) => {
        setCartItems((prev) => {
            if (prev[itemid] > 0) {
                return {...prev, [itemid]: prev[itemid]-1};
            } else {
                return prev;
            }
        });
    }
    
    const contextValue = {all_product, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;