import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <div className='footer-content'>
      <Row className='footer-sub'>
        <Col>
        <div>
        <h3>ALTX MARKETING</h3>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p>United States</p>
        </div>
        <div>
          <p>Phone: +1 5589 55488 55</p>
          <p>Email: info@example.com</p>
        </div>
        </Col>


        <Col>
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Terms of service</li>
          <li>Privacy policy</li>
        </ul>
        </Col>


        <Col>
        <h3>Our Services</h3>
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Product Management</li>
          <li>Marketing</li>
          <li>Graphic Design</li>
        </ul>
        </Col>


        <Col>
        <h3>Our Social Networks</h3>
        <p>Cras fermentum odio eu feugiat 
          lide par naso tierra videa magna
           derita valies.</p>
        </Col>
      </Row>
    </div>
    <div></div>
    </>
  )
}

export default Footer