import React, { useState,useEffect } from 'react'

function UseCounterEffect() {
    const [count ,setCount]=useState(0);
    const handelsubmit=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`dhmrhkl`;
    },[count])
  return (
    <> 
    <h1>UseCounterEffect</h1>
    <h5>
        my value{count}
    </h5>
    <button onClick={handelsubmit}>Click me</button>
    </>
  )
}

export default UseCounterEffect