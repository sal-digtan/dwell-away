import React, { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import testimonialimg1 from '../assets/images/testimonialimg1.png'
import testimonialimg2 from '../assets/images/testimonialimg2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {


    return (
        <div className='overflow-hidden'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='text-center mb-4'>
                            <h2 className='text-capitalize' style={{ fontSize: 'clamp(35px, 5vw, 50px)' }}>Testimonials - Our guests have
                                <span className='d-block'>expressed gratitude</span></h2>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Navigation]}
                            centeredSlides={true}
                            centeredSlidesBounds={1}
                            className="testimonialslider"
                            breakpoints={{
                                400: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg1} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Andrew Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg2} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Anna Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg1} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Andrew Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg2} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Anna Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg1} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Andrew Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg2} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Anna Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='border-0 me-4 bg-transparent'>
                                    <Card.Body>
                                        <div className='d-flex align-items-end'>
                                            <Image src={testimonialimg2} className='img-fluid pe-2' />
                                            <div>
                                                <Card.Title className='text-start'>Anna Mathew</Card.Title>
                                                <Card.Subtitle className="mb-2 text-start">Guest</Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='mt-3 text-center'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial