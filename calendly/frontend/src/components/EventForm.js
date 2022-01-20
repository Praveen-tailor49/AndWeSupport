import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';



const EventForm = ({handlshow, state}) => {

    const [color,  setColor] = useState('red')
 
    return (
        <>
            <NavBar />

            <div style={{ marginTop: '100px' }}>
                <Container >
                    <div style={{ border: 'solid' }}>
                        <Row style={{ padding: '30px' }}>
                            <Col style={{ maxWidth: '2%' }}>
                                <i className="fal fa-circle" style={{color:`${color}`, backgroundColor:`${color}`,  borderRadius: '50px'}}></i>
                            </Col>
                            <Col>
                                <h6>What event is this?</h6>
                            </Col>
                            <Col style={{justifyItems: 'flex-end', display: 'contents'}}>
                                <Button style={{ borderRadius: "50px 20px", marginLeft:'20px' }} variant="light">Cancel</Button>
                                <Link to='/eventsDuration'> <Button style={{ borderRadius: "50px 20px", marginLeft:'20px' }} variant="primary">Next</Button> </Link>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <Form style={{ padding: '40px' }}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Event name </Form.Label>
                                        <Form.Control type="text" placeholder="Event name " onChange={handlshow} value={state.eventName} name='eventName' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Location </Form.Label>
                                        <Form.Select onChange={handlshow} value={state.location} name='location'>
                                            <option>Location</option>
                                            <option value="Phone call">Phone call</option>
                                            <option value="Google Meet">Google Meet</option>
                                            <option value="Zoom">Zoom</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={handlshow} name='description' value={state.description} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Event color</Form.Label>
                                        <Row>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'#A52A2A', backgroundColor:'#A52A2A',  borderRadius: '50px'}}></i></Col>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'#7FFFD4', backgroundColor:'#7FFFD4',  borderRadius: '50px'}}></i></Col>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'Black', backgroundColor:'Black',  borderRadius: '50px'}}></i></Col>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'#8B008B', backgroundColor:'#8B008B',  borderRadius: '50px'}}></i></Col>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'#BDB76B', backgroundColor:'#BDB76B',  borderRadius: '50px'}}></i></Col>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'#696969', backgroundColor:'#696969',  borderRadius: '50px'}}></i></Col>
                                            <Col style={{ maxWidth: '4%', cursor:'pointer' }}><i className="fal fa-circle" style={{color:'#FFD700', backgroundColor:'#FFD700',  borderRadius: '50px'}}></i></Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default EventForm
