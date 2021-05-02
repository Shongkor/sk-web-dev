import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './Skils.css'


const Skils = () => {
    return (
        <div className="background">
            <div>
                <Navigation></Navigation>
            </div>
                <div class="">
                    <div class="row">
                        <div class="hero-section col-lg-5">

                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="hero-content-wrap py-5">
                                <div class="hero-content ">
                                <div class=""><div>
                                    <div class="mainSkill">
                                        <h4 className="text-center">My Skills Set</h4>
                                <div class="skills">
                                    <span>JavaScript</span>
                                    <span>ES6</span>
                                    <span>ReactJS</span>
                                    <span>NodeJS</span>
                                    <span>ExpressJS</span>
                                    <span>MongoDB</span>
                                    <span>ReduxJS</span>
                                    <span>Git</span>
                                    <span>Webpack</span>
                                    <span>NPM</span>
                                    <span>VS code</span>
                                    <span>Rest API</span>
                                    <span>Firebase</span>
                                    </div>
                                    <h4 className="text-center">I want to work with</h4>
                                    <div class="skills">
                                        <span>JavaScript</span>
                                        <span>ReduxJS</span>
                                        <span>NodeJS</span>
                                        <span>Rest API</span>
                                        <span>ReduxJS</span>
                                        </div>
                                        <h4 className="text-center">I prefer not to work with</h4>
                                        <div class="skills">
                                            <span>React</span>
                                            <span>Node.js</span>
                                            <span>SQL</span><span>WordPress</span>
                                            <span>Express</span>
                                            <span>Mongodb</span>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Skils;