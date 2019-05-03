import React, { Component } from "react";
import API from "../../utils/API";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { MDBContainer } from 'mdbreact';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



// import AuthService from './components/AuthService';
// import withAuth from './components/withAuth';
// const Auth = new AuthService();


class DeleteImage extends Component {
  state = {
    NatureGallery: [],
    EngagementGallery: [],
    FoodGallery: [],
  }

  componentDidMount() {
    API
      .getAllNatureImages()
      .then(response => this.setState({ NatureGallery: response.data }))
      .catch(err => console.log(err));
    API
      .getAllEngagementImages()
      .then(response => this.setState({ EngagementGallery: response.data }))
      .catch(err => console.log(err));
    API
      .getAllFoodImages()
      .then(response => this.setState({ FoodGallery: response.data }))
      .catch(err => console.log(err));

  }

  handleDeleteNatureImage = (fileName) => {
    console.log(fileName)
    prompt("Do you want to delete this image?") // pick back up here 
    API
    .deleteNatureImage(fileName)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  handleDeleteEngagementImage = (fileName) => {
    console.log(fileName)
    API
    .deleteEngagementImage(fileName)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  handleDeleteFoodImage = (fileName) => {
    console.log(fileName)
    API
    .deleteFoodImage(fileName)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }





  render() {
    return (
      <div className="container removeImage">


        <hr />

        <h3>Remove an Image</h3>
        <div>

          {['down'].map(direction => (
            <DropdownButton
              drop={direction}
              variant="secondary"
              title={` Drop ${direction} `}
              id={`dropdown-button-drop-${direction}`}
              key={direction}
            >
              <Dropdown.Item>Nature Gallery</Dropdown.Item>
              <Dropdown.Divider />
              {this.state.NatureGallery.map(image => (
                <Dropdown.Item onClick={() => this.handleDeleteNatureImage(image.fileName)}>
                  {image.fileName}
                </Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item>Engagement Gallery</Dropdown.Item>
              <Dropdown.Divider />
              {this.state.EngagementGallery.map(image => (
                <Dropdown.Item  onClick={() => this.handleDeleteEngagementImage(image.fileName)}>
                >{image.fileName}
                </Dropdown.Item>
              ))}
              <Dropdown.Item>Food Gallery</Dropdown.Item>
              <Dropdown.Divider />
              {this.state.FoodGallery.map(image => (
                <Dropdown.Item onClick={() => this.handleDeleteFoodImage(image.fileName)}>
                {image.fileName}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          ))}




        </div>
      </div>
    )
  }
}


export default DeleteImage;


{/* <Button  
type="submit"
className="btn btn-outline-primary btn-block pt-2"
onClick={this.handleSubmitNature}
variant="outline-success">Nature Gallery</Button>

<Button variant="outline-danger" 
type="submit"
className="btn btn-outline-primary btn-block pt-2"
onClick={this.handleSubmitEngagement}>Engagement Gallery</Button>

<Button 
variant="outline-warning" type="submit"
className="btn btn-outline-primary btn-block pt-2"
onClick={this.handleSubmitFood}>Food Gallery</Button */}