import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import AddImage from '../components/AddImage';
import DeleteImage from '../components/DeleteImage';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="container">
        <Row>
        <Col sm={2}><h4>Welcome Back! {this.state.username}</h4></Col>
        <Col sm={8}></Col>
        <Col sm={2}>Page Visits: 10</Col>
          {/* <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p> */}
        </Row>
         <Row>
          <Col sm={2}>

          <Link to="/">Go home</Link>
          </Col>
          <Col sm={10}><AddImage /> <DeleteImage /></Col>
          </Row>
       
      </div>


    )
  }
}

export default withAuth(Profile);