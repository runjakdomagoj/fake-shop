import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "./Product";
import "../styles/Home.css";

const Home = () => {
   const { products } = useContext(ProductContext);

   const genderFilteredProducts = products.filter((item) => {
      return (
         item.category === "men's clothing" ||
         item.category === "women's clothing"
      );
   });

   const [changeView, setChangeView] = useState(false);
   const [viewClass, setViewClass] = useState("product");

   const changeViewHandler = () => {
      setChangeView((changeView) => !changeView);
      setViewClass(changeView ? "product" : "product-change-view");
   };



   return (
      <div>
         <button onClick={changeViewHandler}>Change view</button>
         <div className="products">
            {genderFilteredProducts.map((product) => {
               return (
                  <Product
                     viewClass={viewClass}
                     product={product}
                     key={product.id}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Home;
