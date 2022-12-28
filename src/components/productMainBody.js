import React from "react";
import Productchild from "./productchild";
import Row from "react-bootstrap/Row";
import {  useProductContext } from "../context/ProductContext";



const ProductMainBody = ({info,setInfo}) => {
  const {searchItems,categoryItems,rangeItem} = useProductContext();
 

  if (searchItems.length !=0 ){
    setInfo(searchItems);
  return (
    <Row className="row">
      {info.map((element) => (
        <Productchild key={element.id} element={element} />
      ))}
    </Row>
  );
      }
      else if (categoryItems.length !=0) {
        setInfo(categoryItems);
        return (
          <Row className="row">
            {info.map((element) => (
              <Productchild key={element.id} element={element} />
            ))}
          </Row>
        );
      }
      else if (rangeItem.length !=0) {
        setInfo(rangeItem);
        return (
          <Row className="row">
            {info.map((element) => (
              <Productchild key={element.id} element={element} />
            ))}
          </Row>
        );
      }
      else{
       return (
        <Row className="row">
        {info.map((element) => (
          <Productchild key={element.id} element={element} />
        ))}
      </Row>
  );
      }

};

export default ProductMainBody;
