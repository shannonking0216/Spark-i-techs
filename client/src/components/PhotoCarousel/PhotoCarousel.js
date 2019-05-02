import React, { Component } from "react";
import nature from "../Images/carousel-nature.jpg"
import food from "../Images/carousel-food.jpg"
import engagement from "../Images/carousel-engagement.jpg"
import Carousel from 'react-bootstrap/Carousel'
import './PhotoCarousel.css'
// PhotoCarousel component is hosting all of the 3 Gallery components (imported below)..
// ...and showing or hiding based upon onClick events attched to Carousel.Item components
import NatureGallery from '../NatureGallery.js';
import FoodGallery from '../FoodGallery.js';
import EngagementGallery from '../EngagementGallery.js';

class PhotoCarousel extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
             // ishidden: true
        };
    }

    // toggleHidden() {
    //     this.setState({
    //         isHIdden: !this.state.GalleryFood.isHidden
    //     })
    // }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,

        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item className="photo-size" onClick={() => console.log("nature")}> 
                    <img
                        className="d-block w-100 photo-size"
                        src={nature}
                        alt="First slide"
                        height="600" 
                        width="814"
                    />
                    <Carousel.Caption>
                        <h3>Nature Photo Gallery</h3>
                        <p>Click here to see Amanda's Nature Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="photo-size" onClick={() => console.log("food")}> 
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

                <Carousel.Item className="photo-size" onClick={() => console.log("engagement")}> 
                    <img
                        className="d-block w-100 photo-size"
                        src={engagement}
                        alt="Third slide"
                        height="600" 
                        width="814"
                    />
                    <Carousel.Caption>
                        <h3>Engagement Photo Gallery</h3>
                        <p>Click here to see Amanda's Engagement Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            <NatureGallery />
            <FoodGallery />
            <EngagementGallery />

            </Carousel>
        );
    }
}


export default PhotoCarousel;


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