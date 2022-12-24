import React,{useRef} from 'react'
import Card from 'react-bootstrap/Card';
import "./style.css";
import Nav from 'react-bootstrap/Nav';
import ProductDetail from './ProductDetail';
import { Link, useParams } from 'react-router-dom';


const Productchild =({element})=> {

  const inpt = useRef("");
  const style = ()=>{
    inpt.current.style.backgroundColor = 'red';
    console.log(inpt)
  console.log(inpt.current)
  };

  const detail = ()=> {
  // <ProductDetail/>;
  // document.location.href=`/ProductDetail/${element.id}`;
  // const {id} = useParams();

console.log(element.id)

  }

  return (
    <Link className="marg2" ref={inpt}  style={{ width: '18rem' }} to={`/ProductDetail/${element.id}`}>
    <Card     onClick={()=>{detail();
    style();
    }}>
      <Card.Img className="img" variant="top" src= {element.image}/>
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text>{element.price + " " + "$"}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}
export default Productchild;