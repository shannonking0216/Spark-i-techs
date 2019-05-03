import React, { Component } from "react";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button'
import { MDBContainer } from 'mdbreact';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




// import AuthService from './components/AuthService';
// import withAuth from './components/withAuth';
// const Auth = new AuthService();


function ImageFilePreview({ src }) {
  return (
    <div className="pt-3 dynamicImgCenter" style={{ maxWidth: '200px' }}>
      <img className="img-fluid" src={src} alt="to upload" />
    </div>
  )
}


class AddImage extends Component {
  state = {
    fileName: '',
    imageURL: null
  }

  fileInput = React.createRef();

  // this function gets the file chosen by the user and
  // calls our helper for uploading the image to images api
  handleSubmitNature = () => {
    console.log(this.state)
    const file = this.fileInput.current.files[0]

    // build form data object to send to server
    const data = new FormData()
    data.append('image', file)

    // send request to upload the file
    API.uploadNatureImage(this.state)
      .then((data) => {
        console.log(data)
        alert(`Image ${data.data.fileName} added!`)
        this.setState.fileName = ""

      })
      .catch(err => {
        console.log(err);
      })

  }

  handleSubmitEngagement = () => {
    console.log(this.state)
    const file = this.fileInput.current.files[0]

    // build form data object to send to server
    const data = new FormData()
    data.append('image', file)
    console.log(data)

    // send request to upload the file
    API.uploadEngagementImage(this.state)
      .then((data) => {
        console.log(data)
        alert(`Image ${data.data.fileName} added!`)
      })
      .catch(err => {
        console.log(err);
      })
  }


  handleSubmitFood = () => {
    console.log(this.state)
    const file = this.fileInput.current.files[0]

    // build form data object to send to server
    const data = new FormData()
    data.append('image', file)
    console.log(data)

    // send request to upload the file
    API.uploadFoodImage(this.state)
      .then((data) => {
        console.log(data)
        alert(`Image ${data.data.fileName} added!`)
      })
      .catch(err => {
        console.log(err);
      })
  }




  // display a preview of the file selected by the user
  handleFileInputChange = (event) => {
    const file = this.fileInput.current.files[0]
    const reader = new FileReader()
    reader.onload = ({ target }) => {
      this.setState({ imageURL: target.result, fileName: file.name })
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }


  render() {
    return (
      <div className="addImage">
        <MDBContainer>

          <span className="align-middle">
            {/* image upload control and a preview of the chosen image */}
            <hr />
            <h2 className="AddImageHead">Add an Image</h2>
            <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
            <Card border="secondary" style={{ width: '18rem', textAlign: 'Center' }}>
              <Card.Header>Image Preview</Card.Header>

              {this.state.imageURL ? (
                <Row>
                  <Col sm={2}></Col>
                  <Col sm={8}><ImageFilePreview src={this.state.imageURL} /></Col>
                  <Col sm={2}></Col>
                </Row>
              ) : null}
              <Card.Body>
                <Card.Text>
                  random text
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            </Col>
            <Col sm={4}></Col>
            </Row>
            <div className="custom-file">
              <input
                ref={this.fileInput}
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={this.handleFileInputChange}
              />
              <label className="custom-file-label" htmlFor="customFile">
                {this.state.fileName || 'Choose file'}
              </label>
            </div>

            <h5>Choose a Gallery to Upload Image to</h5>
            <br></br>
            <div>
            <Row>
            <Col sm={4}>
              <Button
                variant="outline-primary"
                type="submit"
                className="btn btn-outline-primary  pt-2"
                onClick={this.handleSubmitNature}>Nature Gallery</Button>

              <br></br>
              </Col>
              <Col sm={4}>
              <Button 
                variant="outline-primary"
                type="submit"
                className="btn btn-outline-primary  pt-2"
                onClick={this.handleSubmitEngagement}>Engagement Gallery</Button>
              <br></br>
              </Col>
              <Col sm={4}>
              <Button
                variant="outline-primary" type="submit"
                className="btn btn-outline-primary pt-2"
                onClick={this.handleSubmitFood}>Food Gallery</Button>
                </Col>
             </Row>

            </div>
          </span>
        </MDBContainer>
      </div>
    )
  }
}


export default AddImage;

// export default withAuth(AddImage)