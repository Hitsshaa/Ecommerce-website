import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import "./style.css";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  const { cartItems } = useCartContext();
  const { SearchFun } = useProductContext();

  let cartItemsLength = cartItems.length;

  return (
    <>
      <Navbar className="header" expand="lg">
        <Container>
          <Nav className="me-auto">
            <NavLink className="navbar-brand mr-auto" to="/">
              React-Bootstrap
            </NavLink>
            <NavLink className="navbar-brand mr-auto" to="/">
              Index
            </NavLink>
            <NavLink className="navbar-brand mr-auto" to="/counter">
              Counter
            </NavLink>
            <NavLink className="navbar-brand mr-auto" to="/product">
              Product
            </NavLink>
          </Nav>
        </Container>
        <NavLink className="navbar-brand mr-auto bag" to="/Cart/:id">
          <BsHandbag />({cartItemsLength})
        </NavLink>
        <input
          className="SearchBox"
          type="Search"
          placeholder="Search "
          onChange={(e) => SearchFun(e)}
        />
      </Navbar>
    </>
  );
};

export default Header;
