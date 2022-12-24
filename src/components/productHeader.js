import React from 'react'
import "./style.css";


const ProductHeader = ({SearchFun,getapi}) => {
  return (
   
    <>
      <input
        type="search"
        placeholder="type for Search"
        onChange={SearchFun}
      />
      <button onClick={getapi} className="SearchButton">Reset</button>
    </>
  )
}

export default ProductHeader;
