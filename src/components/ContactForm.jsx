import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import contactimg from '../assets/images/contactimg.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contacticon1 from '../assets/images/contacticon1.png'
import contacticon2 from '../assets/images/contacticon2.png'
import contacticon3 from '../assets/images/contacticon3.png'

const ContactForm = () => {
    return (
        <Container fluid className='p-5'>
            <Row>
                <Col lg={6}>
                    <Image src={contactimg} className='img-fluid' />
                </Col>
                <Col lg={6}>
                    <div><h2 className='contactformtitle'>Facing any issues with your booking or need some help?</h2></div>
                    <Form className='pt-3'>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="email" placeholder="" className='border-0 border-bottom border-secondary rounded-0' />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={2} className='border-0 border-bottom border-secondary rounded-0' />
                                </Form.Group>
                            </Col>
                            <Col lg={12} className='mt-3'>
                                <Button variant="dark" className='w-100 contactbtn'>Send</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col lg={4} className='mt-5'>
                    <Card className='d-flex align-items-center justify-content-center contactcard p-4'>
                        <div className='cardiconcon d-flex align-items-center justify-content-center'>
                            <Image src={contacticon1} className='img-fluid cardicon' />
                        </div>
                        <p className='pt-3 fw-semibold'>Our Email</p>
                        <p>info@dwell-away.com</p>
                    </Card>
                </Col>
                <Col lg={4} className='mt-5'>
                    <Card className='d-flex align-items-center justify-content-center contactcard p-4'>
                        <div className='cardiconcon d-flex align-items-center justify-content-center'>
                            <Image src={contacticon2} className='img-fluid cardicon' />
                        </div>
                        <p className='pt-3 fw-semibold'>Our Phone</p>
                        <p>+971548456789</p>
                    </Card>
                </Col>
                <Col lg={4} className='mt-5'>
                    <Card className='d-flex align-items-center justify-content-center contactcard p-4'>
                        <div className='cardiconcon d-flex align-items-center justify-content-center'>
                            <Image src={contacticon3} className='img-fluid cardicon' />
                        </div>
                        <p className='pt-3 fw-semibold'>Our Address</p>
                        <p>548 Market Street, Dubai</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm