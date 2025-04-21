import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import arrowmedium from '../assets/images/arrowmedium.png'
import holidayimg1 from '../assets/images/holidayimg1.png'
import holidayimg2 from '../assets/images/holidayimg2.png'
import holidayimg3 from '../assets/images/holidayimg3.png'
import holidayimg4 from '../assets/images/holidayimg4.png'
import holidayimg5 from '../assets/images/holidayimg5.png'
import holidayimg6 from '../assets/images/holidayimg6.png'
import bediconblack from '../assets/images/bediconblack.png'
import bathiconblack from '../assets/images/bathiconblack.png'
import parkingiconblack from '../assets/images/parkingiconblack.png'

const HolidayListing = () => {
    return (
        <Container fluid className='px-lg-5 px-4 my-5'>
            <Row className='mb-5'>
                <Col lg={7}>
                    <div>
                        <h2 className='holidaytitle'>Dwell Away Holidays
                            <span className='d-block'> Home - Listings</span></h2>
                    </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                    </div>
                    <div>
                        <Button variant="outline-secondary viewbtn">View All
                            <Image src={arrowmedium} className='img-fluid ps-2' />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={6} className='mb-4'>
                    <div className='h-100'>
                        <div className='mb-2'>
                            <Image src={holidayimg1} className='img-fluid holidayimg' style={{ height: '425px', width: '100%' }} rounded />
                        </div>
                        <div className='mb-2'>
                            <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                            <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                        </div>
                        <div>
                            <span className='me-2 holidayicontext'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                            <span className='me-2 holidayicontext'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                            <span className='me-2 holidayicontext'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} className='mb-4'>
                    <div className='h-100'>
                        <div className='mb-2'>
                            <Image src={holidayimg2} className='img-fluid holidayimg' style={{ height: '425px', width: '100%' }} rounded />
                        </div>
                        <div className='mb-2'>
                            <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                            <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                        </div>
                        <div>
                            <span className='me-2 holidayicontext'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                            <span className='me-2 holidayicontext'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                            <span className='me-2 holidayicontext'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} className='mb-4'>
                    <div className='h-100'>
                        <div className='mb-2'>
                            <Image src={holidayimg3} className='img-fluid holidayimg' style={{ height: '425px', width: '100%' }} rounded />
                        </div>
                        <div className='mb-2'>
                            <span className='d-block fw-semibold'>Highest infinity Pool in Downtown Dubai</span>
                            <span className='d-block' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                        </div>
                        <div>
                            <span className='me-2 holidayicontext'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                            <span className='me-2 holidayicontext'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                            <span className='me-2 holidayicontext'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} className='mb-4'>
                    <div className='h-100'>
                        <div className='mb-2'>
                            <Image src={holidayimg3} className='img-fluid holidayimg' style={{ height: '425px', width: '100%' }} rounded />
                        </div>
                        <div className='mb-2'>
                            <span className='d-block fw-semibold'>Highest infinity Pool in Downtown Dubai</span>
                            <span className='d-block' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                        </div>
                        <div>
                            <span className='me-2 holidayicontext'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                            <span className='me-2 holidayicontext'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                            <span className='me-2 holidayicontext'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} className='mb-4'>
                    <div className='h-100'>
                        <div className='mb-2'>
                            <Image src={holidayimg1} className='img-fluid holidayimg' style={{ height: '425px', width: '100%' }} rounded />
                        </div>
                        <div className='mb-2'>
                            <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                            <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                        </div>
                        <div>
                            <span className='me-2 holidayicontext'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                            <span className='me-2 holidayicontext'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                            <span className='me-2 holidayicontext'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} className='mb-4'>
                    <div className='h-100'>
                        <div className='mb-2'>
                            <Image src={holidayimg2} className='img-fluid holidayimg' style={{ height: '425px', width: '100%' }} rounded />
                        </div>
                        <div className='mb-2'>
                            <span className='d-block fw-semibold holidaylistingtitle'>Highest infinity Pool in Downtown Dubai</span>
                            <span className='d-block holidaylistingtitle' style={{ color: "#959595" }}>Business Bay, Dubai</span>
                        </div>
                        <div>
                            <span className='me-2 holidayicontext'><Image src={bediconblack} className='img-fluid me-2' width={20} />2 Beds</span>
                            <span className='me-2 holidayicontext'><Image src={bathiconblack} className='img-fluid me-2' width={20} />2 Bath</span>
                            <span className='me-2 holidayicontext'><Image src={parkingiconblack} className='img-fluid me-2' width={20} />1 Parking</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HolidayListing