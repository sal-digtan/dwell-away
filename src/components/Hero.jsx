import React from 'react'
import Image from 'react-bootstrap/Image';
import heroimg1 from '../assets/images/heroimg1.png'
import heroimg2 from '../assets/images/heroimg2.png'
import arrowbig from '../assets/images/arrowbig.png'
import arrowsmall from '../assets/images/arrowsmall.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import bookIcon from '../assets/images/bookicon.png';
import checkdateicon from '../assets/images/checkdateicon.png';
import guesticon from '../assets/images/guesticon.png';
import bedicon from '../assets/images/bedicon.png';
import Button from 'react-bootstrap/Button';


const Hero = () => {
  return (
    <Container fluid className='px-lg-5 px-4 herobg'>
      <Row className='justify-content-between align-items-center'>
        <Col lg={6}>
          <div className='herotitlebg mt-4 mt-lg-0'>
            <h2 className='text-uppercase herotitle'>Crafting Homes <span className='d-block'>For Modern Living</span></h2>
          </div>
        </Col>
        <Col lg={4} className='my-5'>
          <Row>
            <Col className='mb-4'>
              <div className='hero-imgcon'>
                <Image src={heroimg1} className='mb-3 img-fluid' style={{ width: "100%" }} />
                <span className='d-flex align-items-center justify-content-between'>
                  <h4>Iconic Architecture</h4>
                  <Image src={arrowbig} />
                </span>
                <span className='d-flex align-items-baseline'>
                  <p className='pe-2'>Explore More</p>
                  <Image src={arrowsmall} />
                </span>
              </div>
            </Col>
            <Col>
              <div className='hero-imgcon'>
                <Image src={heroimg2} className='mb-3 img-fluid' style={{ width: "100%" }} />
                <span className='d-flex align-items-center justify-content-between'>
                  <h4>Iconic Architecture</h4>
                  <Image src={arrowbig} />
                </span>
                <span className='d-flex align-items-baseline'>
                  <p className='pe-2'>Explore More</p>
                  <Image src={arrowsmall} />
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={12} className='pb-4 px-4'>
          <Row className='form-selectcon align-items-center justify-content-between'>
            <Col lg={2} className='mb-3 mb-lg-0'>
              <div className='d-flex align-items-center justify-content-center '>
                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                  <Image src={bookIcon} />
                </div>
                <Form.Select aria-label="Default select example" className='bg-transparent border-0 fw-semibold' style={{ fontSize: '12px' }} >
                  <option>Book Your Stay</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={2} className='mb-3 mb-lg-0'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                  <Image src={checkdateicon} />
                </div>
                <Form.Select aria-label="Default select example" className='bg-transparent border-0 fw-semibold' style={{ fontSize: '13px' }}>
                  <option>Check In Date</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={2} className='mb-3 mb-lg-0'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                  <Image src={checkdateicon} />
                </div>
                <Form.Select aria-label="Default select example" className='bg-transparent border-0 fw-semibold' style={{ fontSize: '12px' }}>
                  <option>Check Out Date</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={2} className='mb-3 mb-lg-0'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                  <Image src={guesticon} />
                </div>
                <Form.Select aria-label="Default select example" className='bg-transparent border-0 fw-semibold' style={{ fontSize: '13px' }}>
                  <option>Select Guest</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={2} className='mb-3 mb-lg-0'>
              <div className='d-flex align-items-center justify-content-center'>
                <div className='p-2' style={{ border: "1px solid #959595", borderRadius: "50%" }}>
                  <Image src={bedicon} />
                </div>
                <Form.Select aria-label="Default select example" className='bg-transparent border-0 fw-semibold' style={{ fontSize: '13px' }}>
                  <option>Select Bed & Bath</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={1} className='d-flex align-items-center justify-content-center mb-2 mb-lg-0'>
              <Button variant="dark" className='searchbtn'>Search</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero