import React from 'react'
import "./style.css";
import Button from 'react-bootstrap/Button';


const ProductHeader = ({SearchFun,getapi}) => {
  return (
   
    <>
    
      <input
        type="Search"
        placeholder="Search"
        onChange={SearchFun}
      />
      <Button variant="primary"onClick={getapi} className="SearchButton">Reset</Button>
    </>
  )
}

export default ProductHeader;
