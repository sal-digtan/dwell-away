import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef } from "react";
import Slider from "react-slick";
import Image from 'react-bootstrap/Image';
import holidayimg1 from '../assets/images/holidayimg1.png'
import holidayimg2 from '../assets/images/holidayimg2.png'
import holidayimg3 from '../assets/images/holidayimg3.png'
import bediconblack from '../assets/images/bediconblack.png'
import bathiconblack from '../assets/images/bathiconblack.png'
import parkingiconblack from '../assets/images/parkingiconblack.png'
import chevroncircleleft from '../assets/images/chevroncircleleft.png'
import chevroncircleright from '../assets/images/chevroncircleright.png'
import Button from 'react-bootstrap/Button';
import arrowsmall from '../assets/images/arrowsmall.png'

const ListingDetailBrowse = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container fluid className='px-5 my-5'>
            <Row>
                <Col>
                    <div className='text-center mb-4'>
                        <h2>Browse More</h2>
                    </div>
                    <div className="slider-container position-relative">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div key={1} className='mx-2'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg1} className='img-fluid' style={{ height: '425px', width: '100%' }} rounded />
                                    </div>
                                    <div className='mb-2'>
                                        <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                                        <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                                    </div>
                                    <div className='d-flex'>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                                    </div>
                                </div>
                            </div>
                            <div key={2} className='mx-2'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg2} className='img-fluid' style={{ height: '425px', width: '100%' }} rounded />
                                    </div>
                                    <div className='mb-2'>
                                        <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                                        <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                                    </div>
                                    <div className='d-flex'>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                                    </div>
                                </div>
                            </div>
                            <div key={3} className='mx-2'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg3} className='img-fluid' style={{ height: '425px', width: '100%' }} rounded />
                                    </div>
                                    <div className='mb-2'>
                                        <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                                        <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                                    </div>
                                    <div className='d-flex'>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                                        <span className='me-2 holidayicontext d-flex align-items-center'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className='browsesliderbtncon d-flex' >
                            <button className="browsesliderbtn me-2" onClick={previous}>
                                <Image src={chevroncircleleft} fluid />
                            </button>
                            <button className="browsesliderbtn" onClick={next}>
                                <Image src={chevroncircleright} fluid />
                            </button>
                        </div>
                    </div>
                    <div className='text-center my-4'>
                        <Button variant="light" className='browsebtn'>View All
                            <Image src={arrowsmall} fluid className='ps-2' />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ListingDetailBrowse