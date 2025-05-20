// pages/Portfolio.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from '../components/PortfolioCard';
import projects from '../data/Projects';
import { Helmet } from 'react-helmet';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - John Doe | Développeur Web</title>
        <meta
          name="description"
          content="Découvrez le portfolio de John Doe, développeur web full-stack : sites vitrines, applications React, intégration responsive et plus."
        />
      </Helmet>

      {/* Bannière visuelle */}
      <img src={"/images/banner.jpg"} className="img-fluid" alt="Bannière portfolio de John Doe, développeur web full-stack" />

      {/* Section principale du portfolio */}
      <Container as="section" className="portfolio-container my-5">
        <h2 className="portfolio-title text-center">Portfolio</h2>
        <p className="portfolio-subtitle text-center">
          Voici quelques-unes de mes réalisations.
        </p>
        <div className="portfolio-underline mx-auto mb-5"></div>
        

        <Row className="portfolio-grid gx-4 gy-1 justify-content-center">
          {projects.map((project, idx) => (
            <Col md={4} sm={6} xs={12} lg={4} key={idx}>
              <PortfolioCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
