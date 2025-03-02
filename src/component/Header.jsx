import React from "react";
import { NavLink, Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="App-header">
            <div>
                <nav class="navbar navbar-expand-lg py-2 px-5 navbar-dark bg-dark ">
                    <Link class="navbar-brand text-uppercase font-weight-600 " to="/">john doe</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto text-uppercase">
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li class="nav-item p-2">Home</li>
                        </NavLink>
                        <NavLink
                            to="services"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li class="nav-item p-2">Services</li>
                        </NavLink>
                        <NavLink
                            to="portfolio"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li class="nav-item p-2">Portfolio</li>
                        </NavLink>
                        <NavLink
                            to="contact"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li class="nav-item p-2">Contact</li>
                        </NavLink>
                        <NavLink
                            to="mention"
                            className={({ isActive }) => {
                              return isActive ? "active" : "";
                            }}
                        >
                            <li class="nav-item p-2">Mentions Légales</li>
                        </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;