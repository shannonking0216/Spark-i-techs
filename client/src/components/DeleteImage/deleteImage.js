import React, { Component } from "react";
import API from "../../utils/API";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import { MDBContainer } from 'mdbreact';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'



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
    const valuePrompt = prompt("Do you want to delete this image? Type Yes to confirm") // pick back up here
    if (valuePrompt === "Yes") {
      API
        .deleteNatureImage(fileName)
        .then(res => {
          console.log(res)
          alert(`Image ${fileName} Deleted!`)
          window.location.reload();
        })
        .catch(err => console.log(err));
    } else {
      alert("Delete Request cancelled")
    }
  }

  handleDeleteEngagementImage = (fileName) => {
    console.log(fileName)
    const valuePrompt = prompt("Do you want to delete this image? Type Yes to confirm") // pick back up here
    if (valuePrompt === "Yes") {
      API
        .deleteEngagementImage(fileName)
        .then(res => {
          console.log(res)
          alert(`Image ${fileName} Deleted!`)
          window.location.reload();
        })
        .catch(err => console.log(err));
    } else {
      alert("Delete Request cancelled")
    }
  }

  handleDeleteFoodImage = (fileName) => {
    console.log(fileName)
    const valuePrompt = prompt("Do you want to delete this image? Type Yes to confirm") // pick back up here
    if (valuePrompt === "Yes") {
      API
        .deleteFoodImage(fileName)
        .then(res => {
          console.log(res)
          alert(`Image ${fileName} Deleted!`)
          window.location.reload();
        })
        .catch(err => console.log(err));
    } else {
      alert("Delete Request cancelled")
    }
  }




  render() {
    return (
      <div className="container removeImage">
        <MDBContainer>

          <hr />

          <h3>Remove an Image</h3>
          <Row>
            <Col sm={4}>

              {this.state.NatureGallery.map(image => (
                <Card className="deleteCard" border="secondary" style={{ width: '18rem', textAlign: 'Center' }}>
                  <Image

                    className="ImageHolder"
                    src={image.imageURL}
                    thumbnail
                    height="200"
                    width="200"

                  />
                  <Card.Body>
                    <Card.Text>
                      <p>{image.fileName}</p>
                    </Card.Text>
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="btn btn-outline-primary  pt-2"
                      onClick={() => this.handleDeleteNatureImage(image.fileName)}>Delete Image</Button>

                  </Card.Body>
                </Card>
              ))}

            </Col>
            <Col sm={4}>
              {this.state.EngagementGallery.map(image => (
                <Card className="deleteCard" border="secondary" style={{ width: '18rem', textAlign: 'Center' }}>
                  <Image
                    
                    className="ImageHolder"
                    src={image.imageURL}
                    thumbnail
                    height="200"
                    width="200"

                  />
                  <Card.Body>
                    <Card.Text>
                    <p>{image.fileName}</p>
                </Card.Text>
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="btn btn-outline-primary  pt-2"
                      onClick={() => this.handleDeleteEngagementImage(image.fileName)}>Delete Image</Button>

                  </Card.Body>
                </Card>
              ))}
            </Col>
            <Col sm={4}>
              {this.state.FoodGallery.map(image => (
                <Card className="deleteCard" border="secondary" style={{ width: '18rem', textAlign: 'Center' }}>
                  <Image

                    className="ImageHolder"
                    src={image.imageURL}
                    thumbnail
                    height="200"
                    width="200"
                  

                  />
                  <Card.Body>
                    <Card.Text>
                    <p>{image.fileName}</p>
                </Card.Text>
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="btn btn-outline-primary  pt-2"
                      onClick={() => this.handleDeleteFoodImage(image.fileName)}>Delete Image</Button>

                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </MDBContainer>
      </div>
    )
  }
}


export default DeleteImage;


