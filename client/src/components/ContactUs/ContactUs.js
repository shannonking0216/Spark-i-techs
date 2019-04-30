import React, { Component } from "react";
import API from "../../utils/API";

class ContactUs extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        comment: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    handleFormSubmit = e => {
        e.preventDefault();
        API
            .addNewContactInfo(this.state)
            .then(() => {
              
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    comment: ""
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="add">
                <h1>Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="First Name">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="First Name"
                            onChange={this.handleInputChange}
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Last Name">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={this.handleInputChange}
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Comment">Comment</label>
                        <input
                            type="text"
                            className="form-control"
                            name="comment"
                            placeholder="Comment"
                            onChange={this.handleInputChange}
                            value={this.state.comment}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    };
}

export default ContactUs;