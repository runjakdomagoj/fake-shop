import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
         setProducts(response.data);
      });
   }, []);

   return (
      <ProductContext.Provider value={{ products }}>
         {children}
      </ProductContext.Provider>
   );
};

export default ProductProvider;
