import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import "./style.css";
import CartItem from "./CartItem";
import img from "./cart.jpeg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cartItems, DeleteCartItem, ClearCart } = useCartContext();
  console.log(cartItems);
  let Total_amount = 0;
  cartItems.map((element) => {
    Total_amount = Total_amount + element.count * element.price;
  });
  console.log(Total_amount);

  if (cartItems.length >= 1) {
    return (
      <>
        <Table
          striped
          bordered
          hover
          size="sm"
          variant="green"
          className="CartTable"
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th> Sub Total</th>
              <th> Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((element) => {
              return (
                <CartItem
                  DeleteCartItem={DeleteCartItem}
                  key={element.id}
                  element={element}
                />
              );
            })}
            {/* {console.log(TotalAmount)} */}
            <tr>
              <td colSpan="4">
                <strong>Total Amount</strong>
              </td>
              <td colSpan="2" className="Total_Amount">
                <strong> {Math.floor(Total_amount)}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
        <br />
        <div className="CartTable">
          <Button variant="dark" onClick={ClearCart}>
            Clear Cart
          </Button>

          <Link className="Purchase" type="button" to={`/product`}>
            <Button variant="dark">Continue Shoping</Button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img src={img} />
        <h1>Empty Cart</h1>
      </>
    );
  }
};

export default Cart;
