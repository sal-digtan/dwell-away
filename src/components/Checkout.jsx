import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import paymentcardsimg from '../assets/images/paymentcards.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import modalimg from '../assets/images/modalimg.png'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className='px-lg-5 px-3 my-4'>
            <Row>
                <Col lg={7} md={7} className='mb-3'>
                    <div>
                        <h3>Booking Address</h3>
                    </div>
                    <Form className='shadow p-3 rounded'>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Check aria-label="option 1" label='Create an account for later use' />
                            </Col>
                        </Row>
                    </Form>
                    <div className='my-3'>
                        <h3>
                            Select any Add-ons
                        </h3>
                    </div>
                    <Form className='shadow p-3 rounded'>
                        <Row>
                            <Col lg={4}>
                                <Form.Check aria-label="option 1" label='Daily Cleaning - AED 20' style={{ fontSize: '15px' }} />
                            </Col>
                            <Col lg={4}>
                                <Form.Check aria-label="option 1" label='Laundering & Ironing - AED 50' style={{ fontSize: '15px' }} />
                            </Col>
                            <Col lg={4}>
                                <Form.Check aria-label="option 1" label='Extra Towels - AED 10' style={{ fontSize: '15px' }} />
                            </Col>
                            <Col lg={4}>
                                <Form.Check aria-label="option 1" label='Extra Accessories - AED 30' style={{ fontSize: '15px' }} />
                            </Col>
                            <Col lg={4}>
                                <Form.Check aria-label="option 1" label='Others (Please specify)' style={{ fontSize: '15px' }} />
                            </Col>
                        </Row>
                    </Form>
                    <div className='my-3'>
                        <h3>
                            Payment Method
                        </h3>
                    </div>
                    <Form className='shadow p-3 rounded'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Form.Check type="radio" aria-label="radio 1" label='Pay with Credit Card' />
                            <Image src={paymentcardsimg} fluid />
                        </div>
                        <Row className='mt-3'>
                            <Col lg={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email address" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="1234 1234 1234 1234" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Expiration Date</Form.Label>
                                    <Form.Control type="text" placeholder="MM / YY" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Security Date</Form.Label>
                                    <Form.Control type="text" placeholder="CVC" className='rounded-0 border-0 border-bottom' />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Label>Country</Form.Label>
                                <Form.Select aria-label="Default select example" className='rounded-0 border-0 border-bottom'>
                                    <option>Dubai</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col lg={5} md={5}>
                    <div>
                        <h3>Billing Summary</h3>
                    </div>
                    <Card className='border-0 shadow'>
                        <Card.Body>
                            <div className='d-flex justify-content-between previewcardtextcon'>
                                <p>Property Name</p>
                                <p className='fw-semibold text-end'>Highest infinity Pool in Downtown Dubai</p>
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
                            <div className='my-3'>
                                <Form.Check aria-label="option 1" label='Please check to acknowledge Terms of Service and Privacy Policy' style={{ fontSize: '12px' }} />
                            </div>
                            <div>
                                <Button variant='dark' className='w-100 previewcontinuebtn' onClick={handleShow}>Pay 3,666.00</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Modal */}
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header className='d-flex align-items-center justify-content-center flex-column'>
                    <Modal.Title className='modaltitle'>Your Booking is Confirmed</Modal.Title>
                    <p className='text-center' style={{ color: '#959595' }} >Check details on your dashboard or email.
                        <span className='d-block'> Enjoy your stay with Dwell Away</span>
                    </p>
                </Modal.Header>
                <Modal.Body className='border-0'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <Image src={modalimg} fluid rounded style={{ width: "100%" }} />
                        </Col>
                        <Col lg={6}>
                            <div className='d-flex justify-content-between mb-2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                                <p>Booking Reference No.</p>
                                <p className='fw-semibold'>123456</p>
                            </div>
                            <div className='d-flex justify-content-between mb-2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                                <p>Total Guests</p>
                                <p className='fw-semibold'>5</p>
                            </div>
                            <div className='d-flex justify-content-between mb-2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                                <p>Check In</p>
                                <p className='fw-semibold'>27 / 09 / 2024</p>
                            </div>
                            <div className='d-flex justify-content-between mb-2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                                <p>Check Out</p>
                                <p className='fw-semibold'>27 / 09 / 2024</p>
                            </div>
                            <div className='d-flex justify-content-between mb-2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                                <p>Check Out</p>
                                <p className='fw-semibold'>27 / 09 / 2024</p>
                            </div>
                            <div className='d-flex justify-content-between mb-2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                                <p>Amount Paid</p>
                                <p className='fw-semibold'>AED 3,000</p>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Link to='/' className='w-100'>
                        <Button variant="dark" onClick={handleClose} className='w-100 modalclosebtn' >
                            Back to Home
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Checkout