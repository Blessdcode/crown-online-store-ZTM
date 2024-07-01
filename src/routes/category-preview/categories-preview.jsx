import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card";
import CategoryPreview from "../../components/category/category";

import { CategoriesContext } from "../../context/products.context";


const CategoriesPreview = () => {
   const { categoriesMap } = useContext(CategoriesContext);
   // console.log("Categories Map:", categoriesMap);

   return (
      <Fragment>
         {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
               <CategoryPreview key={title} title={title} products={products} />
            );
         })}
      </Fragment>
   );
};

export default CategoriesPreview;
