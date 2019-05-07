import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import API from "../../utils/API";
import "./EngagementGallery.css";

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
            <br></br>
            <br></br>
            <br></br>
            <h1 className="img-text">Engagement Photos</h1>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                   
                    {this.state.EngagementGallery.map(image => (
                        
                        <div className="center-imgs"><Image src={image.imageURL} className="img-border"/></div>
                    
                    ))}
                   
                    {/* <Col xs={6} md={4}>
                       
                        <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                    </Col> */}
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                
            </Container>
            <br></br>
            <br></br>
            </div>
        );
    }
}

export default EngagementGallery;
