import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import airbnbLogo from '../assets/images/airbnb.png'
import bookingdotcomLogo from '../assets/images/bookingdotcom.png'
import expediaLogo from '../assets/images/expedia.png'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import chevroncircleleft from '../assets/images/chevroncircleleft.png'
import chevroncircleright from '../assets/images/chevroncircleright.png'

const Partners = () => {

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
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    const slidesData = [
        {
            id: 1,
            img: airbnbLogo,
        },
        {
            id: 2,
            img: bookingdotcomLogo,
        },
        {
            id: 3,
            img: expediaLogo,
        },
        {
            id: 4,
            img: airbnbLogo,
        },
        {
            id: 5,
            img: bookingdotcomLogo,
        },
        {
            id: 6,
            img: expediaLogo,
        },
    ]

    return (
        <div className='overflow-hidden my-5'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='text-center mb-4'>
                            <h2 className='partnerstitle'>Our Trusted Partners</h2>
                        </div>
                        <div className="slider-container text-center">
                            <div style={{ textAlign: "center" }} className='mb-5'>
                                <Button variant="light" onClick={previous} className='rounded-circle border border-dark me-2' style={{ width: "50px", height: '50px' }}>
                                    <Image src={chevroncircleleft} width={12} className='img-fluid' />
                                </Button>
                                <Button variant="light" onClick={next} className='rounded-circle border border-dark' style={{ width: "50px", height: '50px' }}>
                                    <Image src={chevroncircleright} width={12} className='img-fluid' />
                                </Button>
                            </div>
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}

                            >
                                {slidesData.map((item, index) => <div key={index} className='d-flex align-items-center justify-content-center'>
                                    <Card style={{ width: '300px', height: '200px' }} className='d-flex align-items-center justify-content-center border-0 shadow'>
                                        <Image src={item.img} className='img-fluid' width={200} />
                                    </Card>
                                </div>)}
                            </Slider>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Partners