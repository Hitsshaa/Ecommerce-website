import React, { useEffect, useState } from "react";
import "./style.css";
import {  useProductContext } from "../context/ProductContext";
import ProductHeader from "./productHeader";
import ProductSideBar from "./productSideBar";
import ProductMainBody from "./productMainBody";

const Product = () => {
  const [info, setInfo] = useState([]);
  const [category,setCategory] = useState("All");

  let { product, Category,Title } = useProductContext();
  console.log(product);
  let maxValue = Math.max(
    ...product.map((ele) => {
      return ele.price;
    })
  );
  // let price = 0;
  const [price, setPrice] = useState(maxValue);
  console.log(maxValue);

 

  const getapi = async () => {
    // const res = await fetch("https://fakestoreapi.com/products");
    // const data = await res.json();
    setInfo(product);
  };

  useEffect(() => {
    getapi();
    console.log("i am useeffect");
  }, []);

  useEffect(() => {
    console.log("i am useeffect2");
  }, []);

  useEffect(() => {
    setCategory(category);
  },[category])

  const CategoricalProduct = (cate) => {
    console.log(cate);
    console.log(cate.target.value); 
    console.log(cate.target.innerHTML);

    // console.log(
    //   product.filter((ele) => {
    //     return ele.category === cate.target.innerHTML;
    //   })
    // );
    setCategory(cate.target.innerHTML);
    if (cate.target.innerHTML == "All") {
      console.log("hi", setInfo(product));
      setInfo(product);
    } else {
      setInfo(
        product.filter((ele) => {
          return ele.category === cate.target.innerHTML;
        })
      );
    }
  };

  const Rangefun = (ele) => {
    console.log(ele);
    let value = ele.target.value;
    setPrice(value);
    console.log(value);
    console.log(
      product.filter((ele) => {
        return ele.price < price && ele.category == category;
      })
    );
    setInfo(
      product.filter((ele) => {
        return ele.price <= price && ele.category == category;
      })
    );
  };

  const SearchFun = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    let array = [];
    let categoryList = Array.from(Category);
    let TitleList = Array.from(Title)
    console.log(categoryList);
    var newValue = new RegExp(value, "i");
    for (let i = 0; i < categoryList.length; i++) {
      if (newValue.test(categoryList[i])) {
        array.push(categoryList[i]);
      }
    }
    for (let i = 0; i < TitleList.length; i++) {
      if (newValue.test(TitleList[i])) {
        array.push(TitleList[i]);
      }
    }
    console.log(array);
    // console.log(
    //   product.filter((ele) => {
    //     return array.includes(ele.category) || array.includes(ele.title);
    //   })
    // );
    setInfo(
      product.filter((ele) => {
        return array.includes(ele.category) || array.includes(ele.title);
      })
    );
  };

  return (
    <>
      <div className="MainContainer">

        <div className="headContainer">
          <ProductHeader SearchFun={SearchFun} getapi={getapi} />
        </div>

        <div className="MidContainer">

          <div className="Category">
            <ProductSideBar
              CategoricalProduct={CategoricalProduct}
              price={price}
              Rangefun={Rangefun}
            />
          </div>

          <div className="MainBody">
            <ProductMainBody info={info} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;
// context api, redux,thung midleware,
