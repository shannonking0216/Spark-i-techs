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



class ProfileCard extends Component {

  state = {
    fileName: '',
    imageURL: null
  }

  fileInput = React.createRef();

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
        window.location.reload();

      })
      .catch(err => {
        console.log(err);
      })

  }

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
      <div className="profileCards">
        <MDBContainer>
          <span className="align-middle">
            <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
            <Card border="secondary" style={{ width: '18rem', textAlign: 'Center' }}>
              <Card.Header>Profile Pic</Card.Header>
              {this.state.imageURL ? (
                <Row>
                  <Col sm={2}></Col>
                  <Col sm={8}><ImageFilePreview src={this.state.imageURL} /></Col>
                  <Col sm={2}></Col>
                </Row>
              ) : null}

              <Card.Body>
                <Card.Text>
                  
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
            <Row>
            <Col sm={4}>
              

              <br></br>
              </Col>
              <Col sm={4}>
              <Button 
                variant="outline-primary"
                type="submit"
                className="btn btn-outline-primary  pt-2"
                onClick={this.handleSubmitEngagement}>Confirm Changes</Button>
              <br></br>
              </Col>
              <Col sm={4}>
             
                </Col>
             </Row>

           
          </span>
          </MDBContainer>

      </div>
    )
  }
}


export default ProfileCard;
