import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import backicon from '../assets/images/backicon.png'
import Logoblack from '../assets/images/Logoblack.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from "react";
import Slider from "react-slick";
import loginsliderimg from '../assets/images/loginsliderimg.png'
import loginsliderbackarrow from '../assets/images/loginsliderbackarrow.png'
import loginslidernextarrow from '../assets/images/loginslidernextarrow.png'
import { Link } from 'react-router-dom'

const Login = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Container fluid className='px-5'>
            <Row>
                <Col lg={6}>
                    <div className='pt-5'>
                        <Link to='/' className='text-decoration-none'>
                            <span className='d-flex align-items-center text-dark'>
                                <Image src={backicon} fluid className='pe-2' />
                                Go Back
                            </span>
                        </Link>
                    </div>
                    <div className='text-center py-4'>
                        <Image src={Logoblack} fluid />
                    </div>
                    <div className='mb-4'>
                        <h4>Welcome to</h4>
                        <h2>Dwell Away Holiday Homes</h2>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Username or Email Address" className='loginformcontrol loginemail' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="password" placeholder="Password" className='loginformcontrol loginpassword' />
                        </Form.Group>
                        <div className='pt-4'>
                            <Link to='/dashboard'>
                                <Button variant="dark" className='w-100 loginformbtn' >Login</Button>
                            </Link>
                        </div>
                    </Form>
                    <div className='text-center py-4'>
                        <span>Don’t have an account? <Link to='/signup'><a href="#" className='text-dark fw-semibold'>Sign up</a></Link></span>
                    </div>
                </Col>
                <Col lg={6} className='mt-3'>
                    <div className="slider-container loginslider text-center position-relative">
                        <div className='position-absolute top-0 start-0 z-1'>
                            <Button variant="outline-dark" className='sliderbookbtn'>Book Your Vacation Now</Button>
                        </div>
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div key={1}>
                                <Image src={loginsliderimg} fluid />
                            </div>
                            <div key={2}>
                                <Image src={loginsliderimg} fluid />
                            </div>
                            <div key={3}>
                                <Image src={loginsliderimg} fluid />
                            </div>
                        </Slider>
                        <div className='position-absolute bottom-0 start-0'>
                            <Button variant='dark' className="loginsliderbackbtn" onClick={previous}>
                                <Image src={loginsliderbackarrow} fluid />
                            </Button>
                        </div>
                        <div className='position-absolute bottom-0 end-0'>
                            <Button variant='light' className="loginslidernextbtn" onClick={next}>
                                <Image src={loginslidernextarrow} fluid />
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login