import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/Components/MediaQuery.css";

const App = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
