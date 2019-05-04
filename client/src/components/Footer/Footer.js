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
            <br></br>
            <br></br>
                    <div className="footer-row">
                        <div className="col-sm-4" >
                            <h2>Ready When You Are</h2>
                            <br></br>
                            <p>Get in tounch with our developers:</p>
                           
                            <a href="#" id="andres">ANDRES VALDES</a>
                            <br></br>
                            <br></br>
                            <a href="#" id="brandon">BRANDON HARRIS</a>
                            <br></br>
                            <br></br>
                            <a href="#" id="shanon">SHANNON KING</a>
                            <br></br>
                            <br></br>
                            <a href="#" id="olga">OLGA Karamyseva</a>
                        </div>
                        <div className="col-sm-4" id="middle">
                        <h2>ABOUT US</h2>
                        <br></br>
                        <p>HOW WE WORK</p>
                        <p>ACHIVEMENTS & AWARDS</p>
                        <p>PARTNERSHIP</p>
                        <p>LEADERSHIP</p>
                        </div>
                        <div className="col-sm-4" id="footer-con">
                            <h2>Catch me on:</h2>
                            <br></br>
                            <br></br>
                            <i class="fab fa-google-plus-square fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            <i class="fab fa-twitter-square fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            <i class="fab fa-facebook-square fa-lg white-text mr-md-5 mr-3 fa-2x"></i>

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


                    <div className="footer-copyright text-center py-3">
                        <div>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> SPARKiTECHS </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default Footer;