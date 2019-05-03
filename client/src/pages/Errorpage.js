import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './style.css'

library.add(faCameraRetro)


class ErrorPage extends Component {
    render() {
        return <div>
             <MDBContainer>
             <span className="align-middle">
            <Row>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col className="errorMessage" sm={4}>
            <h1> 404 page </h1>
            <FontAwesomeIcon className="header" icon={faCameraRetro} size="10x" />
            <p><Link to="/">Return to homepage</Link></p>
            </Col>
            <Col sm={4}></Col>
            </Row>
            </span>
            </MDBContainer>
        </div>
    }
}

export default ErrorPage;