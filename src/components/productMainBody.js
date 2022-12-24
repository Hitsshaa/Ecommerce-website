import React from "react";
import Productchild from "./productchild";
import Row from "react-bootstrap/Row";



const ProductMainBody = ({info}) => {
  return (
    <Row>
      {info.map((element) => (
        <Productchild key={element.id} element={element} />
      ))}
    </Row>
  );
};

export default ProductMainBody;
