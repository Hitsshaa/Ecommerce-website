import { createContext, useContext, useReducer } from "react";
import CountReducer from "../Reducers/CounterReducer";

const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  let initialState = 0;

  const [state, dispatch] = useReducer(CountReducer, initialState);

  const getProduct = (obj) => {
    console.log(obj);
    if (obj === "Increment") {
      dispatch({ type: "Increment" });
    }
    if (obj === "Decrement") {
      dispatch({ type: "Decrement" });
    }
  };

  return (
    <CounterContext.Provider value={{ state, getProduct }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => {
  return useContext(CounterContext);
};

export { CounterProvider, useCounterContext };
