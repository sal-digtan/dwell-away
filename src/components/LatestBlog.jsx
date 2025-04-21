import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import blogimg1 from '../assets/images/blogimg1.png'
import blogimg2 from '../assets/images/blogimg2.png'
import blogimg3 from '../assets/images/blogimg3.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import blogicon1 from '../assets/images/blogicon1.png'
import blogicon2 from '../assets/images/blogicon2.png'
import blogarrow from '../assets/images/blogarrow.png'

const LatestBlog = () => {
    return (
        <Container fluid className='px-lg-5 px-4 my-5'>
            <Row>
                <Col className='mb-4'>
                    <div className='text-center'>
                        <h2 style={{ color: "#000", fontSize: 'clamp(35px, 5vw, 50px)' }}>Latest Blogs</h2>
                        <p style={{ color: "#959595", fontSize: '25px' }}>What to explore?
                            <span className='d-block' style={{ color: "#959595", fontSize: 'clamp(20px, 5vw, 25px)' }}> New Updates and Activities in Dubai.</span></p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6}>
                    <Card className='border-0 shadow mb-3'>
                        <div className='position-relative'>
                            <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                            <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                <span className='d-block text-white pt-1'>SEP</span>
                            </div>
                        </div>
                        <Card.Body>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <span className='d-flex align-items-center' style={{ color: "#959595" }}><Image src={blogicon1} className='img-fluid pe-2' />By Admin</span>
                                <span className='d-flex align-items-center' style={{ color: "#959595" }}><Image src={blogicon2} className='img-fluid pe-2' />Comments (3)</span>
                            </div>
                            <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                            <Card.Text style={{ color: "#959595" }}>
                                Experts Say Some Good First Steps In Starting Business Are Researching
                            </Card.Text>
                            <Button variant="dark" className='blogbtn'>Read More
                                <Image src={blogarrow} className='img-fluid ps-2' />
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6}>
                    <Card className='border-0 shadow mb-3'>
                        <div className='position-relative'>
                            <Card.Img variant="top" src={blogimg2} className='img-fluid' />
                            <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                <span className='d-block text-white pt-1'>SEP</span>
                            </div>
                        </div>
                        <Card.Body>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <span className='d-flex align-items-center' style={{ color: "#959595" }}><Image src={blogicon1} className='img-fluid pe-2' />By Admin</span>
                                <span className='d-flex align-items-center' style={{ color: "#959595" }}><Image src={blogicon2} className='img-fluid pe-2' />Comments (3)</span>
                            </div>
                            <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                            <Card.Text style={{ color: "#959595" }}>
                                Experts Say Some Good First Steps In Starting Business Are Researching
                            </Card.Text>
                            <Button variant="dark" className='blogbtn'>Read More
                                <Image src={blogarrow} className='img-fluid ps-2' />
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6}>
                    <Card className='border-0 shadow mb-3'>
                        <div className='position-relative'>
                            <Card.Img variant="top" src={blogimg3} className='img-fluid' />
                            <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                <span className='d-block text-white pt-1'>SEP</span>
                            </div>
                        </div>
                        <Card.Body>
                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                <span className='d-flex align-items-center' style={{ color: "#959595" }}><Image src={blogicon1} className='img-fluid pe-2' />By Admin</span>
                                <span className='d-flex align-items-center' style={{ color: "#959595" }}><Image src={blogicon2} className='img-fluid pe-2' />Comments (3)</span>
                            </div>
                            <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                            <Card.Text style={{ color: "#959595" }}>
                                Experts Say Some Good First Steps In Starting Business Are Researching
                            </Card.Text>
                            <Button variant="dark" className='blogbtn'>Read More
                                <Image src={blogarrow} className='img-fluid ps-2' />
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LatestBlog