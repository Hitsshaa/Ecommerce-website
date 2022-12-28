import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import Nav from "react-bootstrap/Nav";
import ProductDetail from "./ProductDetail";
import { Link, useParams } from "react-router-dom";

const Productchild = ({ element }) => {
  const inpt = useRef("");
  const style = () => {
    inpt.current.style.backgroundColor = "red";
    console.log(inpt);
    console.log(inpt.current);
  };

  // const detail = ()=> {
  // <ProductDetail/>;
  // document.location.href=`/ProductDetail/${element.id}`;
  // const {id} = useParams();

  // console.log(element.id)

  //   }
  return (
    <Link
      className="marg2"
      ref={inpt}
      style={{ width: "18rem", textDecoration: "none" }}
      to={`/ProductDetail/${element.id}`}
    >
      <Card className="Card">
        <Card.Img className="img" variant="top" src={element.image} />
        <Card.Body className="card-body">
          <Card.Title>
            {element.title.length < 30
              ? `${element.title}`
              : `${element.title.slice(1, 30)}...`}
          </Card.Title>
          <Card.Text className="text">
            <b>{element.price + " " + "$"}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default Productchild;
