import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import "./signin.css"
const signin = () => {
    const handlesignin = ()=>
    {
       toast.success("success");
    }
  return (
    <div className='sign-in-container'>
      <button className='sign-in-btn'
      onClick={handlesignin}
      >sign in</button>
    </div>
  )
}

export default signin
