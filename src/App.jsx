import React from "react";
import { BrowserRouter, Routes,Route } from "react-router";
import Home from "./Home.jsx";
import History from "./history.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
