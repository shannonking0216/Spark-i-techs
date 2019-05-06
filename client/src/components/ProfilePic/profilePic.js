import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import API from "../../utils/API";
import './style.css'

class ProfilePic extends Component {

    state = {
        profilePic: []
    };

    componentDidMount() {
        API
            .getProfileImage()
            .then(response => this.setState({ profilePic: response.data }))
            .catch(err => console.log(err));
    }


    render() {
        return (<div> 
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    
                <Col>
                    {this.state.profilePic.map(image => (
                        
                    <Image src={image.imageURL} thumbnail/>
                    
                    ))}
                 </Col>  
                    
                   
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                
            </Container>
            </div>
        );
    }
}

export default ProfilePic;
