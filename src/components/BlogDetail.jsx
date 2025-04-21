import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrowmedium from '../assets/images/arrowmedium.png'
import Image from 'react-bootstrap/Image';
import blogdetailthumb from '../assets/images/blogdetailthumb.png'

const BlogDetail = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='blogdetailbg position-relative'>
                    <div className='position-absolute top-50 start-50 translate-middle blogdetailtitlecon p-lg-5 p-2'>
                        <h2 className='text-uppercase text-white text-center blogdetailtitle'>Why Airbnb business is booming in 2024</h2>
                    </div>
                </Col>
            </Row>
            <Row className='px-2 px-lg-4 my-5'>
                <Col lg={8}>
                    <div>
                        <span style={{ color: '#959595' }}>Posted: September 10, 2024</span>
                        <h2 className='mb-3'>Why Airbnb business is booming in 2024</h2>
                        <p style={{ textAlign: 'justify', color: '#959595' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                        <p style={{ textAlign: 'justify', color: '#959595' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                        <p style={{ textAlign: 'justify', color: '#959595' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <h3>Categories</h3>
                        <div>
                            <a href="#" className='d-flex align-items-center justify-content-between text-decoration-none text-dark border-top border-bottom py-3'>Real Estate
                                <Image src={arrowmedium} fluid />
                            </a>
                            <a href="#" className='d-flex align-items-center justify-content-between text-decoration-none text-dark border-bottom py-3'>Property Management
                                <Image src={arrowmedium} fluid />
                            </a>
                            <a href="#" className='d-flex align-items-center justify-content-between text-decoration-none text-dark border-bottom py-3'>Airbnb
                                <Image src={arrowmedium} fluid />
                            </a>
                            <a href="#" className='d-flex align-items-center justify-content-between text-decoration-none text-dark border-bottom py-3'>Subleasing Dubai
                                <Image src={arrowmedium} fluid />
                            </a>
                            <a href="#" className='d-flex align-items-center justify-content-between text-decoration-none text-dark border-bottom py-3'>Dubai Real Estate Market
                                <Image src={arrowmedium} fluid />
                            </a>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='border-bottom'>
                            <h3>Related Articles</h3>
                        </div>
                        <div className='mt-4 d-flex'>
                            <Image src={blogdetailthumb} fluid className='pe-2' />
                            <div>
                                <span className='d-block fw-semibold'>Why Airbnb business is booming in 2024</span>
                                <span className='d-block' style={{ color: '#959595' }}>Experts Say Some Good First Steps In Starting Business Are Researching...</span>
                            </div>
                        </div>
                        <div className='mt-4 d-flex'>
                            <Image src={blogdetailthumb} fluid className='pe-2' />
                            <div>
                                <span className='d-block fw-semibold'>Why Airbnb business is booming in 2024</span>
                                <span className='d-block' style={{ color: '#959595' }}>Experts Say Some Good First Steps In Starting Business Are Researching...</span>
                            </div>
                        </div>
                        <div className='mt-4 d-flex'>
                            <Image src={blogdetailthumb} fluid className='pe-2' />
                            <div>
                                <span className='d-block fw-semibold'>Why Airbnb business is booming in 2024</span>
                                <span className='d-block' style={{ color: '#959595' }}>Experts Say Some Good First Steps In Starting Business Are Researching...</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogDetail