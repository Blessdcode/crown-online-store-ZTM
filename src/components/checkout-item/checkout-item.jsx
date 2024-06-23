import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
   const { clearItemFromCart, addItemToCart, removeItemFromCart } =
      useContext(CartContext);

   const { name, price, imageUrl, quantity } = cartItem;

   const clearCart = () => clearItemFromCart(cartItem);
   const addToCart = () => addItemToCart(cartItem);
   const removeFromCart = () => removeItemFromCart(cartItem);

   return (
      <div className="checkout-item-container">
         <div className="image-container">
            <img src={imageUrl} alt={name} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <div className="arrow" onClick={removeFromCart}>
               &#10094;
            </div>
            <span className="value"> {quantity}</span>
            <div className="arrow" onClick={addToCart}>
               &#10095;
            </div>
         </span>
         <span className="price">{price}</span>
         <span className="remove-button" onClick={clearCart}>
            &#10005;
         </span>
      </div>
   );
};

export default CheckoutItem;
