import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Header.css';

/* Header avec la navbar responsive qui passe en menu burger en format mobile et fonctionnel 
positionnement  lien active de la liste ul li  avec la navlink*/
const Header = () => {
    return (
        <header className="App-header">
                <nav className="navbar navbar-expand-lg py-2 px-5 navbar-dark bg-dark "aria-label="Navigation principale">
                    <Link className="navbar-brand text-uppercase fw-semibold" to="/">john doe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-uppercase">
                            <li className="nav-item mx-0 d-flex align-items-center">
                                <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item mx-0 d-flex align-items-center">
                                <NavLink to="/services" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item mx-0 d-flex align-items-center">
                                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item mx-0 d-flex align-items-center">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item mx-0 d-flex align-items-center">
                                <NavLink to="/mention" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                                    Mentions Légales
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
        </header>
    );
};

export default Header;
