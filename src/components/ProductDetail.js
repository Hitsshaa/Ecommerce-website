import React,{useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import  "./style.css";
import {useProductContext} from '../context/ProductContext'
import { Link, useParams } from 'react-router-dom';
import {useCartContext} from '../context/CartContext'


export default function ProductDetail() {
  const {AddCart}= useCartContext();
  let {product} = useProductContext();
    const {id} = useParams();
    const [data,setData]=useState({});
    // setData(product[id-1]);
    // console.log(data);


    // let api = `https:fakestoreapi.com/products/${id}`
    const getProduct = async () =>{
           
            //  const res = await axios.get(url);
            //  const product = await res.data;
             setData(product[id-1])
          
        }
        
        useEffect(()=>{
            getProduct()
        })


  return (
    <>
    {/* {console.log("hi",data)} */}
     <div className='pdetail'>
     <div ><Card.Img className="innerimg" variant="top" src= {data.image}/></div>
         <div className='inner2'><Card className='card'>
       <Card.Body>
       <Card.Text>{data.category}</Card.Text>
         <Card.Title>{data.title}</Card.Title><br/>
         <Card.Text>{data.description}</Card.Text>
         <Card.Text>{data.price + " " + "$"}</Card.Text>
         <Button variant="primary" size="sm">BUY</Button>
         <Link type='button' to={`/Cart/${id}`} onClick = {()=>AddCart(data)}>ADD CART</Link>
       </Card.Body>
     </Card></div>
     </div>
     </>
  )
}


//  category
//  : 
//  "men's clothing"
//  description
//  : 
//  "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
//  id
//  : 
//  1
//  image
//  : 
//  "https:fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//  price
//  : 
//  109.95
//  rating
//  : 
//  {rate: 3.9, count: 120}
//  title
//  :