import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import specialimg from '../assets/images/specialimg.png'
import priceicon from '../assets/images/priceicon.png'
import amenityicon from '../assets/images/amenityicon.png'
import greatlocation from '../assets/images/greatlocation.png'
import supporticon from '../assets/images/supporticon.png'
import accessible from '../assets/images/accessible.png'
import unmatchable from '../assets/images/unmatchable.png'

const Special = () => {

    const featuresList = [
        {
            id: 1,
            name: "Best Prices",
            icon: priceicon,
        },
        {
            id: 2,
            name: "Complete Amenities",
            icon: amenityicon,
        },
        {
            id: 3,
            name: "Great Locations",
            icon: greatlocation,
        },
        {
            id: 4,
            name: "Top Support",
            icon: supporticon,
        },
        {
            id: 5,
            name: "Super Accessible",
            icon: accessible,
        },
        {
            id: 6,
            name: "Unmatchable Views",
            icon: unmatchable,
        },
    ]

    return (
        <Container fluid className='px-lg-5 px-4 my-5'>
            <Row className='align-items-center'>
                <Col lg={6} md={6} className='mb-4 mb-lg-0'>
                    <div className='position-relative'>
                        <Image src={specialimg} rounded className='img-fluid' />
                        <div className='position-absolute bottom-0 start-0 p-3 specialimgbox w-75'>
                            <div className='d-flex'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p>03 -
                                    <span className='d-block'>Super Accessible</span></p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6}>
                    <div>
                        <h2 className='specialtitle mb-4'>What makes Dwell Away special?</h2>
                        <p className='specialdesc mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                    </div>
                    <Row>
                        {
                            featuresList.map((item, index) =>
                                <Col key={index} lg={6} md={6} className='mb-3'>
                                    <span className='featurelisttext'>
                                        <Image src={item.icon} className='img-fluid pe-3' />
                                        {item.name}
                                    </span>
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Special