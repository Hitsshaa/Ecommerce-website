import React from "react";
import { AppProvider, useProductContext } from "../context/ProductContext";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProductSideBar = ({ CategoricalProduct, price, Rangefun }) => {
  let { product, Category, Value } = useProductContext();
  console.log(product);
  let maxValue = Math.max(
    ...product.map((ele) => {
      return ele.price;
    })
  );

  return (
    <>
      <h2>Filter by Category</h2>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Dropdown Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Array.from(Category).map((element, index) => {
            return (
              // <li key={index} value="element" onClick={(e)=>CategoricalProduct(e)}>
              //   {element}
              // </li>
              <Dropdown.Item
                key={index}
                value="element"
                onClick={(e) => CategoricalProduct(e)}
              >
                {element}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <br />
      <br />
      <h2 className="Range">Filter by Range</h2>
      <h2>{Value}</h2>
      <input
        className="RangeInput"
        type="range"
        min="0"
        max={maxValue}
        value={Value}
        onChange={(e) => Rangefun(e)}
      />
    </>
  );
};

export default ProductSideBar;
