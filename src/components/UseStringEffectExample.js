import React, { useState }  from 'react'

export const UseStringEffectExample = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const handelFirstName=(e)=>{
        setFirstName(e.target.value);
    }
    const handelLastName=(e)=>{
        setLastName(e.target.value);
    }
    const handelSubmit=()=>{
        alert(`FirstName`)
    }
  return (
    <>
         <h1>UseStringEffectExample</h1>
         <input type="text" placeholder="firstName" value={firstName} onChange={handelFirstName}/>
         <input type="text" placeholder="lastName" value={lastName} onChange={handelLastName}/>
         <button onClick={handelSubmit}>Submit</button>
    </>
   
  )
}
