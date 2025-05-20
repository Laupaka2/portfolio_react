import React, { useEffect, useState } from "react";
// Import des composants Bootstrap nécessaires pour le modal et la mise en page
import { Modal, Button, Spinner, Image, Container, Row, Col } from "react-bootstrap";
// Import des icônes Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
// Import du fichier CSS personnalisé pour le modal
import "./ModalCustom.css";

export default function HomeModal() {
  // État local pour stocker les données utilisateur récupérées depuis l'API GitHub
  const [user, setUser] = useState(null);
  // État local pour gérer l'affichage du modal (visible ou non)
  const [show, setShow] = useState(false);

  // Hook useEffect pour lancer la récupération des données dès le montage du composant
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Appel à l'API GitHub pour récupérer les infos du user
        const response = await fetch("https://api.github.com/users/github-john-doe");
        const data = await response.json();
        // Mise à jour de l'état user avec les données reçues
        setUser(data);
      } catch (error) {
        // En cas d'erreur, affichage dans la console
        console.error("Erreur lors de la récupération des données:", error);
      }
    };
    fetchUser(); // Appel de la fonction asynchrone
  }, []); // [] : ce hook ne se lance qu'une seule fois, au montage

  // Fonction pour ouvrir le modal
  const handleOpen = () => setShow(true);
  // Fonction pour fermer le modal
  const handleClose = () => setShow(false);

  // Si les données utilisateur ne sont pas encore chargées, afficher un spinner de chargement
  if (!user) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement</span>
        </Spinner>
      </div>
    );
  }

  // Rendu principal du composant
  return (
    <Container className=" text-center">
      {/* Bouton pour ouvrir le modal */}
      <Button variant="danger" onClick={handleOpen}>
        En savoir plus
      </Button>

      {/* Modal Bootstrap */}
      <Modal
        show={show} // Contrôle de l'affichage via l'état show
        onHide={handleClose} // Fermeture au clic hors modal ou sur la croix
        centered // Centrage vertical du modal
        contentClassName="bg-dark text-white border border-secondary rounded" // Styles personnalisés pour le contenu
        dialogClassName="custom-modal-width" // Classe personnalisée pour la largeur
      >
        {/* En-tête du modal avec bouton de fermeture */}
        <Modal.Header
          closeButton
          closeVariant="white" // Bouton fermeture en blanc
          className="border-bottom border-secondary pb-2 mb-0"
        >
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>

        {/* Corps du modal */}
        <Modal.Body>
          <Row className="justify-content-center">
            <Col xs={12}>
              <Row className="align-items-start text-start">
                {/* Colonne pour l'image de profil */}
                <Col
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center mb-4 mb-md-0"
                >
                  <Image
                    src={user.avatar_url} // URL de l'avatar GitHub
                    alt="Avatar"
                    className="img-half-height-tablet" // Classe CSS personnalisée
                    fluid // Image responsive
                  />
                </Col>

                {/* Colonne pour les infos utilisateur */}
                <Col xs={12} md={6}>
                  {/* Nom + lien vers profil GitHub */}
                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-person"></i>{" "}
                    <a
                      href={user.html_url} // Lien vers profil GitHub
                      target="_blank" // Ouvre dans un nouvel onglet
                      rel="noopener noreferrer" // Sécurité pour ouverture lien externe
                      className="text-primary text-decoration-underline"
                    >
                      {user.name || user.login} {/* Affiche le nom ou le login si le nom est absent */}
                    </a>
                  </div>

                  {/* Localisation */}
                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-geo-alt"></i> {user.location || ""}
                  </div>

                  {/* Biographie */}
                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-card-text"></i> {user.bio || ""}
                  </div>

                  {/* Nombre de repositories publics */}
                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-box"></i> Repositories :{" "}
                    {user.public_repos}
                  </div>

                  {/* Nombre de followers */}
                  <div className="border-bottom border-secondary py-2">
                    <i className="bi bi-people"></i> Followers :{" "}
                    {user.followers}
                  </div>

                  {/* Nombre de personnes suivies */}
                  <div className="py-2">
                    <i className="bi bi-people"></i> Following :{" "}
                    {user.following}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>

        {/* Pied de page du modal avec bouton de fermeture */}
        <Modal.Footer className="justify-content-end pt-2 border-top border-secondary pb-2 mb-0">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
