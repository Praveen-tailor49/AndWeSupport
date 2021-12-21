import React, { useState } from 'react'
import { Form, Button, Col, Row, FloatingLabel } from 'react-bootstrap';
import NavBar from './NavBar';

const AddDuration = () => {

    const [duration, setDuration] = useState('')
    const [time, setTime] = useState('')
    const [durationPrice, setDurationPrice] = useState('')

    const addDuration = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "duration": duration,
            "durationPrice": durationPrice,
            "time":time
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/addServiceDuration", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    alert('Successfully Add ')
                } else (
                    alert('Not  Add ')
                )
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Form style={{ marginTop: '15%', width: '30%' }}>
                
                        <Form.Label> Service Duration</Form.Label>
                     

                    <Row className="g-2 mb-4 mt-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" >
                                <Form.Control type="text" placeholder="Enter duration" onChange={(e)=>setDuration(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectGrid">
                                <Form.Select aria-label="Floating label select example" onChange={(e)=>setTime(e.target.value)}>
                                    <option>select Time</option>
                                    <option value="Minutes">Minutes</option>
                                    <option value="Houres">Houres</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Duration Price</Form.Label>
                        <Form.Control type="text" placeholder="Duration Price" onChange={(e) => setDurationPrice(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={addDuration}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddDuration
