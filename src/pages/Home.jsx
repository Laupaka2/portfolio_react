import React from "react";
// Import de Helmet pour gérer le head (titre, meta tags) de la page
import { Helmet } from "react-helmet";
import "./Home.css"; // Import du fichier CSS spécifique à ce composant
import HomeModal from "../components/HomeModal"; // Import d'un composant modal personnalisé

const Home = () => {
    return (
        <div className="hero">
            {/* Utilisation de Helmet pour modifier le titre et les meta tags de la page */}
            <Helmet>
                <title>Accueil | John Doe - Développeur Web Full Stack</title>
                <meta
                    name="description"
                    content="Bienvenue sur le portfolio de John Doe, développeur web full stack."
                />
                <meta
                    name="keywords"
                    content="John Doe, développeur web, full stack, React, JavaScript, PHP, CSS, HTML"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* Section principale avec un style héros et centrage vertical/horizontal */}
            <div className="container-hero d-flex flex-column justify-content-center align-items-center">
                <div className="hero-content d-flex flex-column justify-content-center align-items-center">
                    {/* Titre principal */}
                    <h1 className="titre-home text-white text-center pb-2">
                        <strong>Bonjour, je suis John Doe</strong>
                    </h1>
                    {/* Sous-titre */}
                    <h2 className="sous-titre text-white pb-2">
                        <strong>Développeur web full stack</strong>
                    </h2> 
                    {/* Intégration du composant modal */}
                    <HomeModal />
                </div> 
            </div>

            {/* Conteneur central avec contenu à propos et compétences */}
            <section className="container col-md-8 my-4">
                <div className="card shadow p-3 mb-5 bg-body rounded border-0">
                    <div className="row g-0">
                        {/* Colonne gauche : section "À propos" */}
                        <div className="col-md-6 px-4 pt-4">
                            <div className="card-body">
                                <h3 className="card-title">A propos</h3>
                                {/* Image descriptive */}
                                <img
                                    src="/images/john-doe-about.jpg"
                                    alt="John Doe about"
                                    className="img-fluid pt-4 mb-4 border-top border-4 border-primary"
                                />
                                {/* Plusieurs paragraphes de texte à propos */}
                                <p className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui reiciendis, excepturi aliquid repellendus delectus culpa maiores fugiat
                                </p>
                                <p className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui reiciendis, excepturi aliquid repellendus delectus culpa maiores fugiat
                                </p>
                                <p className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui reiciendis, excepturi aliquid repellendus delectus culpa maiores fugiat
                                </p>
                            </div>
                        </div>

                        {/* Colonne droite : section "Mes compétences" */}
                        <div className="col-md-6 px-4 pt-4">
                            <div className="card-body">
                                <h3 className="card-title pb-2 border-bottom border-4 border-primary">Mes compétences</h3>

                                {/* Compétences avec barre de progression */}
                                <div className="mb-2 pt-3">
                                    <h4 className="h6">html5 90%</h4>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-danger progress-html"
                                            role="progressbar"
                                            aria-valuenow="90"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <span className="visually-hidden">90%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <h4 className="h6">css3 80%</h4>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-info progress-css"
                                            role="progressbar"
                                            aria-valuenow="80"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <span className="visually-hidden">80%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <h4 className="h6">javascript 70%</h4>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-warning progress-js"
                                            role="progressbar"
                                            aria-valuenow="70"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <span className="visually-hidden">70%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <h4 className="h6">php 60%</h4>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-success progress-php"
                                            role="progressbar"
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <span className="visually-hidden">60%</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="h6">react 50%</h4>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-default progress-react"
                                            role="progressbar"
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            <span className="visually-hidden">50%</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div> 
    );
}

export default Home;
