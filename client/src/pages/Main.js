import React, { Component } from 'react';
import GalleryLinks from './../components/GalleryLinks';
import ContactUs from './../components/ContactUs';

import Navbar from "../components/Navbar"
import Images from "../components/Images/chile.jpg"

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
                                <h1>The Amanda Section</h1>
                                <p className="lead">A brief discription of what the page is about</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GalleryLinks />
            <ContactUs />
            </div>
        )
    }
}
export default Main;