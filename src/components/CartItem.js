import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useCartContext} from '../context/CartContext'


const CartItem = ({DeleteCartItem,element}) => {
const {DecrementCount,IncrementCount,TotalAmountF} = useCartContext()

    console.log(element)
    
   


  return (
    <>
    <tr>
        <td>{element.title}</td>
        <td>{element.price}</td>
        <td>
            <button onClick={() =>{DecrementCount(element)}}>-</button>
            {element.count}
            <button onClick={() => {IncrementCount(element)}}>+</button>
        </td>
        <td>{element.count*element.price}</td>
        <td> <button  onClick={()=>{DeleteCartItem(element.id)}}>Delete</button></td>
      </tr>
    </>
  )
}

export default CartItem
