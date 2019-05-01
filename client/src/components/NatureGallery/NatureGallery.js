import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import API from "../../utils/API";

class NatureGallery extends Component {

    state = {
        NatureGallery: []
    };

    componentDidMount() {
        API
            .getAllNatureImages()
            .then(response => this.setState({ NatureGallery: response.data }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8}>
                
                    <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                   
                    </Col>
                    <Col xs={6} md={4}>
                       
                        <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                    </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col xs={6} md={4}>
                       
                        <Image src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                       
                        <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        
                        <Image src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" thumbnail />
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6} xs={6}>
                        <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                    </Col>
                    <Col xs={6} xs={6}>
                        <Image src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" thumbnail />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NatureGallery;