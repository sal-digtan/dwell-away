import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import arrowdown from '../assets/images/arrowdown.png';
import Button from 'react-bootstrap/Button';
import arrowmedium from '../assets/images/arrowmedium.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg from '../assets/images/sliderimg.png'
import staricon from '../assets/images/staricon.png'
import residenceimg1 from '../assets/images/residenceimg1.png'
import residenceimg2 from '../assets/images/residenceimg2.png'
import residenceimg3 from '../assets/images/residenceimg3.png'
import bediconwhite from '../assets/images/bediconwhite.png'
import bathiconwhite from '../assets/images/bathiconwhite.png'
import parkingiconwhite from '../assets/images/parkingiconwhite.png'
import chevronright from '../assets/images/chevronright.png'

const Residence = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    return (
        <Container fluid className='px-lg-5 px-4 my-5'>
            <Row>
                <Col lg={8} className='mb-4 mb-lg-0'>
                    <div className='d-flex align-items-end mb-3'>
                        <h2 className='text-capitalize residencetitle'><span className='colorvar'>Find The</span> Most
                            <span className='d-block'>Appropriate Residence</span>
                            For your <span className='colorvar'>to live in</span></h2>
                        <Image src={arrowdown} className='img-fluid' />
                    </div>
                    <div>
                        <Button variant="outline-secondary viewbtn">View All
                            <Image src={arrowmedium} className='img-fluid ps-2' />
                        </Button>
                    </div>
                </Col>
                <Col lg={4}>
                    <Slider {...settings}>
                        <div>
                            <div className='d-flex align-items-center slidertitlebg mb-4'>
                                <Image src={sliderimg} width={27} className='img-fluid' />
                                <span className='fst-italic text-uppercase'>top testimonial</span>
                            </div>
                            <div>
                                <p>Incredible Experience with
                                    Dwell! Their experience and
                                    dedication made fiding my perfect...
                                </p>
                                <p className='d-flex align-items-baseline'>
                                    <Image src={staricon} className='pe-2' />4.8
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex align-items-center slidertitlebg mb-4'>
                                <Image src={sliderimg} width={27} className='img-fluid' />
                                <span className='fst-italic text-uppercase'>top testimonial</span>
                            </div>
                            <div>
                                <p>Incredible Experience with
                                    Dwell! Their experience and
                                    dedication made fiding my perfect...
                                </p>
                                <p className='d-flex align-items-baseline'>
                                    <Image src={staricon} className='pe-2' />4.8
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex align-items-center slidertitlebg mb-4'>
                                <Image src={sliderimg} width={27} className='img-fluid' />
                                <span className='fst-italic text-uppercase'>top testimonial</span>
                            </div>
                            <div>
                                <p>Incredible Experience with
                                    Dwell! Their experience and
                                    dedication made fiding my perfect...
                                </p>
                                <p className='d-flex align-items-baseline'>
                                    <Image src={staricon} className='pe-2' />4.8
                                </p>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
            <Row className='my-5 d-flex flex-wrap'>
                <Col lg={6} md={4} className='mb-3 mb-lg-0'>
                    <div className='position-relative h-100'>
                        <Image src={residenceimg1} className='img-fluid h-100' style={{ width: '100%' }} />
                        <div className='position-absolute bottom-0 start-0 p-4 w-100'>
                            <h2 className='text-white text-uppercase fw-normal'>Business Day
                                <span className='d-block fw-bold'>Dubai United Arab Emirate</span></h2>
                            <div>
                                <span className='text-white me-3'>
                                    <Image src={bediconwhite} className='pe-2' />2 Beds
                                </span>
                                <span className='text-white me-3'>
                                    <Image src={bathiconwhite} className='pe-2' />2 Bath
                                </span>
                                <span className='text-white me-3'>
                                    <Image src={parkingiconwhite} className='pe-2' />1 Parking
                                </span>
                            </div>
                            <div className='mt-4'>
                                <Button variant="light" className='d-block w-100 text-start readmorebtn d-flex align-items-center justify-content-between'>Read More
                                    <Image src={chevronright} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4} className='mb-3 mb-lg-0'>
                    <div className='position-relative h-100'>
                        <Image src={residenceimg2} className='img-fluid h-100' style={{ width: '100%' }} />
                        <div className='position-absolute bottom-0 start-0 p-4 w-100'>
                            <h2 className='text-white text-uppercase residencecardtitle'>Business Day
                                <span className='d-block fw-bold'>Dubai United Arab Emirate</span></h2>
                            <div>
                                <span className='text-white me-3 residenceicontext'>
                                    <Image src={bediconwhite} className='pe-2' width={20} />2 Beds
                                </span>
                                <span className='text-white me-3 residenceicontext'>
                                    <Image src={bathiconwhite} className='pe-2' width={20} />2 Bath
                                </span>
                                <span className='text-white me-3 residenceicontext'>
                                    <Image src={parkingiconwhite} className='pe-2' width={20} />1 Parking
                                </span>
                            </div>
                            <div className='mt-4'>
                                <Button variant="light" className='d-block w-100 text-start readmorebtn d-flex align-items-center justify-content-between'>Read More
                                    <Image src={chevronright} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4} className='mb-3 mb-lg-0'>
                    <div className='position-relative h-100'>
                        <Image src={residenceimg3} className='img-fluid h-100' style={{ width: '100%' }} />
                        <div className='position-absolute bottom-0 start-0 p-4 w-100'>
                            <h2 className='text-white text-uppercase residencecardtitle'>Business Day
                                <span className='d-block fw-bold'>Dubai United Arab Emirate</span></h2>
                            <div>
                                <span className='text-white me-3 residenceicontext'>
                                    <Image src={bediconwhite} className='pe-2' width={20} />2 Beds
                                </span>
                                <span className='text-white me-3 residenceicontext'>
                                    <Image src={bathiconwhite} className='pe-2' width={20} />2 Bath
                                </span>
                                <span className='text-white me-3 residenceicontext'>
                                    <Image src={parkingiconwhite} className='pe-2' width={20} />1 Parking
                                </span>
                            </div>
                            <div className='mt-4'>
                                <Button variant="light" className='d-block w-100 text-start readmorebtn d-flex align-items-center justify-content-between'>Read More
                                    <Image src={chevronright} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Residence