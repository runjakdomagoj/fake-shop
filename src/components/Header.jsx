import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
   return (
      <div className="header">
         <div className="links">
            <Link to="/">
               <HomeIcon style={{fontSize: "120px"}} />
            </Link>
         </div>
      </div>
   );
};

export default Header;
