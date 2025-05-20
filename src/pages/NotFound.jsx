import React from 'react';
import { Helmet } from 'react-helmet';
import './NotFound.css';

// Déclaration du composant NotFound
const NotFound = () => {
  return (
    <div>
      {/* Helmet permet de modifier dynamiquement le contenu de l'en-tête HTML */}
      <Helmet>
        {/* Titre de l’onglet du navigateur */}
        <title>404 - Page non trouvée | John Doe</title>

        {/* Description de la page pour le SEO (même si la page est exclue de l'indexation) */}
        <meta
          name="description"
          content="La page que vous cherchez n'existe pas sur le site de John Doe, développeur web à Lyon."
        />

        {/* Empêche l’indexation de la page par les moteurs de recherche et le suivi des lien */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Section principale du contenu */}
      <div
        id="notfound" // ID utilisé pour cibler avec du CSS
        className="d-flex flex-column justify-content-center align-items-center text-center" // Utilise Bootstrap pour centrer le contenu verticalement et horizontalement
        role="main" // Role indiquant que cette div contient le contenu principal
        aria-labelledby="title404" // Référence au titre pour les lecteurs d'écran
      >
        {/* Titre principal "404" avec grande taille et gras */}
        <h1 id="title404" className="fw-bold display-1 mb-4">
          404
        </h1>

        {/* Sous-titre */}
        <h2 className="fw-bold mb-3">Page non trouvée</h2>

        {/* Message explicatif */}
        <p className="mb-4">
          Oups, la page que vous recherchez n’existe pas ou a été déplacée.
        </p>

        {/* Bouton de retour à l’accueil */}
        <a href="/" className="btn btn-primary">
          Retour à l’accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
