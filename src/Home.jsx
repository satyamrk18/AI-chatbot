import React from "react";
import Button from "./button.jsx";
import { Moon } from "lucide-react";
import InputChat from "./inputchat.jsx";
import Navigator from "./navigator.jsx";
import Signin from "./signin.jsx";
import infinity_logo from "./assets/AI_chatbot_logo.png"
import toast, { Toaster } from "react-hot-toast";
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
        <button className="theme-btn">
          <Moon />
        </button>
        {/* chat box */}
        <div className="input-send-field">
          <InputChat />
        </div>
        {/* chat and answer */}
        <div className="api-output">
          <img src={infinity_logo}></img>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, minima
          quod nisi, deserunt temporibus sit eaque porro, maxime dolore animi
          impedit sint modi soluta iure excepturi similique consequatur
          doloribus quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. A reprehenderit sunt inventore repellendus eveniet. Assumenda
          eaque consequatur accusantium ex natus, consequuntur, quos dignissimos
          repudiandae accusamus deleniti praesentium dolores illo alias. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Excepturi maxime
          vel saepe omnis ullam odit, non aut neque nemo nobis perferendis atque
          voluptates repellat animi illo. Quia fugiat nihil impedit?
        </div>
        <div className="user-chat">
          <img src={infinity_logo}></img>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, minima
          quod nisi, deserunt temporibus sit eaque porro, maxime dolore animi
          impedit sint modi soluta iure excepturi similique consequatur
          doloribus quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Home;
