import React from "react";
import './Contact.css';
const Contact = () => {
    return (
        <div className="container col-12 col-sm-12">
            <h1 className="fw-bold mt-5">Contact</h1>
            <p className="">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className=" sepa col-4 col-sm-2 border-bottom border-4 border-primary mb-5 pt-2 d-flex mx-auto"></div>
            <div className="card col-12 col-sm-9   d-flex mx-auto shadow p-4 mb-5 bg-body rounded border-0">
                <form action={""} className="row">
                    <div className="col-12 col-sm-6 d-flex flex-column">
                        <div className="card-body">
                            <div className="card-title border-bottom border-3 border-primary"><h2 className="fw-bold">Formulaire de conctact</h2></div>
                            <div className="texte-form mb-2 mt-4">
                                <label className="form-label" for="name"></label>
                                <input className="form-control" type="text" name="name" id="name" placeholder="Votre nom" required></input>
                            </div>
                            <div className="texte-form mb-2">
                                <label className="form-label" for="email"></label>
                                <input className="form-control" type="email" name="email" id="email" placeholder="Votre adresse email" required></input>
                            </div>
                            <div className="texte-form mb-2">
                                <label className="form-label" for="tel"></label>
                                <input className="form-control" type="tel" name="tel" id="tel" placeholder="Votre numéro de téléphone" maxlength="10" minlength="10" required></input>
                            </div>
                            <div className="texte-form mb-2">
                                <label className="form-label" for="sujet"></label>
                                <input className="form-control" type="text" name="sujet" id="sujet" placeholder="Sujet" required></input>
                            </div>
                            <div className="text-form mb-2">
                                <label className="form-label" for="name"></label>
                                <textarea className="form-control" type="text" name="message" id="message" placeholder="Votre message" cols={"30"} rows={"14"} required></textarea>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
                                <button className="btn btn-primary" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="card-body">
                            <div className="card-title border-bottom border-3 border-primary"><h2 className="fw-bold">Mes coordonnées</h2></div>
                            <address>
                                <h3 className="mt-5">John Doe</h3>
                                <p className="coord"><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
                                <p className="coord"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                                <p className="coord"><i class="bi bi-phone"></i> 10 20 30 40 50</p>
                                <p className="coord mb-3"><i class="bi bi-envelope-at"></i> jhon.doe@gmail.com</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621793!2d4.796403976480202!3d45.7786619710808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1744729950680!5m2!1sfr!2sfr" style={{ width:'100%', height:'450px', allowfullscreen:'', loading:'lazy', referrerpolicy:'no-referrer-when-downgrade'}}title="LaureDiebold"></iframe>
                            </address>
                        </div>
                    </div>   
                </form>
            </div>
        </div>
    )
}

export default Contact;