import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
    return (
        <main className="banner">
            <img src={"../../../images/banner.jpg"} className="img-fluid" alt="banner" />
            <h1 className="fs-2 mt-5 mb-1 "><strong>Mon offre de services</strong></h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <div className="separation col-4 col-sm-3 border-bottom border-4 border-primary mb-5 pt-2 d-flex mx-auto"></div>

            <Container className="carte-service pb-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={3}  className="mb-4 d-flex">
                        <div className="card service-card w-100 p-3">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: '80px' }}>
                                    <i className="bi bi-brush fs-1 text-primary"></i>
                                </div>
                                <h2 className="card-title fs-5 fw-bold">UX Design</h2>
                                <p className="card-text text-center">
                                L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.)
                                 en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={3}  className="mb-4 d-flex">
                        <div className="card  service-card w-100 p-3">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: '80px' }}>
                                    <i className="bi bi-code-slash fs-1 text-primary"></i>
                                </div>
                                <h2 className="card-title fs-5 fw-bold">Développement web</h2>
                                <p className="card-text text-center">
                                Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation
                                (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={3} className="mb-4 d-flex">
                        <div className="card service-card w-100 p-3">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="d-flex align-items-center justify-content-center mb-3" style={{ height: '80px' }}>
                                    <i className="bi bi-search fs-1 text-primary"></i>
                                </div>
                                <h2 className="card-title fs-5 fw-bold">Référencement</h2>
                                <p className="card-text text-center">
                                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats 
                                des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Services;
