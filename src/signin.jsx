import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./signin.css";
const signin = () => {
    
  const handlesignin = () => {
    let customToastId = toast.custom(
      (t) => (
        <div className="userInputs">
          <input type="text" placeholder="Enter Name" name="username" />
          <input type="email" placeholder="Enter Email" name="email" />
          <div className="data-btn">
            <button className="save">Save</button>
            <button className="delete">Delete</button>
          </div>
          <div className="close" onClick={()=>{toast.dismiss(t.id)}}>
            X
          </div>
        </div>
      ),
      { duration: Infinity }
    );

  };
  
  return (
    <div className="sign-in-container">
      <button className="sign-in-btn" onClick={handlesignin}>
        sign in
      </button>
    </div>
  );
};

export default signin;
