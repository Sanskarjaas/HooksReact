import React, {useState} from 'react'

export const UseStringStateExample = () => {
    const [firstname,setFirstName] =useState('');
    const [lastname,setLastName]=useState('');
    const handlefirstName=(e)=>{
        setFirstName(e.target.value);
    }
    const handlelastName=(e)=>{
        setLastName(e.target.value);
    }
    const handelSubmit=()=>{
        alert(`Full Name: ${firstname} ${lastname}`)
    }
  return (
    <>
    <h1 >USE State Example for string</h1>
    <input type="text" placeholder="First Name" value={firstname} onChange={handlefirstName}/>
    <input type="text" placeholder="Last Name" value={lastname}onChange={handlelastName}/>
    <button onClick={handelSubmit}> submit me</button>
    </>
  )
}
