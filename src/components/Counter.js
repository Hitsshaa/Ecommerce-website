import React, { useState,useRef,useEffect,useReducer} from "react";
import './style.css'
import {useCounterContext} from '../context/CounterContext'



export default function Counter() {

  console.log(useCounterContext())
    // const [count,setCount]=useState(0);
    // const [ren,setRen] = useState(0);
const ren = useRef(0);   // use to avoid render of page again and again
let {state,getProduct} = useCounterContext();




// console.log(ren); 

// console.log(state); 

  // const handleCount =(value) => {
  //  let counter = count +value;
  //   setCount(counter);
  // }

  useEffect(()=>{
  // setRen(ren+1)
ren.current = ren.current + 1;
  })


  return (
    <>
        <div className="card text-center">
        <p>No of time render{ren.current}</p>
  <div className="card-header">
    Featured
  </div>
  <div className="body">
    <h5 className="card-title">{state}</h5>
    <button className='btn btn-sm btn-danger' onClick={() =>getProduct("Increment")}>incre</button>
    <button className='btn btn-sm btn-danger' onClick={() => getProduct("Decrement")}>decre</button>
  </div>
</div>
    </>
  )
}



// const reducer = (state,action) => {
//   if (action.type=="increment") {
//     state = state +1
//     console.log(state,action)
//     return state
//   }
//   if (action.type=="decrement" && state>0) {
//     state = state - 1
//     console.log(state,action)
//     return state
//   }else{
//     return state
//   }
 
// }