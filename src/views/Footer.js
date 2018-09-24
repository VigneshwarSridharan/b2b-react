import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem } from './components/bootstrap/';
import { APP_URL } from '../constants/actionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';



function Footer(props) {
    return (
        <section className="bg-white py-5">
            <Container>
                <Row>
                    <Col sm={3}>
                        <img src={APP_URL + '/assets/images/tripzumi.png'} />
                    </Col>
                    <Col sm={3}>
                        {
                            ['Contact us', 'FAQs', 'Itinerary Changes', 'Online Refund Request'].map((param, k) => {
                                return (
                                    <p key={k}>{param}</p>
                                )
                            })
                        }
                    </Col>
                    <Col sm={3}>
                        {
                            ['Flight', 'Holidays', 'Airlines', 'Flight Schedule', 'Travel Guides', 'Blog', 'Travel Updates'].map((param, k) => {
                                return (
                                    <p key={k}>{param}</p>
                                )
                            })
                        }
                    </Col>
                    <Col sm={3}>
                        {
                            ['Airline informations', 'About us', 'Terms of use', 'Privacy Policy', 'Partners', 'Partner with us'].map((param, k) => {
                                return (
                                    <p key={k}>{param}</p>
                                )
                            })
                        }
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={4}>
                        <p className="text-secondary mb-2">Member of</p>
                        <div className="d-flex align-items-center">
                            <img src={APP_URL + '/assets/images/iata.png'} className="mr-3" />
                            <img src={APP_URL + '/assets/images/tico.png'} className="mr-3" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <p className="text-secondary mb-2">We accpt</p>
                        <div className="d-flex align-items-center">
                            <img src={APP_URL + '/assets/images/support_cc.png'} className="mr-3" />
                        </div>
                    </Col>
                    <Col sm={4} className="text-secondary">
                        <p className="mb-2">Follow Us</p>
                        <ul className="d-flex align-items-center p-0 list-style-none">
                            {
                                [faFacebookF,faTwitter,faGooglePlusG,faInstagram].map((param,k)=> {
                                    return (
                                        <li className="px-2" key={k}>
                                            <FontAwesomeIcon icon={param}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;