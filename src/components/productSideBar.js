import React from 'react'
import { AppProvider, useProductContext } from "../context/ProductContext";
import "./style.css";


const ProductSideBar = ({CategoricalProduct,price,Rangefun}) => {
    let { product, Category } = useProductContext();
    console.log(product);
    let maxValue = Math.max(
      ...product.map((ele) => {
        return ele.price;
      })
    );
    


  return (
    <>
            <h2>Filter by Category</h2>
            <ul className="UnorderList">
              {Array.from(Category).map((element, index) => {
                return (
                  <li key={index} value="element" onClick={CategoricalProduct}>
                    {element}
                  </li>
                );
              })}
            </ul>
            <br />
            <br />
            <br />
            <br />
            <h2>Filter by Range</h2>
            <h2>{maxValue}</h2>
            <input type="range" min="0" max={maxValue} value={price} onChange={Rangefun} />
          </>
  )
}

export default ProductSideBar;
