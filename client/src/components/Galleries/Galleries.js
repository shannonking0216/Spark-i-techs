import React, { Component } from "react";
// import API from "../../utils/API";
import NatureGallery from "../Images/NatureGallery"

class Galleries extends Component {
    


    render() {
        return (
            <div className="PhotoGalleries">
                <div className="row">
                    <h1 className="Nature">Nature Photos</h1>
                    <h1 className="Wedding">Wedding Photos </h1>
                    <h1 className="Misc">Misc Photos</h1>
                    <NatureGallery />
                    
                </div>
            </div>
           
        )
    };
}

export default Galleries;