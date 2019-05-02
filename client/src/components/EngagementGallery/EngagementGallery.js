import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import API from "../../utils/API";

class EngagementGallery extends Component {

    state = {
        EngagementGallery: []
    };

    componentDidMount() {
        API
            .getAllEngagementImages()
            .then(response => this.setState({ EngagementGallery: response.data }))
            .catch(err => console.log(err));
    }


    render() {
        return (<div> 
            <h1>Engagement Photos</h1>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8}>
                    {this.state.EngagementGallery.map(image => (
                        
                    <Image src={image.imageURL} thumbnail height="400" width="400" />
                    
                    ))}
                    </Col>
                    {/* <Col xs={6} md={4}>
                       
                        <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                    </Col> */}
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                
            </Container>
            </div>
        );
    }
}

export default EngagementGallery;
