import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css"
import ProductDetails from "./components/ProductDetails";

const App = () => {
   return (
      <div>
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
         </Router>
      </div>
   );
};

export default App;
