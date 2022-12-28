import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useCartContext} from '../context/CartContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CartItem = ({DeleteCartItem,element}) => {
const {DecrementCount,IncrementCount,TotalAmountF} = useCartContext()

    console.log(element)
    
   


  return (
    <>
    <tr>
        <td><Card.Img className="Cartimg" variant="top" src= {element.image}/></td>
        <td>{element.title}</td>
        <td><b>{element.price}</b></td>
        <td><b>
            <button onClick={() =>{DecrementCount(element)}}>-</button>
            {element.count}
            <button onClick={() => {IncrementCount(element)}}>+</button>
            </b></td>
        <td><b>{element.count*element.price}</b></td>
        
        <td> <Button variant="danger" onClick={()=>{DeleteCartItem(element.id)}}>Delete</Button></td>
      </tr>
    </>
  )
}

export default CartItem
