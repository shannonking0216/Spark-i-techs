import React, { Component } from "react";
import API from "../../utils/API";
import axios from "axios";

class ContactUs extends Component {

    // state = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     comment: ""
    // };

    // handleInputChange = e => {
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    // }


    // handleFormSubmit = e => {
    //     e.preventDefault();
    //     API
    //         .addNewContactInfo(this.state)
    //         .then(() => {

    //             this.setState({
    //                 firstName: "",
    //                 lastName: "",
    //                 email: "",
    //                 comment: ""
    //             });
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // }

    handleSubmit(e) {
        e.preventDefault();
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
                <h1 className="text-center text-uppercase text-secondary mb-0">Contact Us</h1>
                <hr className="mb-5" />

                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="email" required aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };
}

export default ContactUs;