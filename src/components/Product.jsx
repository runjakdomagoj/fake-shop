import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

const Product = ({ product, viewClass }) => {
   const { id, image, category, title, price } = product;

   return (
      <div>
         <div className={viewClass}>
            <Link to={`/product/${id}`}>
               <img src={image} />
               <h3>{category}</h3>
               <h2>{title}</h2>
               <p>{price} €</p>
            </Link>
         </div>
      </div>
   );
};

export default Product;
