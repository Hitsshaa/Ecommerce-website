import React,{useState,useCallback} from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import {useProductContext} from '../context/ProductContext'
import InnerIndex from './innerindex';

export default function Index() {
  console.log(useProductContext());
  let [count,setCount] = useState(0)
  let [array,setArray] = useState(["hi","by","shy"])

  // let {isError,product} = useProductContext();

  // if (isError) {
  //   return <p>Is error</p>
  // }
 
  // const UpdateArray= (()=> {
  //   setArray((prev)=>[...prev,"new"]);                                                  
  // })


  const UpdateArray= useCallback(()=> {
    setArray((pre)=>[...pre,"new"])
  },[array])

  const increment = (()=> {
    setCount(count+1)
  })

// console.log(product);
  return (
    <div>
        <InnerIndex array={array} UpdateArray={UpdateArray}/>  
        count:{count}
        <button onClick={increment}>+</button>
    </div>
    
  )
}
