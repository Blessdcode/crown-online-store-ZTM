import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item";
import Button from "../button/button";
import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
   const { cartItems } = useContext(CartContext);
   const navigate = useNavigate()
   const goToCheckOut = ()=>{
      navigate('/checkout')
   }
   return (
      <div className="cart-dropdown-container">
         <div className="cart-items">
            {cartItems.map((item) => (
               <CartItem key={item.id} cartItem={item} />
            ))}
         </div>
         <Button onClick={goToCheckOut}>Go to checkout</Button>
      </div>
   );
};

export default CartDropdown;
