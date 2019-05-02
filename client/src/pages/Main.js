import React, { Component } from 'react';
import ContactUs from './../components/ContactUs';
import NatureGallery from "../components/NatureGallery";
import EngagementGallery from "../components/EngagementGallery";
import FoodGallery from "../components/FoodGallery";
// import Navbar from "../components/Navbar"
// import Images from "../components/Images/chile.jpg"
import PhotoCarousel from '../components/PhotoCarousel';
import FooterLink from "../components/Footer"

// import { Link } from 'react-router-dom';
// import { isMainThread } from 'worker_threads';


class Main extends Component {


    render() {
        return (
            <div>
                <section id="hero">
                    <div className="container">
                        <div className="hero-image">
                            <div className="hero-text text-light">
                                <div className="starter-template">
                                    <h1 className="font-weight-bold">Amanda's Picturesque Photography</h1>
                                    <p className="lead">Welcome to my professional photography page! Here you can peruse through my work and see the world through my eyes. Feel free to contact me about any inquiries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PhotoCarousel />
                <br></br>
                <NatureGallery />
                <br></br>
                <EngagementGallery />
                <br></br>
                <FoodGallery />
                <section id="about-me" className="grad-dynamic">
                    <div className="container text-center">
                        <h3><strong>Amanda Huggakiss</strong></h3>
                        <p></p>
                        {/* <br></br> */}
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <img src="https://cdn.pixabay.com/photo/2016/11/29/03/36/beautiful-1867093_1280.jpg" id="amanda" class="img-circle person" alt="Amanda Huggakiss">
                                </img>
                                {/* <br></br> */}
                        <p><em>Photography takes an instant out of time, altering life by holding it still.</em></p>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <br></br>
                        
                    </div>
                </section>
                <ContactUs />
                {/* <Footer /> */}
                <FooterLink />
                <section className="footer">
                
                </section>
            </div>
        )
    }
}
export default Main;