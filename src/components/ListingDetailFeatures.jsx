import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import bedicon from '../assets/images/bedicon.png'
import bathicon from '../assets/images/bathiconblack.png'
import parkingicon from '../assets/images/parkingiconblack.png'
import chevrondown from '../assets/images/chevrondown.png'


const ListingDetailFeatures = () => {
    return (
        <Container fluid className='px-5 my-5'>
            <Row>
                <Col lg={6} md={6}>
                    <div>
                        <h3>Overview</h3>
                    </div>
                    <Row className='shadow p-3'>
                        <Col lg={4} className='mb-2'>
                            <span>
                                <Image src={bedicon} fluid className='pe-2' />
                                2 Bath
                            </span>
                        </Col>
                        <Col lg={4} className='mb-2'>
                            <span>
                                <Image src={bathicon} fluid className='pe-2' />
                                2 Beds
                            </span>
                        </Col>
                        <Col lg={4} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                1 Parking
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} className='mt-3 mt-lg-0 mt-md-0'>
                    <div>
                        <h3>Safety and Hygiene</h3>
                    </div>
                    <Row className='shadow p-3'>
                        <Col lg={4} className='mb-2'>
                            <span>
                                <Image src={bedicon} fluid className='pe-2' />
                                Disinfections
                            </span>
                        </Col>
                        <Col lg={4} className='mb-2'>
                            <span>
                                <Image src={bathicon} fluid className='pe-2' />
                                Fire Extinguishers
                            </span>
                        </Col>
                        <Col lg={4} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Smoke Detectors
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} className='mt-4'>
                    <div>
                        <h3>Offered Amenities</h3>
                    </div>
                    <Row className='p-3' style={{ borderBottom: '1px solid #F0F0F0' }}>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={bedicon} fluid className='pe-2' />
                                Wireless
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={bathicon} fluid className='pe-2' />
                                Gym
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                    </Row>
                    <Row className='shadow p-3' style={{ borderBottom: '1px solid #F0F0F0' }}>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={bedicon} fluid className='pe-2' />
                                Wireless
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={bathicon} fluid className='pe-2' />
                                Gym
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <Image src={parkingicon} fluid className='pe-2' />
                                Kitchen
                            </span>
                        </Col>
                        <Col lg={2} md={6} className='mb-2'>
                            <span>
                                <a href="#" className='fst-italic text-dark fw-semibold'>
                                    View All
                                    <Image src={chevrondown} fluid className='ps-2' />
                                </a>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ListingDetailFeatures