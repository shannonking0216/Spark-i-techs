import React, { Component } from "react";
import API from "../../utils/API";
import Images from "../Images/Images"


// This GalleryLinks component needs to be in the PhotoCarousel, so that
// when the user clicks on a photo the gallery will show below
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
                {/* Put all links to the photo galleries below... use a tags */}
                    <h1 className="Nature">Nature Photos</h1>
                    <h1 className="Wedding">Engagement Photos </h1>
                    <h1 className="Misc">Food Photos</h1>
                    <Images />
                    
                </div>
            </div>
           
        )
    };

}

export default GalleryLinks;