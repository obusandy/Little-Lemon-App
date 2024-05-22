import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
