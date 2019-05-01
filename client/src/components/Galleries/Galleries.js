import React, { Component } from "react";
// import API from "../../utils/API";
import NatureGallery from "../Images/NatureGallery"

class Galleries extends Component {
    


    render() {
        return (
            <div className="PhotoGalleries">
                <div className="row">
                {/* Put all links to the photo galleries below... use a tags */}
                    <div className="myRow">
                        <h1 className="Nature">Nature Photos</h1>
                        <h1 className="Wedding">Engagement Photos </h1>
                        <h1 className="Misc">Food Photos</h1>
                        <NatureGallery />
                    </div>
                </div>
            </div>
        )
    };

}

export default Galleries;