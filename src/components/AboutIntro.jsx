import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import arrowmedium from '../assets/images/arrowmedium.png'
import Image from 'react-bootstrap/Image';
import aboutintroimg from '../assets/images/aboutintroimg.png'

const AboutIntro = () => {
    return (
        <Container fluid className='px-5 py-5'>
            <Row>
                <Col lg={6}>
                    <div>
                        <h2 className='mb-4 aboutintrotitle'>About Dwell Away</h2>
                        <p style={{ color: "#959595" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='my-5'>
                        <Button variant="light" className='aboutintrobtn'>See Our Homes
                            <Image src={arrowmedium} className='img-fluid ps-2' />
                        </Button>
                    </div>
                </Col>
                <Col lg={6}>
                    <Image src={aboutintroimg} className='img-fluid' rounded style={{ height: '400px', width: '650px' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutIntro