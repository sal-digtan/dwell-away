import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import listingdetailimg1 from '../assets/images/listingdetailimg1.png'
import listingdetailimg2 from '../assets/images/listingdetailimg2.png'
import detailslider from '../assets/images/detailslider.png'
import listingdetailimg3 from '../assets/images/listingdetailimg3.png'
import listingdetailimg4 from '../assets/images/listingdetailimg4.png'
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import detailarrowleft from '../assets/images/detailarrowleft.png'
import detailarrowright from '../assets/images/detailarrowright.png'

const ListingDetail = () => {

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
    };

    return (
        <Container fluid className='px-5 my-4'>
            <Row>
                <Col lg={2} md={6} className='mb-2 order-2 order-lg-1'>
                    <div className='mb-2'>
                        <Image src={listingdetailimg1} className='img-fluid listingdetailimg ' rounded />
                    </div>
                    <div>
                        <Image src={listingdetailimg2} className='img-fluid listingdetailimg ' rounded />
                    </div>
                </Col>
                <Col lg={8} className='mb-2 order-1 order-lg-1'>
                    <div className="slider-container listingdetailslider text-center position-relative">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div key={1}>
                                <Image src={detailslider} className='img-fluid' />
                                <div className='mt-3'>
                                    <Button variant="dark" className='w-100 booksliderbtn'>Book Now</Button>
                                </div>
                            </div>
                            <div key={2}>
                                <Image src={detailslider} className='img-fluid' />
                                <div className='mt-3'>
                                    <Button variant="dark" className='w-100 booksliderbtn'>Book Now</Button>
                                </div>
                            </div>
                            <div key={3}>
                                <Image src={detailslider} className='img-fluid' />
                                <div className='mt-3'>
                                    <Button variant="dark" className='w-100 booksliderbtn'>Book Now</Button>
                                </div>
                            </div>
                        </Slider>
                        <div style={{ textAlign: "center" }} className='position-absolute top-0 end-0'>
                            <Button variant='dark' className="detailsliderbtn me-2" onClick={previous}>
                                <Image src={detailarrowleft} className='img-fluid' />
                            </Button>
                            <Button variant='dark' className="detailsliderbtn" onClick={next}>
                                <Image src={detailarrowright} className='img-fluid' />
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={2} md={6} className='mb-2 order-2 order-lg-1'>
                    <div className='mb-2'>
                        <Image src={listingdetailimg3} className='img-fluid listingdetailimg' rounded />
                    </div>
                    <div>
                        <Image src={listingdetailimg4} className='img-fluid listingdetailimg' rounded />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ListingDetail