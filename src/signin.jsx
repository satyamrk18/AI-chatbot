import React, { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserPen, MailPlus } from "lucide-react";
import "./signin.css";

const SignIn = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const localdata = localStorage.getItem("UserData");
    if (localdata) {
      const parsedata = JSON.parse(localdata);
      setUserData({
        name: parsedata.name || "",
        email: parsedata.email || "",
      });
    }
  }, []);

  const handleSignIn = () => {
    toast.custom(
      (t) => (
        <div className="userInputs">
          <UserPen />
          <input type="text" placeholder="Enter Name" ref={nameRef} defaultValue={userData.name} />
          <MailPlus />
          <input type="email" placeholder="Enter Email" ref={emailRef} defaultValue={userData.email} />
          <div className="data-btn">
            <button
              className="save"
              onClick={() => {
                const name = nameRef.current.value.trim();
                const email = emailRef.current.value.trim();

                if (!name) {
                  alert("Please enter a name");
                  return;
                }
                if (!email) {
                  alert("Please enter an email");
                  return;
                }

                const newUser = { name, email };
                setUserData(newUser);
                localStorage.setItem("UserData", JSON.stringify(newUser));
                toast.dismiss(t.id);
              }}
            >
              Save
            </button>
            <button
              className="delete"
              onClick={() => {
                localStorage.removeItem("UserData");
                setUserData({ name: "", email: "" });
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
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
  };

  const isSignin = "sign in";
  return (
    <div className="sign-in-container">
      <Toaster />
      <button className="sign-in-btn" onClick={handleSignIn}>
        {userData.name !== "" ? userData.name : isSignin}
      </button>
    </div>
  );
};

export default SignIn;
