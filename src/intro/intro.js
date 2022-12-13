import React from 'react';
import sample1 from './bg1.jpeg'
import sample from './thumb.png'
import sample3 from './wav.png'
import '../css/templatemo-training-studio.css'
import './intro.css'
function Intro(){

    return(
            <>
           
            <img class='img' src={sample1} />
            <div className='img-over'>
            <section class="section" id="features">
        <div classNmae="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2 style={{color:"white"}}>About  <em>Us</em></h2>
                        <img src={sample3} alt="waves" />
                        <p style={{color:"white"}}>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                        <div className="left-icon">
                                 <img src={sample} alt="waves" />
                            </div>
                            <div className="right-content">
                                <h4 style={{color:"white"}}>Basic Fitness</h4>
                                <p style={{color:"white"}}>Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                        <div className="left-icon">
                                 <img src={sample} alt="waves" />
                            </div>
                            <div className="right-content">
                                <h4 style={{color:"white"}}>New Gym Training</h4>
                                <p style={{color:"white"}}>If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            
                            <div className="left-icon">
                                 <img src={sample} alt="waves" />
                            </div>
                            
                            <div className="right-content">
                                <h4 style={{color:"white"}}>Basic Muscle Course</h4>
                                <p style={{color:"white"}}>Credit goes to <a rel="nofollow"  target="_blank">Pexels website</a> for images and video background used in this HTML template.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            <div className="left-icon">
                                 <img src={sample} alt="waves" />
                            </div>
                            <div className="right-content">
                                <h4 style={{color:"white"}}>Advanced Muscle Course</h4>
                                <p style={{color:"white"}}>You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div className="left-icon">
                            <img src={sample} alt="waves" />
                            </div>
                            <div className="right-content">
                                <h4 style={{color:"white"}}>Yoga Training</h4>
                                <p style={{color:"white"}}>This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div className="left-icon">
                            <img src={sample} alt="waves" />
                            </div>
                            <div className="right-content">
                                <h4 style={{color:"white"}}>Body Building Course</h4>
                                <p style={{color:"white"}}>Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
            </div>
           
            
            
            </>

    )
}

export default Intro;