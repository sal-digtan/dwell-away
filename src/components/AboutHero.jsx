import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import heroimg1 from '../assets/images/heroimg1.png'
import heroimg2 from '../assets/images/heroimg2.png'
import arrowbig from '../assets/images/arrowbig.png'
import arrowsmall from '../assets/images/arrowsmall.png'
import { useLocation } from 'react-router-dom'


const AboutHero = () => {

    const pathname = useLocation()
    console.log(pathname);
    console.log(pathname === "/contact");
    console.log(pathname === "/");

    return (
        <Container fluid className='px-5 aboutbg mb-5'>
            <Row className='align-items-center justify-content-center'>
                {pathname === "/contact" ? <div className='text-center pt-5'>
                    <h2 className='text-uppercase abouttitle'>Contact Us</h2>
                </div> : <div className='text-center pt-5'>
                    <h2 className='text-uppercase abouttitle'>About Us</h2>
                </div>}
                <Col className='mt-lg-5 mb-lg-4 mt-3 mb-3' lg={3}>
                    <div className='hero-imgcon'>
                        <Image src={heroimg1} className='mb-3 img-fluid' style={{ width: "100%" }} />
                        <span className='d-flex align-items-center justify-content-between'>
                            <h4>Iconic Architecture</h4>
                            <Image src={arrowbig} />
                        </span>
                        <span className='d-flex align-items-baseline'>
                            <p className='pe-2'>Explore More</p>
                            <Image src={arrowsmall} />
                        </span>
                    </div>
                </Col>
                <Col className='mb-lg-4 mt-lg-5 mt-3 mb-3' lg={4}>
                    <div className='hero-imgcon'>
                        <Image src={heroimg2} className='mb-3 img-fluid' style={{ width: "100%" }} />
                        <span className='d-flex align-items-center justify-content-between'>
                            <h4>Iconic Architecture</h4>
                            <Image src={arrowbig} />
                        </span>
                        <span className='d-flex align-items-baseline'>
                            <p className='pe-2'>Explore More</p>
                            <Image src={arrowsmall} />
                        </span>
                    </div>
                </Col>
                <Col className='mb-lg-4 mt-lg-5 mt-3 mb-3' lg={3}>
                    <div className='hero-imgcon'>
                        <Image src={heroimg2} className='mb-3 img-fluid' style={{ width: "100%" }} />
                        <span className='d-flex align-items-center justify-content-between'>
                            <h4>Iconic Architecture</h4>
                            <Image src={arrowbig} />
                        </span>
                        <span className='d-flex align-items-baseline'>
                            <p className='pe-2'>Explore More</p>
                            <Image src={arrowsmall} />
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutHero