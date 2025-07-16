import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserPen, MailPlus } from "lucide-react";
import { useState, useEffect } from "react";
import "./signin.css";



const signin = () => {
    const [name,setName] = useState("");  
const[email,setEmail] = useState("")  
  const handlesignin = () => {
    toast.custom(
      (t) => (
        <div className="userInputs">
          <UserPen />
          <input type="text" placeholder="Enter Name" name="username"  onChange={(e)=>{setName(e.target.value)}}/>
          <MailPlus />
          <input type="email" placeholder="Enter Email" name="email"  onChange={(e)=>{setEmail(e.target.value)}} />
          <div className="data-btn">
            <button className="save" onClick={saveData}>Save</button>
            <button className="delete">Delete</button>
          </div>
          <div
            className="close"
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            X
          </div>
        </div>
      ),
      { duration: Infinity }
    );
    const saveData = () => {
        alert("data added");
    }

  };
const isSignin = "sign in"
  return (
    <div className="sign-in-container">
      <button className="sign-in-btn" onClick={handlesignin}>
   sign In
      </button>
    </div>
  );
};

export default signin;
