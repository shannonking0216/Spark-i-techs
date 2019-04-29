import React, { Component } from 'react';
import GalleryLinks from './../components/GalleryLinks';
import ContactUs from './../components/ContactUs';


// import { Link } from 'react-router-dom';
// import { isMainThread } from 'worker_threads';


class Main extends Component {


    render() {
        return (
            <div>
            
            <h1>Hello</h1>
            <GalleryLinks />
            <ContactUs />
            </div>
        )
    }
}
export default Main;