import React from "react";
import Button from "./button.jsx";
import { Moon } from "lucide-react";
import InputChat from "./inputchat.jsx";
import Navigator from "./navigator.jsx";
import Signin from "./signin.jsx";
import toast, { Toaster } from 'react-hot-toast';
import "./Home.css";
const Home = () => {
  //new chat reload
  const reload = () => {
    alert("New Chat");
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="background-glow"></div>
      {/* Your Content/Components  */}

      <div className="sidebar">
        <Button name="New Chat" onClick={reload} />
        <Navigator />
      </div>
      <div className="chatbody">
        <div className="sign-in">
          <Signin />
        </div>
        <div className="Heading">Headings</div>

        <button className="theme-btn">
          <Moon />
        </button>
        {/* chat box */}
        <div className="input-send-field">
          <InputChat />
        </div>
      </div>
      <div><Toaster/></div>
    </div>
  );
};

export default Home;
