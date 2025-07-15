import "./App.css";
import Button from "./button.jsx";
function App() {
  return (
    <div className="container">
      <div className="background-glow"></div>
      {/* Your Content/Components  */}

      <div className="sidebar">
        <Button name="New Chat" className="btn"/>
        <Button name="History" />
      </div>
      <div className="chatbody"></div>
    </div>
  );
}

export default App;
