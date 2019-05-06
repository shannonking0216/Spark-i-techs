import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import AddImage from '../components/AddImage';
import DeleteImage from '../components/DeleteImage';
import ProfileCard from '../components/ProfileCards'
import ProfileDefault from '../components/ProfileDefault'
import ProfilePic from '../components/ProfilePic'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faImages, faUser, faTrashAlt, faHome} from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


library.add(faCameraRetro, faImages)


class Profile extends Component {

  state = {
    username: "",
    email: "",
    profileReveal: false,
    imageReveal: false,
    deleteReveal: false,
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  ProfileChangeClick = () => {
    this.setState({ profileReveal: true, imageReveal: false, deleteReveal: false });
  }

  AddImageClick = () => {
    this.setState({ profileReveal: false, imageReveal: true, deleteReveal: false });
  }

  DeleteImageClick = () => {
    this.setState({ profileReveal: false, imageReveal: false, deleteReveal: true });
  }



  render() {
    return (
      <div >

        
        <Row className="profileCol2">
          <Col sm={2}>
            <h4>Welcome Back! {this.state.username}</h4>
            <ProfilePic />
            <br></br>
            <FontAwesomeIcon className="faOnClick" onClick={this.ProfileChangeClick} icon={faUser} size="lg" />
            <p className="linkCol2" onClick={this.ProfileChangeClick}>Change Profile Pic</p>
            <FontAwesomeIcon className="faOnClick" onClick={this.AddImageClick} icon={faImages} size="lg" />
            <p className="linkCol2" onClick={this.AddImageClick}>Add Image to Gallery</p>
            <FontAwesomeIcon className="faOnClick" onClick={this.DeleteImageClick} icon={faTrashAlt} size="lg" />
            <p className="linkCol2" onClick={this.DeleteImageClick}>Delete Image from Gallery</p>
            <div><Link to="/"><FontAwesomeIcon className="faOnClick" onClick={this.AddImageClick} icon={faHome} size="lg" /></Link></div>
            <div><Link to="/">Go home</Link></div>

          </Col>
          <Col sm={10}>
            {this.state.profileReveal ? <ProfileCard /> : null}
            {this.state.imageReveal ? <AddImage /> : null}
            {this.state.deleteReveal ? <DeleteImage /> : null}
            {!this.state.profileReveal && !this.state.imageReveal && !this.state.deleteReveal ? <ProfileDefault /> : null}
          </Col>

        </Row>

      </div>


    )
  }
}

export default withAuth(Profile);