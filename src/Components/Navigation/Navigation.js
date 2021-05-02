import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <nav className="mobile-nav navbar navbar-expand-lg navbar-light bg-white">
                <div className="container ">
                    <Link to='/' className='navbar-brand '>SK</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/skills'>Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                            <li className="nav-item">
                            <a className="btn btn-outline-success" href="https://drive.google.com/uc?export=download&id=1Lr3zVupZ7caPMTigSSyKNEdamNx0lw_c"> <span><i class="fas fa-download"></i></span> RESUME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;