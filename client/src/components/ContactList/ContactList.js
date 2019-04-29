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
                <table className="table">
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactList.map(contacts => (
                            <tr key={contacts._id}>
                                <td>{contacts.firstName}</td>
                                <td>{contacts.lastName}</td>
                                <td>{contacts.email}</td>
                                <td>{contacts.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default ContactList;