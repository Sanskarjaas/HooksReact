import React, { useState } from 'react'

function UseStateExample(){

const [count,setCount]=useState(0);

const increment =()=>{
  setCount(count+1);
}
  return (
    <div>
        <h1>USE State USECASE</h1>
        <h5>Times i am Clicked {count}</h5>
        <button onClick={increment}>Clickme</button>

    </div>
    

  );
}

export default UseStateExample