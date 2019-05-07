import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import API from "../../utils/API";

class MainProfileCard extends Component {

    state = {
        profileId: []
    };

    componentDidMount() {
        
    
        API
          .getProfileImage()
          .then(response => this.setState({ profileId: response.data }))
          .catch(err => console.log(err));
      }
    


    render() {
        return (<div> 
            
           
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
               
                    {this.state.profileId.map(image => (
                        
                    <Image src={image.imageURL}  id="amanda" class="img-circle person" alt="Amanda Huggakiss" />
                   
                    ))}
                    
                    <br />
                    <br />
                    <br />
                    <br />
                    {this.state.profileId.map(text => (
                    <p><em><strong className="text-dark">{text.profileText}</strong></em></p>
                    ))}
                    {/* <Col xs={6} md={4}>
                       
                        <Image src="http://synbioconference.org/sites/default/files/styles/aiche_lead/public/images/conference/lead/shutterstock_503546536.jpeg?itok=2lOU4Ho2" thumbnail />
                    </Col> */}
                

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                
            
            </div>
        );
    }
}

export default MainProfileCard;
