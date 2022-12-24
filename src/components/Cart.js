import React ,{useState} from 'react'
import {useCartContext} from '../context/CartContext'
import Table from 'react-bootstrap/Table';
import "./style.css";
import CartItem from './CartItem';
import img from './cart.jpeg'
import { Link} from 'react-router-dom';
 
const Cart = () => {
    const {cartItems,DeleteCartItem,ClearCart}= useCartContext();
    console.log(cartItems)
    let Total_amount = 0;
    cartItems.map((element)=>{
      Total_amount = Total_amount + element.count*element.price
    });
    console.log(Total_amount);

    if (cartItems.length>=1) {



  return (
    <>
    <Table striped bordered hover size="sm" className='CartTable'>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th> Sub Total</th>
        <th> Remove</th>
      </tr>
    </thead>
    <tbody>
   { cartItems.map((element) => {
  
   return ( <CartItem      DeleteCartItem={DeleteCartItem}   key = {element.id}  element={element}/>)
   })}
   {/* {console.log(TotalAmount)} */}
   <tr>
        <td colSpan="3">Total Amount</td>
        <td colSpan="2">{Total_amount}</td>
      </tr>
    </tbody>
  </Table>
     <br/><br/>
     <div className='CartTable'>
      <button onClick={ClearCart}>Clear Cart</button>
      <Link className="Purchase" type='button' to={`/product`} >Continue Shoping</Link>
     </div>

</>
  )
}else {
  return (
    <>
  <img src={img} />
  <h1>Empty Cart</h1>
  </>
  )
}


}


export default Cart  
