import "./App.css";
import Button from "./button.jsx";
import { Moon } from "lucide-react";
import InputChat from "./inputchat.jsx";
function App() {
  return (
    <div className="container">
      <div className="background-glow"></div>
      {/* Your Content/Components  */}

      <div className="sidebar">
        <Button name="New Chat" />
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
