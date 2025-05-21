import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/vehiculos">Vehículos</Link>
      <Link to="/category/electronica">Electrónica</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
