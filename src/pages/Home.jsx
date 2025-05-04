
import React from "react";
import "./Home.css";
import HomeModal from "./HomeModal";

const Home = () => {
    return (
        <div className="hero">
            <div className="container-hero d-flex flex-column justify-content-center align-items-center">
                <div className="hero-content d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-white text-wrap-center"><strong>Bonjour, je suis John Doe</strong></h1>
                    <h2 className="text-white"><strong>Développeur web full stack</strong></h2> 
                    <HomeModal />
                </div> 
            </div>
            <div className="container col-md-8 my-4">
                <div className="card shadow p-3 mb-5 bg-body rounded border-0">
                    <div className="row g-0">
                        <div className=" col-md-6 px-4 pt-4">
                             <div className="card-body">
                                <h3 className="card-title">A propos</h3>
                                <img src="../../../images/john-doe-about.jpg" className="img-fluid  pt-4 mb-4 border-top border-4 border-primary" alt="John Doe about"/>
                           
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui reiciendis, excepturi aliquid repellendus delectus culpa maiores fugiat</p>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui reiciendis, excepturi aliquid repellendus delectus culpa maiores fugiat</p>
                                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi qui reiciendis, excepturi aliquid repellendus delectus culpa maiores fugiat</p>
                            </div>
                        </div>
                        <div className=" col-md-6 px-4 pt-4">
                            <div className="card-body">
                                <h3 className="card-title pb-2 border-bottom border-4 border-primary">Mes compétences</h3>
                                <div className="mb-2 pt-3">
                                   <h4 className="h6">html5 90%</h4>
                                    <div className="progress">
                                        <div className="progress" role="progressbar" aria-label="Danger example"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <h4 className="h6">css3 80%</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="info example"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <h4 className="h6">javascript 70%</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h4 className="h6">php 60%</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="h6">react 50%</h4>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="default example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-default" style={{width: '50%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
   
    )
}

export default Home;