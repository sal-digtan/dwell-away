import React from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navLogo from '../assets/images/navbarLogo.png'
import signinIcon from '../assets/images/signinIcon.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar sticky-top">
            <Container fluid className='px-5'>
                <Link to='/' className='text-decoration-none'>
                    <Navbar.Brand href="/"><Image src={navLogo} /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Link to='/' className='text-decoration-none' >
                            <Nav.Link href="/" className='text-white px-3'>Home</Nav.Link>
                        </Link>
                        <Link to='/about' className='text-decoration-none'>
                            <Nav.Link href="/about" className='text-white px-3'>About</Nav.Link>
                        </Link>
                        <Link to='/listing' className='text-decoration-none'>
                            <Nav.Link href="/listing" className='text-white px-3'>Holiday Homes</Nav.Link>
                        </Link>
                        <Link to='/blog' className='text-decoration-none'>
                            <Nav.Link href="/blog" className='text-white px-3'>Blog</Nav.Link>
                        </Link>
                        <Link to='/contact' className='text-decoration-none'>
                            <Nav.Link href="#contact" className='text-white px-3'>Contact</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/login' className='text-decoration-none'>
                            <Nav.Link href="#singin">
                                <Image src={signinIcon} className='pe-2' /><span className='text-white text-decoration-underline'>Sign In</span>
                            </Nav.Link>
                        </Link>
                        <Link to='/signup' className='text-decoration-none'>
                            <Nav.Link href="#memes" className='text-white'>
                                or <span className='text-white text-decoration-underline ps-2'>Create an Account</span>
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation