import React from 'react';
import './Portfolio.css'
import Navigation from '../../../src/Components/Navigation/Navigation'
import rider from '../../Images/Capture-1.PNG'
import fixoriya from '../../Images/Capture-2.PNG'
import leagpedia from '../../Images/Capture-3.PNG'
import shoap from '../../Images/Capture-4.PNG'
import player from '../../Images/Capture-5.PNG'


const Portfolio = () => {
    return (
        <div className="projects background">
            <div>
                <Navigation></Navigation>
            </div>
            <div className="text-center">
            <h1>Leteast Projects</h1>
            </div>
            <div className="row m-auto">
                <div class="card col-md-3 m-5" style={{width: "14rem"}}>
                    <img src={`${rider}`} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/Porgramming-Hero-web-course/react-auth-Shongkor" class="btn btn-primary ml-5 mr-5"><i class="fab fa-github-square"></i></a>
                        <a href="https://unique-riders-eb520.web.app/" class="btn btn-primary"><i class="fad fa-eye"></i></a>
                    </div>
                </div>
                <div class="card col-md-3 m-5" style={{width: "14rem"}}>
                    <img src={`${fixoriya}`} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/Porgramming-Hero-web-course/react-auth-Shongkor" class="btn btn-primary ml-5 mr-5"><i class="fab fa-github-square"></i></a>
                        <a href="https://shop-wallet.web.app/" class="btn btn-primary"><i class="fad fa-eye"></i></a>
                    </div>
                </div>
                <div class="card col-md-3 m-5" style={{width: "14rem"}}>
                    <img src={`${leagpedia}`} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/Porgramming-Hero-web-course/react-auth-Shongkor" class="btn btn-primary ml-5 mr-5"><i class="fab fa-github-square"></i></a>
                        <a href="https://unique-riders-eb520.web.app/" class="btn btn-primary"><i class="fad fa-eye"></i></a>
                    </div>
                </div>
                <div class="card col-md-3 m-5" style={{width: "14rem"}}>
                    <img src={`${shoap}`} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/Porgramming-Hero-web-course/react-auth-Shongkor" class="btn btn-primary ml-5 mr-5"><i class="fab fa-github-square"></i></a>
                        <a href="https://repaire-6d126.web.app/" class="btn btn-primary"><i class="fad fa-eye"></i></a>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default Portfolio;