import { useContext } from "react";
import "./product-card.style.scss";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button";

const ProductCard = ({ data }) => {
   const { name, price, imageUrl } = data;
   const { addItemToCart } = useContext(CartContext);
   const addProductToCart = () => addItemToCart(data);

   return (
      <div className="product-card-container">
         <img src={imageUrl} alt={`${name}`} />
         <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
         </div>
         <Button buttonType="inverted" onClick={addProductToCart}>
            Add to card
         </Button>
      </div>
   );
};

export default ProductCard;
