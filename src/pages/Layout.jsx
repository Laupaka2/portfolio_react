import React from "react";
import Header from "../component/Header";
import "../component/header.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="Layout">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        
    )
}

export default Layout;