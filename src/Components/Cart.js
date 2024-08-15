// import { useCart } from '../Context/CartContext';

// function Cart() {
//     const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

//     const handleQuantityChange = (id, newQuantity) => {
//         if (newQuantity > 0) {
//             updateQuantity(id, newQuantity);
//         }
//     };
    

//     return (
//         <div className="container my-5">
//             <h2>Your Cart</h2>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 <div>
//                     {cart.map(item => (
//                         <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
//                             <div>
//                                 <h5>{item.title}</h5>
//                                 <p>Quantity:
//                                     <button
//                                         className="btn btn-secondary btn-sm mx-2"
//                                         onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                                     >
//                                         -
//                                     </button>
//                                     {item.quantity}
//                                     <button
//                                         className="btn btn-secondary btn-sm mx-2"
//                                         onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                                     >
//                                         +
//                                     </button>
//                                 </p>
//                                 <p>Price: ${item.price.toFixed(2)} each</p>
//                                 <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

//                             </div>
//                             <button
//                                 className="btn btn-danger"
//                                 onClick={() => removeFromCart(item.id)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                     <h3 className="mt-4">Total Price: ${totalPrice}</h3>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Cart;
