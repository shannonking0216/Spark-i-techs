import React, { Component } from "react";

import nature from "../Images/carousel-nature.jpg"
import food from "../Images/grapes.jpg"
import engagement from "../Images/engagment.jpg"
import Carousel from 'react-bootstrap/Carousel'
import './PhotoCarousel.css'

import NatureGallery from '../NatureGallery';
import FoodGallery from '../FoodGallery';
import EngagementGallery from '../EngagementGallery';

class PhotoCarousel extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,

        });
    }

    // class ContainerGallery extends Component {
        //     // //  use props to tell which gallery component to show
        //     constructor(props) {
        //         super(props);
        //         this.state = {show: true}
        //       }
        //     // // onClick will register a gallery component to show.
        //     // // Which gallery component will show, will be based upon which carousel item was clicked
            
        //         render() {
        //     // // switch staement to look at the value that comes in from the prop
        //             <GalleryFood />
        //             <GalleryEngagement />
        //             <GalleryNature />
            
        //     //         // let activeGallery = whatever component you are wanting to show
        //             return (
        //                 {activeGallery}
        //             );
        //         }
        //     }
        //         export default ContainerGallery


    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item className="photo-size" >
                    {/* this will be attached to the Carousel.Item ...onClick={this.props.handle("nature")} */}
                    <img
                        className="d-block w-100 photo-size"
                        src={nature}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Nature Photo Gallery</h3>
                        <p>Click here to see Amanda's Nature Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>
               

                <Carousel.Item className="photo-size" >
                {/* // onClick={this.toggleHidden.bind(this)}>
                    // {!this.state.isHidden && <FoodGallery />} */}
                    <img
                        className="d-block w-100 photo-size"
                        src={food}
                        alt="Third slide"
                        height="600"
                        width="814"
                    />
                    <Carousel.Caption>
                        <h3>Cullinary Photo Gallery</h3>
                        <p>Click here to see Amanda's Culinary Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="photo-size" id="my-engagement"> 
                {/* onClick={this.toggleHidden.bind(this)} */}
                    {/* {!this.state.isHidden && <EngagementGallery />} */}
                    <img
                        className="d-block w-100 photo-size"
                        src={engagement}
                        alt="Third slide"
                        height="600" 
                        width="814"
                    />
                    <Carousel.Caption>
                        <h3><strong>Engagement Photo Gallery</strong></h3>
                        <p><strong>Check out Amanda's Engagement Photography!</strong></p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default PhotoCarousel;