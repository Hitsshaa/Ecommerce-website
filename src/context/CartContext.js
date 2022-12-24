import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer, { initialState } from "../Reducers/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddCart = (product) => {
    console.log(product);
    
    dispatch({ type: "ADD_TO_CART", payload: product }); 
  };

  const DeleteCartItem = (item) => {
    dispatch({ type: "DELETE_TO_CART", payload: item }); 

  };
  const ClearCart = () => {
    dispatch({ type: "ClearCart" }); 

  };
  const DecrementCount = (element) => {
    console.log("hi")
    dispatch({ type: "DecrementCount" , payload: element }); 

  };
  const IncrementCount = (element) => {
    console.log("hi")
    dispatch({ type: "IncrementCount", payload: element  }); 

  };

  return (
    <CartContext.Provider value={{ ...state, AddCart,DeleteCartItem,ClearCart,DecrementCount,IncrementCount }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
