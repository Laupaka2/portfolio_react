import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container className="text-center">
        <Row className="justify-content-center text-start mt-4">

          {/* Colonne 1 - Contact */}
          <Col xs={12} md={4} className="mb-3">
            <h2 className=" titre-col fs-6 text-uppercase fw-bold">John Doe</h2>
            <address>
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              <a href="tel:+331020304050" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer nofollow">10 20 30 40 50</a><br />
              <a href="mailto:john.doe@gmail.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer nofollow">john.doe@gmail.com</a>
            </address>
            <div className="mt-2">
              <a href="https://github.com/github-john-doe" className="me-2 social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer nofollow">
                <i className="bi bi-github fs-3 opacity-50" title="Icône GitHub"></i>
              </a>
              <a href="https://twitter.com/john-doe" className="me-2 social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer nofollow">
                <i className="bi bi-twitter fs-3 opacity-50" title="Icône Twitter"></i>
              </a>
              <a href="https://linkedin.com/in/john-doe" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer nofollow">
                <i className="bi bi-linkedin fs-3 opacity-50" title="Icône LinkedIn"></i>
              </a>
            </div>
          </Col>

          {/* Colonne 2 - Liens utiles */}
          <Col xs={12} md={4} className="mb-3">
            <h2 className="fs-6 text-uppercase fw-bold">Liens utiles</h2>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className="text-white text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/mentions" className="text-white text-decoration-none">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 - Réalisations */}
          <Col xs={12} md={4} className="mb-3">
            <h2 className="fs-6 text-uppercase fw-bold">Mes dernières réalisations</h2>
            <ul className="list-unstyled footer-links">
              <li><a href="/portfolio" className="text-white text-decoration-none">Fresh Food</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Restaurant Akira</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Espace bien-être</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">SEO</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Création d'une API</a></li>
              <li><a href="/portfolio" className="text-white text-decoration-none">Maquette d'un site</a></li>
            </ul>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
