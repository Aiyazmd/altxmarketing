import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Service = (props) => {
  return (
    <div className="service-section-content" id={props.id}>
      <h1 className='service-heading'>Service</h1>
      <p className='service-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <Row className='servide-card'>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor card-subtitl'  style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor card-subtitl'style={{"color":"white"}} >Lorem Ipsum</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor' style={{"color":"white"}}>Sed ut perspici</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor'style={{"color":"white"}}>Lorem Ipsum</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor' style={{"color":"white"}}>Sed ut perspici</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
      </Row>
      <Row className='servide-card'>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor'style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor'style={{"color":"white"}}>Lorem Ipsum</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor' style={{"color":"white"}}>Sed ut perspici</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
        <Col >
          <Card  >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor' style={{"color":"white"}}>Lorem Ipsum</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
            </Card.Text>
           
          </Card.Body>
        </Card></Col>
        <Col><Card >
          <Card.Body className="cardBody">
            <Card.Title className='cardColor' style={{"color":"white"}}>Card Title</Card.Title>
            <Card.Subtitle className='cardColor' style={{"color":"white"}}>Sed ut perspici</Card.Subtitle>
            <Card.Text style={{"color":"white"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </Card.Text>
            
          </Card.Body>
        </Card></Col>
      </Row>
    </div>
  )
}

export default Service