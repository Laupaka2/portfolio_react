import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Mention from "./pages/Mention";

function App() {
    return (
      <div className="App">

            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/portfolio" element={<Portfolio/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/mention" element={<Mention/>}></Route>
              </Route> 
            </Routes>
      </div>
    );
}

export default App;