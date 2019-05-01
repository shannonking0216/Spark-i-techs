// import React, { Component } from "react";
// import API from "../../utils/API";

// class NatureGallery extends Component {
//     state = {
//         NatureGallery: []
//     };

//     componentDidMount() {
//         API
//             .getAllNatureImages()
//             .then(response => this.setState({ NatureGallery: response.data }))
//             .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div className="images">
//                         {this.state.NatureGallery.map(image => (
                    
//                             <img src={image.imageURL} height="200" width="200"/>

                            
//                         ))}
    
//             </div>
//         )
//     };
// }



//     // render() {
//     //     return (<div className="Images">
//     //             <div className="row">
//     //             <img src={'https://cdn.newsapi.com.au/image/v1/a4e79a0cb371960de71f45c28e7430cd'} alt="boohoo" className="img-responsive"/> 
//     //             </div>
//     //         </div>
           
//     //     )
//     // };


// export default NatureGallery;