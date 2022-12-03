import React from "react";
//import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import "./Style/Header.scss";
import { Data } from "./Data";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="header-container">
        {/* LEFT SIDE */}
        <div className="logo">
          <h1>eBurger</h1>
        </div>

        {/* MIDDLE */}
        <div className="number">
          <span></span>
          <p>+1 983 1234 5567</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <AddShoppingCartIcon className="Shopping-cart-icon" />
          <MenuIcon className="Menu-icon" onClick={showMenu} />
        </div>
      </div>

      {/* sliderBAR */}
      <nav className={open ? "slider active" : "slider"}>
        <ul onClick={showMenu}>
          {Data.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
