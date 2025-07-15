import "./App.css";
import Button from "./button.jsx";
import { Moon } from "lucide-react";
import InputChat from "./inputchat.jsx";
function App() {

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
        <Button name="New Chat"  onClick={reload}/>
        <Button name="History" />
      </div>
      <div className="chatbody">
        <button className="theme-btn">
          <Moon />
        </button>
        {/* chat box */}
       <div className="input-send-field"><InputChat /></div>
      </div>
    </div>
  );
}

export default App;
