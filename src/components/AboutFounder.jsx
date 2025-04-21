import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import founderImg from '../assets/images/founder.png'
import visionimg from '../assets/images/vision.png'
import missionimg from '../assets/images/mission.png'

const AboutFounder = () => {
    return (
        <Container fluid className='px-5'>
            <Row>
                <Col lg={12}>
                    <div className='text-center'>
                        <h2 className='aboutfoundertitle'>Our Founder’s Message</h2>
                        <Image src={founderImg} className='img-fluid my-4' />
                        <p style={{ color: '#959595' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </Col>
                <Col lg={6} className='mb-4'>
                    <Image src={visionimg} className='img-fluid' rounded />
                    <div className='mt-3'>
                        <h3>Vision</h3>
                        <p style={{ color: '#959595' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </Col>
                <Col lg={6} className='mb-4'>
                    <Image src={missionimg} className='img-fluid' rounded />
                    <div className='mt-3'>
                        <h3>Mission</h3>
                        <p style={{ color: '#959595' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutFounder