import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (

    <nav>
      <h1>Spark</h1>


      <NavLink to="/"> Home </NavLink>

      <NavLink to="about"> About </NavLink>
      <NavLink to="help"> Help </NavLink>
      <NavLink to="category"> Category </NavLink>
      <NavLink to="/allserviceprovider"> All-Service </NavLink>
      <NavLink to="/booking/book/:serviceProvider_id"> Booking </NavLink>
     <NavLink to = "Account"> Account </NavLink>
    </nav>
  );
};

export default Navbar;
