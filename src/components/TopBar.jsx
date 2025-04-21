import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import twitterIcon from '../assets/images/Twitter.png'
import fbIcon from '../assets/images/FB.png'
import linkedinIcon from '../assets/images/LinkedIn.png'
import instagramIcon from '../assets/images/instagram.png'
import locationIcon from '../assets/images/location-marker.png'
import emailIcon from '../assets/images/email.png'
import separatorImg from '../assets/images/Separator.png'

const TopBar = () => {

    const socialIcons = [
        {
            id: 1,
            img: twitterIcon
        },
        {
            id: 2,
            img: fbIcon
        },
        {
            id: 3,
            img: linkedinIcon
        },
        {
            id: 4,
            img: instagramIcon
        },
    ]

    return (
        <Container fluid className='px-5 d-none d-lg-block d-md-block'>
            <div className='d-flex justify-content-between align-items-center flex-lg-row flex-md-row flex-column'>
                <div className='d-flex'>
                    {socialIcons.map((item, index) => <div key={index}><Image src={item.img} className='me-4' /></div>)}
                </div>
                <div className='d-flex flex-lg-row flex-md-row flex-column'>
                    <span className='d-flex align-items-center'>
                        <Image src={locationIcon} className='pe-lg-3 pe-2' />548 Market Street, Dubai
                    </span>
                    <span className='mx-lg-4 mx-md-4 d-none d-lg-flex d-md-flex'><Image src={separatorImg} /></span>
                    <span className='d-flex align-items-center'>
                        <Image src={emailIcon} className='pe-lg-3 pe-2' />info@dwellaway.com
                    </span>
                </div>
            </div>

        </Container>
    )
}

export default TopBar