import React from "react";
import { Helmet } from "react-helmet";
import './Contact.css';

// Composant fonctionnel Contact
const Contact = () => {
    return (
        <div className="container col-12 col-sm-12"> {/* Conteneur principal avec layout responsive */}
        
            {/* SEO avec react-helmet */}
            <Helmet>
                <title>Contact | John Doe - Développeur Web</title>
                <meta
                    name="description"
                    content="Contactez John Doe, développeur web, pour vos projets de développement web."
                />
                <meta
                    name="keywords"
                    content="Contact, Développeur Web, John Doe, React, HTML, CSS, Centre Européen de Formation"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {/* Titre principal */}
            <h1 className="fw-bold mt-5">Contact</h1>
            <p>
                Pour me contacter en vue d'un entretien ou d'une future collaboration,
                merci de remplir le formulaire de contact.
            </p>

            {/* Séparation */}
            <div className="col-4 col-sm-2 border-bottom border-4 border-primary mb-5 pt-2 d-flex mx-auto"></div>

            {/* Section contenant le formulaire et les coordonnées */}
            <section className="card col-12 col-sm-9 d-flex mx-auto shadow p-4 mb-5 bg-body rounded border-0">
                <form
                    className="row"
                    aria-label="Formulaire de contact"
                    action="#"
                    method="post"
                >
                    {/* Colonne gauche : formulaire */}
                    <div className="col-12 col-sm-6 d-flex flex-column">
                        <div className="card-body">
                            <div className="card-title border-bottom border-3 border-primary">
                                <h2 className="fw-bold">Formulaire de contact</h2>
                            </div>

                            {/* Champ nom */}
                            <div className="texte-form mb-2 mt-4">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Votre nom"
                                    aria-label="Nom"
                                    required
                                />
                            </div>

                            {/* Champ email */}
                            <div className="texte-form mb-2">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Votre adresse email"
                                    aria-label="Email"
                                    required
                                />
                            </div>

                            {/* Champ téléphone */}
                            <div className="texte-form mb-2">
                                <input
                                    className="form-control"
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Votre numéro de téléphone"
                                    maxLength="10"
                                    minLength="10"
                                    aria-label="Téléphone"
                                    required
                                />
                            </div>

                            {/* Champ sujet */}
                            <div className="texte-form mb-2">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="sujet"
                                    id="sujet"
                                    placeholder="Sujet"
                                    aria-label="Sujet"
                                    required
                                />
                            </div>

                            {/* Champ message (textarea) */}
                            <div className="text-form mb-2">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    placeholder="Votre message"
                                    cols="30"
                                    rows="14"
                                    aria-label="Message"
                                    required
                                ></textarea>
                            </div>

                            {/* Bouton d'envoi du formulaire */}
                            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
                                <button className="btn btn-primary" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite : coordonnées de contact */}
                    <div className="col-12 col-sm-6">
                        <div className="card-body">
                            <div className="card-title border-bottom border-3 border-primary">
                                <h2 className="fw-bold">Mes coordonnées</h2>
                            </div>
                            <address>
                                {/* Nom */}
                                <h3 className="mt-4 fs-5">John Doe</h3>

                                {/* Adresse postale */}
                                <p className="coord">
                                    <i className="bi bi-map" title="représente une carte"></i> 40 rue Laure Diebold
                                </p>

                                {/* Ville */}
                                <p className="coord">
                                    <i className="bi bi-geo-alt" title="représente la localisation"></i> 69009 Lyon, France
                                </p>

                                {/* Téléphone */}
                                <p className="coord">
                                    <i className="bi bi-phone" title="représente un téléphone"></i> 10 20 30 40 50
                                </p>

                                {/* Email */}
                                <p className="coord mb-3">
                                    <i className="bi bi-envelope-at" title="représente une enveloppe pour l'email"></i> john.doe@gmail.com
                                </p>

                                {/* Carte Google Maps intégrée */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621793!2d4.796403976480202!3d45.7786619710808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1744729950680!5m2!1sfr!2sfr"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation de John Doe à Lyon"
                                ></iframe>
                            </address>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
