import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import {
   addCollectionAndDocuments,
   getCategoriesAndDocuments,
} from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
   categories: [],
});

export const CategoriesProvider = ({ children }) => {
   const [categoriesMap, setCategories] = useState({});
   // useEffect(() => {
   //    addCollectionAndDocuments("categories", SHOP_DATA);
   // }, []);

   useEffect(() => {
      const getCategoriesMap = async () => {
         const categoryMap = await getCategoriesAndDocuments("categories");
         // console.log(categoryMap, "e work na");
         setCategories(categoryMap);
      };
      getCategoriesMap();
   }, []);

   const value = { categoriesMap };

   return (
      <CategoriesContext.Provider value={value}>
         {children}
      </CategoriesContext.Provider>
   );
};
