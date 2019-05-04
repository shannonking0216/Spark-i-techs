import React, { Component } from "react";
import nature from "../Images/carousel-nature.jpg"
import food from "../Images/grapes.jpg"
import engagement from "../Images/engagment.jpg"
import Carousel from 'react-bootstrap/Carousel'
import './PhotoCarousel.css'

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
            <div onClick={(event) => this.props.imgClick(event.target.className, this.state.index)}>
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                {/* To make code less repetitious array.map through the carousel items...(first, put imgs in an array) */}

                <Carousel.Item className="photo-size">

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


                <Carousel.Item className="photo-size">
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
        </div>
        );
    }
}


export default PhotoCarousel;
