// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export function useCart() {
//     return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);
    
//     const addToCart = (product) => {
//         setCart(prevCart => {
//             const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
//             if (existingProductIndex > -1) {
//                 const updatedCart = [...prevCart];
//                 updatedCart[existingProductIndex].quantity += 1;
//                 return updatedCart;
//             } else {
//                 return [...prevCart, { ...product, quantity: 1 }];
//             }
//         });
//     };

//     const removeFromCart = (id) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== id));
//     };

//     const updateQuantity = (id, quantity) => {
//         setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, quantity } : item));
//     };

//     const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//     const totalPrice = parseFloat(cart.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2);

//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalQuantity, totalPrice }}>
//             {children}
//         </CartContext.Provider>
//     );
// }
