import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const About = (props) => {
  return (
    <div className="about-section-content" id={props.id}>
      <h1 className='about-heading'>ABOUT US</h1>
      <Container>
      <Row className='about-sub-content'>
        <Col >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
        </Col>
        <Col>
          <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
             cupidatat non proident,sunt in culpa qui officia deserunt mollit 
             anim id est laborum.
          </p>
          <Button className='button-content'>Learn More</Button>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default About