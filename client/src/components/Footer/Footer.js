import React, { Component, Fragment } from "react";
// import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

// import "./style.css"


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>Ready When You Are</h1>
                            <p>Get in tounch</p>
                        </div>
                        <div className="col-sm-6">
                            <h1>Catch me on:</h1>
                            
                                <i class="fab fa-instagram fa-lg black mr-md-5 mr-3 fa-2x"> </i>
                                <i class="fab fa-twitter-square fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                                <i class="fab fa-facebook-square fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                                <i class="fab fa-pinterest-square fa-lg white-text mr-md-5 mr-3 fa-2"></i>
                            
                            {/* <Link className="icons" to="/"> FontAwesomeIcon icon={faFire} </Link> */}
                            {/* <a href="#" class="fa fa-twitter"></a> */}
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div className="footer-copyright text-center py-3">
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> SPARKiTECHS </a>
                    </div>
                </div>
            </div>
        )
    }


}
export default Footer;