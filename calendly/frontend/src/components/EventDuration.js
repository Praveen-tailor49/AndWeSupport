import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';




const EventDuration = ({ state, eventT }) => {

    const [duration, setDuration] = useState('')

    const handlshow = (e) => {

        if (e === 'custom') {
            document.getElementById('show').style.display = 'block'
        }
        else {
            document.getElementById('show').style.display = 'none'
            setDuration(e)
        }
    }

    const sendData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "eventName": state.eventName,
            "eventType": eventT,
            "location": state.location,
            "description": state.description,
            "duration": duration,
            "userToken":localStorage.getItem('token')
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/events", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    alert('Successfully added')
                } else {
                    alert('Not add events')
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <NavBar />

            <div style={{ marginTop: '100px' }}>
                <Container >
                    <div style={{ border: 'solid' }}>
                        <Row style={{ padding: '30px' }}>
                            <Col style={{ maxWidth: '2%' }}>
                                <i className="far fa-calendar-week"></i>
                            </Col>
                            <Col>
                                <h6>When can people book this event?</h6>
                                <p>30 min, 60 rolling calendar days</p>
                            </Col>
                            <Col style={{ justifyItems: 'flex-end', display: 'contents' }}>
                                <Button style={{ borderRadius: "50px 20px", marginLeft: '20px' }} variant="light">Cancel</Button>
                                <Link to=''><Button style={{ borderRadius: "50px 20px", marginLeft: '20px' }} variant="primary" onClick={sendData}>Done</Button> </Link>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <Form style={{ padding: '40px' }}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Duration </Form.Label>
                                        <Form.Select onClick={(e) => handlshow(e.target.value)}>
                                            <option value="none" selected disabled hidden>Duration</option>
                                            <option value="15 min">15 min</option>
                                            <option value="30 min">30 min</option>
                                            <option value="45 min">45 min</option>
                                            <option value="60 min">60 min</option>
                                            <option value="custom">Custom</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col></Col>
                        </Row>

                        <Row style={{ display: 'none' }} id='show'>
                            <Col>
                                <Row>

                                    <Col>
                                        <Form style={{ padding: '40px', paddingTop: '0', }}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Form>
                                    </Col>

                                    <Col>
                                        <Form style={{ padding: '40px', paddingTop: '0', }}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Select>
                                                    <option value="min" selected>min</option>
                                                    <option value="hrs">hrs</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default EventDuration
