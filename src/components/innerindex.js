import React from 'react'

 const InnerIndex=({array,UpdateArray}) =>{
    console.log("i am render",array)
  return (<>
  
    <p>I am Index</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis voluptatibus omnis quia id ipsa soluta dolore obcaecati laudantium vero ut debitis voluptas minima facilis, nam eum corrupti repellat ipsam temporibus!</p>
         
         <button onClick={UpdateArray}>UpdateArray</button> <br/>
         </>
  )
}
export default React.memo(InnerIndex);