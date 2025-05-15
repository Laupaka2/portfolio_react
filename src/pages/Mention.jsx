import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Mention = () => {
  return (
    <main aria-label="Mentions légales">
      <Container className="my-5">
        <Helmet>
          <meta name="robots" content="noindex" />
          <title>Mentions Légales - John Doe</title>
        </Helmet>

        <header className="text-center mb-4">
          <h1 className="fw-bold">Mentions légales</h1>
          <div className="col-4 col-sm-4 border-bottom border-5 border-primary mb-5 pt-2 d-flex mx-auto"></div>
        </header>

        <section>
          <Accordion defaultActiveKey="0" flush className="border rounded shadow-sm">

            {/* Éditeur du site */}
            <Accordion.Item
              eventKey="0"
              as="section"
              role="region"
              aria-labelledby="heading-editeur"
            >
              <Accordion.Header className="fs-4 fw-bold">
                <span id="heading-editeur" className="fs-6 m-0">Éditeur du site</span>
              </Accordion.Header>
              <Accordion.Body className="text-start">
                <h3 className="h5">John Doe</h3>
                <address className="text-start fs-6">
                  <i className="bi bi-map me-2"></i>40 rue Laure Diebold<br />
                  <i className="bi bi-geo-alt me-2"></i>69009 Lyon, France<br />
                  <i className="bi bi-phone me-2"></i>10 20 30 40 50<br />
                  <i className="bi bi-envelope-at me-2"></i>john.doe@gmail.com
                </address>
              </Accordion.Body>
            </Accordion.Item>

            {/* Hébergeur */}
            <Accordion.Item
              eventKey="1"
              as="section"
              role="region"
              aria-labelledby="heading-hebergeur"
            >
              <Accordion.Header className="fs-4 fw-bold">
                <span id="heading-hebergeur" className="fs-6 m-0">Hébergeur</span>
              </Accordion.Header>
              <Accordion.Body className="text-start fs-6">
                <h3 className="h5 fw-bold">alwaysdata</h3>
                <address className="text-start fs-6">
                  91 Rue du Faubourg Saint-Honoré, 75008 Paris<br />
                  <i className="bi bi-globe me-2"></i>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                    www.alwaysdata.com
                  </a>
                </address>
              </Accordion.Body>
            </Accordion.Item>

            {/* Crédits */}
            <Accordion.Item
              eventKey="2"
              as="section"
              role="region"
              aria-labelledby="heading-credits"
            >
              <Accordion.Header className="fs-4 fw-bold">
                <span id="heading-credits" className="fs-6 m-0">Crédits</span>
              </Accordion.Header>
              <Accordion.Body className="text-start fs-6">
                <h3 className="fs-5 fw-bold">Crédits</h3>
                <p className="text-start fs-6">
                  Ce site a été réalisé par John Doe, étudiant au{" "}
                  <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">
                    Centre Européen de formation
                  </a>.
                </p>
                <p className="text-start fs-6">
                  <em>
                    Les images utilisées sur ce site sont libres de droits et ont été obtenues sur{" "}
                    <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">
                      Pixabay
                    </a>.
                  </em>
                </p>
                <p className="text-start fs-6">
                  <em>
                    La favicon de ce site a été fournie par{" "}
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Freepik - Flaticon
                    </a>.
                  </em>
                </p>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </section>
      </Container>
    </main>
  );
};

export default Mention;
