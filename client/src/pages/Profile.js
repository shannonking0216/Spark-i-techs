import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import ContactList from './../components/ContactList';
import AddImage from '../components/AddImage';
import DeleteImage from '../components/DeleteImage';


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
      <div className="container-profile">
        <h1>On the profile page!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <Link to="/">Go home</Link>
        <AddImage />
        <br></br>
        <DeleteImage />
        <br></br>
        <ContactList />
        <br></br>
      </div>
    )
  }
}

export default withAuth(Profile);