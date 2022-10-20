// React
import React from "react";
// React
// CSS
import "./App.css";
// CSS
// Modules And Components
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components";
import Home from "./Pages/Home/Home";

// Modules And Components
const App = () => {
  return (
    <div
      className="
    2xl:px-36 pt-9 w-screen h-screen
    box-border
    all "
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
