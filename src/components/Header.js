import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from "react-router-dom";
import {useCartContext} from '../context/CartContext'


const  Header = () => {
  const {cartItems}= useCartContext();
  let cartItemsLength = cartItems.length;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
          <Nav className="me-auto">
          <NavLink className="navbar-brand mr-auto" to="/">React-Bootstrap</NavLink>
            <NavLink className="navbar-brand mr-auto" to="/">Index</NavLink>
            <NavLink className="navbar-brand mr-auto" to="/counter">Counter</NavLink>
            <NavLink className="navbar-brand mr-auto" to="/product">Product</NavLink>
            <NavLink className="navbar-brand mr-auto" to="/Cart/:id">Cart({cartItemsLength})</NavLink>
          </Nav>
          
      </Container>
    </Navbar>
  );
}

export default Header;