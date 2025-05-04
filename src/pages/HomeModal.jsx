import React, { useEffect, useState } from "react";
import {Modal, Button, Spinner, Image, Container, Row, Col} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ModalCustom.css"; //  Fichier CSS avec la classe personnalisée

export default function HomeModal() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users/github-john-doe");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };
    fetchUser();
  }, []);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  if (!user) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container className="mt-5 text-center">
      <Button variant="danger" onClick={handleOpen}>
        En savoir plus
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="bg-dark text-white border border-secondary rounded"
        dialogClassName="custom-modal-width"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="border-bottom border-secondary pb-2 mb-0"
        >
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="justify-content-center">
            <Col xs={12}>
              <Row className="align-items-start text-start">
                {/* IMAGE */}
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center mb-4 mb-md-0"
                >
                  <Image
                    src={user.avatar_url}
                    alt="Avatar"
                    className="img-half-height-tablet"
                    fluid
                  />
                </Col>

                {/* INFOS */}
                <Col xs={12} md={6}>
                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-person"></i>{" "}
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-decoration-underline"
                    >
                      {user.name || user.login}
                    </a>
                  </div>

                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-geo-alt"></i> {user.location || ""}
                  </div>

                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-card-text"></i> {user.bio || ""}
                  </div>

                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-box"></i> Repositories :{" "}
                    {user.public_repos}
                  </div>

                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-people"></i> Followers :{" "}
                    {user.followers}
                  </div>

                  <div className="py-2">
                    <i className="bi bi-people"></i> Following :{" "}
                    {user.following}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="justify-content-end pt-2 border-top border-secondary pb-2 mb-0">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
