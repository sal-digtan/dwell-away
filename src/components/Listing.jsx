import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import bookIcon from '../assets/images/bookicon.png';
import checkdateicon from '../assets/images/checkdateicon.png';
import guesticon from '../assets/images/guesticon.png';
import bedicon from '../assets/images/bedicon.png';
import Button from 'react-bootstrap/Button';
import holidayimg1 from '../assets/images/holidayimg1.png'
import bediconblack from '../assets/images/bediconblack.png'
import bathiconblack from '../assets/images/bathiconblack.png'
import parkingiconblack from '../assets/images/parkingiconblack.png'
import holidayimg2 from '../assets/images/holidayimg2.png'
import holidayimg3 from '../assets/images/holidayimg3.png'
import listingmap from '../assets/images/listingmap.png'
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom'

const Listing = () => {

    return (
        <Container fluid className='p-lg-5 px-4'>
            <Row>
                <Col lg={12} className='pb-4 px-4'>
                    <Row className='listingsearchcon align-items-center justify-content-between'>
                        <Col lg={2} className='mb-2 mb-lg-0'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                                    <Image src={bookIcon} />
                                </div>
                                <Form.Select aria-label="Default select example" className='bg-transparent border-0' style={{ fontSize: '13px' }}>
                                    <option>Book Your Stay</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col lg={2} className='mb-2 mb-lg-0'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                                    <Image src={checkdateicon} />
                                </div>
                                <Form.Select aria-label="Default select example" className='bg-transparent border-0' style={{ fontSize: '13px' }}>
                                    <option>Check In Date</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col lg={2} className='mb-2 mb-lg-0'>
                            <div className='d-flex align-items-center '>
                                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                                    <Image src={checkdateicon} />
                                </div>
                                <Form.Select aria-label="Default select example" className='bg-transparent border-0' style={{ fontSize: '13px' }}>
                                    <option>Check Out Date</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col lg={2} className='mb-2 mb-lg-0'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                                    <Image src={guesticon} />
                                </div>
                                <Form.Select aria-label="Default select example" className='bg-transparent border-0' style={{ fontSize: '13px' }}>
                                    <option>Select Guest</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col lg={2} className='mb-2 mb-lg-0'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                                    <Image src={bedicon} />
                                </div>
                                <Form.Select aria-label="Default select example" className='bg-transparent border-0' style={{ fontSize: '13px' }}>
                                    <option>Select Bed & Bath</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col lg={1} className='mb-2  mb-lg-0 d-flex align-items-center justify-content-center'>
                            <Button variant="dark" className='searchbtn'>Search</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={7}>
                    <Row>
                        <Col lg={6} className='mb-4'>
                            <Link to='/listing-detail' className='text-decoration-none text-dark'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg1} className='img-fluid' style={{ height: '300px', width: '100%' }} rounded />
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
                            </Link>
                        </Col>
                        <Col lg={6} className='mb-4'>
                            <Link to='/listing-detail' className='text-decoration-none text-dark'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg2} className='img-fluid' style={{ height: '300px', width: '100%' }} rounded />
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
                            </Link>
                        </Col>
                        <Col lg={6} className='mb-4'>
                            <Link to='/listing-detail' className='text-decoration-none text-dark'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg3} className='img-fluid' style={{ height: '300px', width: '100%' }} rounded />
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
                            </Link>
                        </Col>
                        <Col lg={6} className='mb-4'>
                            <Link to='/listing-detail' className='text-decoration-none text-dark'>
                                <div className='h-100'>
                                    <div className='mb-2'>
                                        <Image src={holidayimg1} className='img-fluid' style={{ height: '300px', width: '100%' }} rounded />
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
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <Image src={listingmap} className='img-fluid' />
                </Col>
            </Row>
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <Pagination>
                    <Pagination.Prev className='me-2' />
                    <Pagination.Item className='me-2' active>{1}</Pagination.Item>
                    <Pagination.Item className='me-2'>{2}</Pagination.Item>
                    <Pagination.Item className='me-2'>{3}</Pagination.Item>
                    <Pagination.Ellipsis className='me-2' />
                    <Pagination.Item className='me-2'>{10}</Pagination.Item>
                    <Pagination.Next className='me-2' />
                </Pagination>
            </div>
        </Container>
    )
}

export default Listing