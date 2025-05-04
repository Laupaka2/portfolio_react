import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Mention from "./pages/Mention";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import UserModal from "./pages/HomeModal";

function App() {

    return (
      <div className="App">
        <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/mention" element={<Mention/>} /> 
            </Routes>   
        <Footer />
      </div>
    );
}
export default App;