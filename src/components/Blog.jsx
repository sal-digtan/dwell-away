import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import homeimg1 from '../assets/images/homeimg1.png'
import homeimg2 from '../assets/images/homeimg2.png'
import Button from 'react-bootstrap/Button';
import arrowsmall from '../assets/images/arrowsmall.png'
import blogimg1 from '../assets/images/blogimg1.png'
import Card from 'react-bootstrap/Card';
import arrowcircleblack from '../assets/images/arrowcircleblack.png'
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <Container fluid className='px-lg-5 px-4 my-4'>
            <Row style={{ borderBottom: '1px solid #D9D9D9' }}>
                <Col lg={4} className='mb-3 mb-lg-0'>
                    <div className='h-100'>
                        <Image src={homeimg1} fluid className='w-100 h-100' />
                    </div>
                </Col>
                <Col lg={8}>
                    <div className='h-100'>
                        <Image src={homeimg2} fluid className='w-100 h-100' />
                    </div>
                </Col>
                <div className='d-flex align-items-baseline justify-content-between mt-3'>
                    <Button variant="outline-dark">Real Estate</Button>
                    <div className=''>
                        <p>September 10, 2024</p>
                    </div>
                    <div>
                        <a href="" className='text-decoration-none text-dark'>Read More
                            <Image src={arrowsmall} fluid className='ps-2' />
                        </a>
                    </div>
                </div>
                <Col lg={6} className='mt-3'>
                    <div>
                        <h2 className='blogtitle'>Why Airbnb business is booming in 2024</h2>
                    </div>
                </Col>
                <Col lg={6} className='mt-3'>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                    </div>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col lg={4}>
                    <Link to='/blog-detail' className='text-decoration-none'>
                        <Card className='mb-3'>
                            <div className='position-relative'>
                                <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                                <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                    <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                    <span className='d-block text-white pt-1'>SEP</span>
                                </div>
                            </div>
                            <Card.Body>
                                <div className='d-flex align-items-start'>
                                    <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                                    <Image src={arrowcircleblack} fluid />
                                </div>
                                <Card.Text style={{ color: "#959595" }}>
                                    Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to='/blog-detail' className='text-decoration-none'>
                        <Card className='mb-3'>
                            <div className='position-relative'>
                                <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                                <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                    <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                    <span className='d-block text-white pt-1'>SEP</span>
                                </div>
                            </div>
                            <Card.Body>
                                <div className='d-flex align-items-start'>
                                    <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                                    <Image src={arrowcircleblack} fluid />
                                </div>
                                <Card.Text style={{ color: "#959595" }}>
                                    Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to='/blog-detail' className='text-decoration-none'>
                        <Card className='mb-3'>
                            <div className='position-relative'>
                                <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                                <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                    <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                    <span className='d-block text-white pt-1'>SEP</span>
                                </div>
                            </div>
                            <Card.Body>
                                <div className='d-flex align-items-start'>
                                    <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                                    <Image src={arrowcircleblack} fluid />
                                </div>
                                <Card.Text style={{ color: "#959595" }}>
                                    Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to='/blog-detail' className='text-decoration-none'>
                        <Card className='mb-3'>
                            <div className='position-relative'>
                                <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                                <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                    <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                    <span className='d-block text-white pt-1'>SEP</span>
                                </div>
                            </div>
                            <Card.Body>
                                <div className='d-flex align-items-start'>
                                    <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                                    <Image src={arrowcircleblack} fluid />
                                </div>
                                <Card.Text style={{ color: "#959595" }}>
                                    Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to='/blog-detail' className='text-decoration-none'>
                        <Card className='mb-3'>
                            <div className='position-relative'>
                                <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                                <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                    <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                    <span className='d-block text-white pt-1'>SEP</span>
                                </div>
                            </div>
                            <Card.Body>
                                <div className='d-flex align-items-start'>
                                    <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                                    <Image src={arrowcircleblack} fluid />
                                </div>
                                <Card.Text style={{ color: "#959595" }}>
                                    Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg={4}>
                <Link to='/blog-detail' className='text-decoration-none'>
                    <Card className='mb-3'>
                        <div className='position-relative'>
                            <Card.Img variant="top" src={blogimg1} className='img-fluid' />
                            <div className='position-absolute bottom-0 end-0 p-2 me-4' style={{ backgroundColor: "#000", borderRadius: "10px 10px 0 0" }}>
                                <span className='d-block text-white fw-semibold fs-2 border-bottom border-secondary'>10</span>
                                <span className='d-block text-white pt-1'>SEP</span>
                            </div>
                        </div>
                        <Card.Body>
                            <div className='d-flex align-items-start'>
                                <Card.Title style={{ fontSize: "26px", color: '#000', fontWeight: 500 }}>Why Airbnb business is booming in 2024</Card.Title>
                                <Image src={arrowcircleblack} fluid />
                            </div>
                            <Card.Text style={{ color: "#959595" }}>
                                Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching Experts Say Some Good First Steps In Starting Business Are Researching...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
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

export default Blog