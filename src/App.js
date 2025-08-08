import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Residencies from "./pages/Residencies/Residencies";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Residencies />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
