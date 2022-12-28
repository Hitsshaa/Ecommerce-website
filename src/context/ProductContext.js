 import {  createContext,useContext, useEffect, useReducer } from "react";
 import axios from "axios";
 import reducer,{initialState} from "../Reducers/ProductContextReducer";
  

const AppContext = createContext();


const AppProvider = ({children})=>{
    const api = "https://fakestoreapi.com/products";
    const [state,dispatch] = useReducer(reducer,initialState)

const getProduct = async (url) =>{
    dispatch({type:"SET_LOADING"})
   try {
     const res = await axios.get(url);
     const product = await res.data;
     dispatch({type:"MY_API_DATA",payload:product})
   } catch (error) {
    dispatch({type:"API_ERROR"})
   }
}
useEffect(()=>{
    getProduct(api)
    console.log("productContext")
},[])

const SearchFun = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    dispatch({type:"Search",payload:value})
}

const CategoricalProduct = (cate) => {
    // console.log(cate);
    // console.log(cate.target.value); 
    console.log(cate.target.innerHTML);
    let value = cate.target.innerHTML;
    dispatch({type:"CategoricalProduct",payload:value})
};

const Rangefun = (ele) => {
    // console.log(ele);
    let value = ele.target.value;
    // setPrice(value);
    console.log(value);
    dispatch({type:"Range",payload:value})
    // console.log(
    //   product.filter((ele) => {
    //     return ele.price < price && ele.category == category;
    //   })
    // );
    // setInfo(
    //   product.filter((ele) => {
    //     return ele.price <= price && ele.category == category;
    //   })
    // );
}



    return (<AppContext.Provider value={{...state,SearchFun,CategoricalProduct,Rangefun}}>{children}</AppContext.Provider>);
};
 
 const useProductContext=() => {                //it is use as hooks in next component
    return useContext(AppContext);    // useRef in counter and productdetail,useReducer in index.js and productdetail,useCallBack in index.js,useMemo in usememo folder,
 }

export {AppProvider,useProductContext};