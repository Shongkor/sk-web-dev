import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import './Home.css'

const Home = () => {
    return (
        <div style={{height:"700px"}}>
            <section>
            <Navigation></Navigation>
            </section>
            
            <section id="home">


                <div id="home-bg-image"></div>
                        
                    


                    <div id="home-overlay"></div>

                    



                <div id="home-content" class="text-center">
                        
                    <div id="home-content-inner">

                        <div id="home-heading">
                            <div id="home-heading-1" class="animated fadeInDown">
                                <h1>H I !</h1>
                            </div>

                            <div id="home-heading-2" class="animated fadeInLeft">
                                <h1 class="nm">i'm <span>SHONGKOR TALUKDAR</span></h1>
                            </div>\
                            <div class="console-container">
                            <span id="home-text" style={{color:"white"}} class="animated zoomIn">MERN Developer</span>
                            <div class="console-underscore" id="console">_</div>
                            </div>
                            
                        </div>
                        <div>
                            <Link to="/skills"><button class="btn btn-outline-secondary">View More</button></Link> 
                        </div>
                    </div>
                </div>
                
                
            </section>
            
        </div>
    );
};

export default Home;