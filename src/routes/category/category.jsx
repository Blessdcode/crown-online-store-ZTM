import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./category.style.scss";
import { CategoriesContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card";

const Category = () => {
   const { category } = useParams();
   const { categoriesMap } = useContext(CategoriesContext);
   const [product, setProduct] = useState(categoriesMap[category]);

   useEffect(() => {
      setProduct(categoriesMap[category]);
   }, [category, categoriesMap]);

   return (
      <div className="category-container">
      <h2>{category}</h2>
         {product &&
            product.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
      </div>
   );
};

export default Category;
