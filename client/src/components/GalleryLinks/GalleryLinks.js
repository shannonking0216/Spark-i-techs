import React, { Component } from "react";
import API from "../../utils/API";
import Images from "../Images/Images"

class GalleryLinks extends Component {
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
            <div className="PhotoGalleries">
                <div className="row">
                    <h1 className="Nature">Nature Photos</h1>
                    <h1 className="Wedding">Wedding Photos </h1>
                    <h1 className="Misc">Misc Photos</h1>
                    <Images />
                    
                </div>
            </div>
           
        )
    };
}

export default GalleryLinks;