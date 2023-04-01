import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
   const { id } = useParams();
   const { products } = useContext(ProductContext);

   const product = products.find((item) => {
      return item.id === parseInt(id);
   });

   if (!product) {
      return <div className="loading">Loading...</div>;
   }

   const { title, description, price, image } = product;

   return (
      <div className="product-details">
         <img src={image} />
         <div className="text-details">
            <h2>{title}</h2>
            <h4>{price} €</h4>
            <p>{description}</p>
         </div>
      </div>
   );
};

export default ProductDetails;
