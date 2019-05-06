import React, { Component } from 'react';
import ContactUs from './../components/ContactUs';
// import Navbar from "../components/Navbar"
// import Images from "../components/Images/chile.jpg"
import PhotoCarousel from '../components/PhotoCarousel';
import MainProfileCard from '../components/MainProfileCard'
import FooterLink from "../components/Footer"
import NatureGallery from '../components/NatureGallery';
import FoodGallery from '../components/FoodGallery';
import EngagementGallery from '../components/EngagementGallery';
import ScrollUpButton from "react-scroll-up-button";

// import { Link } from 'react-router-dom';
// import { isMainThread } from 'worker_threads';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shownGallery: null
        };
    }

    handleImageClick = (targetClass, index) => {
        if (targetClass === "carousel-inner") {
            if (index === 0)
                this.setState({ shownGallery: <NatureGallery /> })
            else if (index === 1)
                this.setState({ shownGallery: <FoodGallery /> })
            else if (index === 2)
                this.setState({ shownGallery: <EngagementGallery /> })
        }
    }

    render() {
        return (
            <div>
                <section id="hero">
                    <div className="container">
                        <div className="hero-image">
                            <div className="hero-text text-light">
                                <div className="starter-template">
                                    <h1 className="font-weight-bold">Amanda's Picturesque Photography</h1>
                                    <br></br>
                                    <p className="lead">Welcome to my professional photography page! Here you can peruse through my work and see the world through my eyes. Feel free to contact me about any inquiries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <PhotoCarousel imgClick={this.handleImageClick} />
                {this.state.shownGallery}
               

                <ScrollUpButton />

                <section id="about-me" className="grad-dynamic">
                    <div className="container text-center">
                        <br />
                        <br />
                        <h3><strong>Amanda Huggakiss</strong></h3>
                        <p></p>
                        <br />
                        <br />
                        {/* <br></br> */}
                        <div className="row">
                            <br />
                            <br />
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                            <MainProfileCard />
                                {/* <div className="amanda-image"></div> */}
                                {/* <img src="https://cdn.pixabay.com/photo/2014/03/10/17/33/woman-284621_1280.jpg" id="amanda" class="img-circle person" alt="Amanda Huggakiss">
                                </img>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p><em><strong>"Photography takes an instant out of time, altering life by holding it still."</strong></em></p> */}
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <br></br>
                    </div>
                </section>

                <ContactUs />
                {/* <Footer /> */}
                <br></br>
                <FooterLink />
                <section className="footer">

                </section>
            </div >
        )
    }
}
export default Main;