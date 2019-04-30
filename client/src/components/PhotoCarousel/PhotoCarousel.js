import React, { Component } from "react";
import nature from "../Images/carousel-nature.jpg"
import food from "../Images/carousel-food.jpg"
import engagement from "../Images/carousel-engagement.jpg"
import Carousel from 'react-bootstrap/Carousel';

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

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nature}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Nature Photo Gallery</h3>
                        <p>Check out Amanda's Nature Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={food}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Cullinary Photo Gallery</h3>
                        <p>Check out Amanda's Culinary Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={engagement}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Engagement Photo Gallery</h3>
                        <p>Check out Amanda's Engagement Photography!</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}


export default PhotoCarousel;


// return (
//     <span>
//         <div class="CarouselPhotoPortfolio">
//             <div id="carouselCaptions" class="carousel slide" data-ride="carousel">
//                 <ol class="carousel-indicators">
//                     <li data-target="#carousel-nature" data-slide-to="0" class="active"></li>
//                     <li data-target="#carousel-food" data-slide-to="1"></li>
//                     <li data-target="#carousel-engagement" data-slide-to="2"></li>
//                 </ol>    
//             </div>
//         </div>
//         <div class="carousel-inner">
//             <div class="carousel-item active">
//                 <img src={nature} class="d-block w-100" alt="bird's eye view of the ocean" />
//                 <div class="carousel-caption d-none d-md-block">
//                     <h5>Nature Photo Gallery</h5>
//                     <p>Check out Amanda's Nature Photography!</p>
//                 </div>
//             </div>
//         </div>
//         <div class="carousel-item">
//             <img src={food} class="d-block w-100" alt="breakfast on cast iron pan" />
//             <div class="carousel-caption d-none d-md-block">
//                 <h5>Cullinary Photo Gallery</h5>
//                 <p>Check out Amanda's Culinary Photography!</p>
//             </div>
//         </div>
//         <div class="carousel-item">
//             <img src={engagement} class="d-block w-100" alt="happy couple" />
//             <div class="carousel-caption d-none d-md-block">
//                 <h5>Engagement Photo Gallery</h5>
//                 <p>Check out Amanda's Engagement Photography!</p>
//             </div>
//         </div>
//     </span>
// )