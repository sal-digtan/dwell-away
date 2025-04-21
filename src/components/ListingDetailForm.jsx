import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const ListingDetailForm = () => {
    return (
        <Container fluid className='px-5 my-5'>
            <Row>
                <Col lg={6}>
                    <div>
                        <h3>Highest infinity Pool in Downtown Dubai</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ready More</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div>
                        <h3>Book This Property</h3>
                    </div>
                    <Form className='p-3 rounded-3 listingdetailform'>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" className='rounded-5 listingdetailformcontrol' />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" placeholder="name@example.com" className='rounded-5 listingdetailformcontrol' />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Select className="mb-3 rounded-5 listingdetailformselect" aria-label="Default select example">
                                    <option>Select Number of Guests</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col lg={12}>
                                <Link to='/preview'>
                                    <Button variant="primary" className='w-100 rounded-5 listingdetailformbtn border-0'>Book</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ListingDetailForm