import React, { Component } from "react";
// import API from "../../utils/API";
import axios from "axios";
import "./ContactUs.css";

class ContactUs extends Component {

    state = {
        name: "",
        email: "",
        message: ""
    };

    handleInputChange = e => {
        console.log(e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    // handleFormSubmit = e => {
    //     e.preventDefault();
    //     API
    //         .addNewContactInfo(this.state)
    //         .then(() => {

    //             this.setState({
    //                 name: "",
    //                 email: "",
    //                 message: ""
    //             });
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1 className="text-center text-uppercase text-secondary mb-0 mt-5">Contact Us</h1>
                <hr className="mb-5" />
                <div className="row">
                    <div className="col-lg-8 mx-auto">

                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        name="name"
                                        onChange={this.handleInputChange}
                                        value={this.state.name}
                                         />
                                    {/* <p className="help-block text-danger">Please enter your name.</p> */}
                                </div>
                            </div>

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label></label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                        required />
                                    {/* <p className="help-block text-danger">Please enter your email address.</p> */}
                                </div>
                            </div>

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label></label>
                                    <textarea className="form-control" rows="5" id="message" placeholder="Message"
                                        name="message"
                                        onChange={this.handleInputChange}
                                        value={this.state.message}
                                        required></textarea>
                                    {/* <p className="help-block text-danger">Please enter a message.</p> */}
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary" style={{ width: 100, display: "block", margin: "0 auto", marginBottom: "50px" }} >SUBMIT</button>
                            <br />

                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default ContactUs;