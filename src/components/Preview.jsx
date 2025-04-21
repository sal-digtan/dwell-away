import React, { useState, useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import previewsliderimg from '../assets/images/previewsliderimg.png'
import previewthumb1 from '../assets/images/previewthumb1.png'
import previewthumb2 from '../assets/images/previewthumb2.png'
import previewthumb3 from '../assets/images/previewthumb3.png'
import previewthumb4 from '../assets/images/previewthumb4.png'
import previewthumb5 from '../assets/images/previewthumb5.png'
import previewthumb6 from '../assets/images/previewthumb6.png'
import Slider from "react-slick";
import Image from 'react-bootstrap/Image'
import chevroncircleleft from '../assets/images/chevroncircleleft.png'
import chevroncircleright from '../assets/images/chevroncircleright.png'
import Button from 'react-bootstrap/Button';
import mapmarker from '../assets/images/mapmarker.png'
import shareicon from '../assets/images/shareicon.png'
import Card from 'react-bootstrap/Card';

const Preview = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const next = () => {
        sliderRef1.slickNext();
    };
    const previous = () => {
        sliderRef1.slickPrev();
    };

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    var settings = {
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    };

    return (
        <Container fluid className='px-lg-5 my-5'>
            <Row>
                <Col lg={5} className='mb-3'>
                    <div className="slider-container position-relative">
                        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} arrows={false}>
                            <div>
                                <Image src={previewsliderimg} fluid className='previewsliderimg' />
                            </div>
                            <div>
                                <Image src={previewsliderimg} fluid className='previewsliderimg' />
                            </div>
                            <div>
                                <Image src={previewsliderimg} fluid className='previewsliderimg' />
                            </div>
                            <div>
                                <Image src={previewsliderimg} fluid className='previewsliderimg' />
                            </div>
                            <div>
                                <Image src={previewsliderimg} fluid className='previewsliderimg' />
                            </div>
                            <div>
                                <Image src={previewsliderimg} fluid className='previewsliderimg' />
                            </div>
                        </Slider>
                        <Slider
                            asNavFor={nav1}
                            ref={slider => (sliderRef2 = slider)}
                            slidesToShow={6}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            {...settings}
                            arrows={false}
                        >
                            <div>
                                <Image src={previewthumb1} fluid style={{ width: '100%' }} />
                            </div>
                            <div>
                                <Image src={previewthumb2} fluid style={{ width: '100%' }} />
                            </div>
                            <div>
                                <Image src={previewthumb3} fluid style={{ width: '100%' }} />
                            </div>
                            <div>
                                <Image src={previewthumb4} fluid style={{ width: '100%' }} />
                            </div>
                            <div>
                                <Image src={previewthumb5} fluid style={{ width: '100%' }} />
                            </div>
                            <div>
                                <Image src={previewthumb6} fluid style={{ width: '100%' }} />
                            </div>
                        </Slider>
                        <div className='previwesliderbtncon position-absolute top-0 start-0 py-3 px-4'>
                            <button className="previwesliderbtn me-2" onClick={previous}>
                                <Image src={chevroncircleleft} fluid width={10} />
                            </button>
                            <button className="previwesliderbtn" onClick={next}>
                                <Image src={chevroncircleright} fluid width={10} />
                            </button>
                        </div>
                        <div className='moresliderbtncon d-flex align-items-center justify-content-center position-absolute top-0 end-0 py-3 px-4'>
                            <Button variant="light" className='moresliderbtn me-2 d-flex align-items-center justify-content-center'>
                                <Image src={mapmarker} width={18} />
                            </Button>
                            <Button variant="light" className='moresliderbtn d-flex align-items-center justify-content-center'>
                                <Image src={shareicon} width={14} />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                    <div>
                        <h3>Booking Preview</h3>
                    </div>
                    <Card className='border-0 shadow'>
                        <Card.Body>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Property Name</p>
                                <p className='fw-semibold'>Highest infinity Pool in Downtown Dubai</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Property ID</p>
                                <p className='fw-semibold'>123456</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Move In</p>
                                <p className='fw-semibold'>27 / 09 / 2024</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Move Out</p>
                                <p className='fw-semibold'>30 / 09 / 2024</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Guests</p>
                                <p className='fw-semibold'>5</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 shadow mt-2'>
                        <Card.Body>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p className='fw-semibold'>Booking Amount <span className='d-block fw-normal' style={{ fontSize: '12px' }} >Charges Including VAT and others</span></p>
                                <p className='fw-semibold'>AED 3,491.00</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Subtotal</p>
                                <p>AED 3,491.00</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Cleaning Charges</p>
                                <p>AED 350</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Discount</p>
                                <p>AED 175</p>
                            </div>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p className='fw-semibold'>Grand Total</p>
                                <p className='fw-semibold'>AED 3,666.00</p>
                            </div>
                            <div>
                                <Button variant='dark' className='w-100 previewcontinuebtn'>Continue</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Preview