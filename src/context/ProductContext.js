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

    return (<AppContext.Provider value={{...state}}>{children}</AppContext.Provider>);
};
 
 const useProductContext=() => {                //it is use as hooks in next component
    return useContext(AppContext);    // useRef in counter and productdetail,useReducer in index.js and productdetail,useCallBack in index.js,useMemo in usememo folder,
 }

export {AppProvider,useProductContext};