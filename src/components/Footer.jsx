import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/navbarLogo.png'
import addressicon from '../assets/images/addressicon.png'
import emailicon from '../assets/images/emailicon.png'
import whatsappicon from '../assets/images/whatsappicon.png'

const Footer = () => {
    return (
        <div>
            <Container fluid className='px-5 footerbg'>
                <Row className='py-5'>
                    <Col lg={5}>
                        <div>
                            <div className='text-center'>
                                <Image src={logo} className='img-fluid' />
                            </div>
                            <p className='footertext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div>
                            <h4 className='footertext mb-4'>Quick Links</h4>
                            <div>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>Holiday Homes</a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>About</a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>Blog</a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>Contact</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div>
                            <h4 className='footertext mb-4'>Legal</h4>
                            <div>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>Terms and Conditions</a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>Privacy Policy </a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>FAQs</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div>
                            <h4 className='footertext mb-4'>Contact</h4>
                            <div>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>
                                    <Image src={addressicon} className='img-fluid pe-2' />
                                    Dubai, UAE
                                </a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>
                                    <Image src={emailicon} className='img-fluid pe-2' />
                                    info@dwell-away.com
                                </a>
                                <a href="#" className='d-block footertext text-decoration-none mb-3'>
                                    <Image src={whatsappicon} className='img-fluid pe-2' />
                                    +971548456789
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='copyrighttextcon d-flex align-items-center justify-content-center'>
                <span className='text-white'>Copyright 2024 © Dwell Away Holidays Home.</span>
            </div>
        </div>
    )
}

export default Footer