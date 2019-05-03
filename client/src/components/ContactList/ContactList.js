import React, { Component } from "react";
import API from "../../utils/API";

class ContactList extends Component {

    state = {
        contactList: []
    };

    componentDidMount() {
        API
            .getAllContacts()
            .then(response => this.setState({ contactList: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="contacts">
                <h1>Contacts</h1>
                <br></br>
                <table className="table">
                <br></br>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactList.map(contacts => (
                            <tr key={contacts._id}>
                                <td>{contacts.name}</td>
                                <td>{contacts.email}</td>
                                <td>{contacts.message}</td>
                            </tr>
                           
                        ))}
                        <br></br>
                        <br></br>
                        <br></br>
                    </tbody>
                </table>
            </div>
        )
    };
}

export default ContactList;