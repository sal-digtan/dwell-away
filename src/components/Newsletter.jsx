import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import newsletterbtnicon from '../assets/images/newsletterbtnicon.png'

const Newsletter = () => {
    return (
        <Container fluid className='newsletterbg'>
            <Row>
                <Col>
                    <div className='text-center py-5 d-flex align-items-center justify-content-center flex-column'>
                        <h2 className='text-capitalize text-white mb-4 newslettertitle '>Signup to our Newsletter
                            <span className='d-block fw-bold'>and avail 5% off</span> </h2>
                        <div id='newsformcon' className='w-50 p-2 newsformcon' style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: '30px', }}>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Your Email..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className='bg-transparent border-0 news-formcontrol text-white'
                                />
                                <Button variant="dark" id="button-addon2" className='rounded-circle' style={{ width: "40px", height: "40px", backgroundColor: "#000" }}>
                                    <Image src={newsletterbtnicon} className='img-fluid' />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Newsletter