import React from "react";
import { NavLink, Link} from "react-router-dom";
import './Header.css';

/* Header avec la navbar responsive qui passe en menu burger en format mobile et fonctionnel 
positionnement  lien active de la liste ul li  avec la navlink*/
const Header = () => {
    return (
        <header className="App-header">
            <div>
                <nav className="navbar navbar-expand-lg py-2 px-5 navbar-dark bg-dark ">
                    <Link className="navbar-brand text-uppercase font-weight-600 " to="/">john doe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-uppercase">
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li className="nav-item p-2">Home</li>
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li className="nav-item p-2">Services</li>
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li className="nav-item p-2">Portfolio</li>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li className="nav-item p-2">Contact</li>
                        </NavLink>
                        <NavLink
                            to="/mention"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li className="nav-item p-2">Mentions Légales</li>
                        </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;