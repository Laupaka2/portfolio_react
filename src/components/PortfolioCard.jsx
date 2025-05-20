// components/PortfolioCard.jsx

import React from 'react';
import { Card } from 'react-bootstrap';
import './PortfolioCard.css';

// Déclaration du composant fonctionnel PortfolioCard
// Il reçoit des props : image, title, description, buttonText, tech
const PortfolioCard = ({ image, title, description, buttonText, tech }) => {
    return (
      //* Utilisation du composant Card  de React-Bootstrap avec des classes Bootstrap pour le style
      <Card className="portfolio-card mb-4 text-center d-flex flex-column">
        
        {/* Image du haut de la carte */}
        <Card.Img variant="top" src={image} alt={title} className="img-fluid" />
        
        {/* Corps de la carte contenant le texte et le bouton ect... */}
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          
          <div>
            {/* Titre du projet affiché en grand et en gras */}
            <Card.Title className="portfolio-title-card pt-3 fw-bold fs-3">
              {title}
            </Card.Title>
  
            {/* Description du projet */}
            <Card.Text className="portfolio-description">
              {description}
            </Card.Text>
  
            {/* Bouton qui redirige vers la page portfolio */}
            <a href="/portfolio" className="portfolio-button btn btn-primary">
                {buttonText}
            </a>

          </div>
  
          {/* Affichage des technologies utilisées, sous forme de badges */}
          <Card.Text className="portfolio-tech mt-3">
            {
              // On découpe la chaîne de caractères "tech" par virgules et on affiche chaque technologie dans un badge
              tech.split(',').map((item, index) => (
                <span key={index} className="tech-badge me-2 mb-1">
                  {item.trim()} {/* trim() supprime les espaces autour */}
                </span>
              ))
            }
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  
  export default PortfolioCard;
  
