import { createContext, useContext, useState } from "react";

const shoppingCartContext = createContext({})

const ShoppingCartProvider = (children) => {
    const [ cartItems , setCartItems] = useState([])
    return(
        <shoppingCartContext.Provider value={{cartItems}}>
        {children}
    </shoppingCartContext.Provider>
    )
 
}

export default ShoppingCartProvider

export const useShoppingCart = () => {
    return useContext(shoppingCartContext);
}

