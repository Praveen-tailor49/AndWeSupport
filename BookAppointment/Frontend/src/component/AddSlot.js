import React, { useState } from 'react'
import { Form, Button, Col, Row, FloatingLabel } from 'react-bootstrap';
import NavBar from './NavBar';


const AddSlot = () => {

    const [slotData, setSloteData] = useState('')
    const [slot, setSlot] = useState('')
    const [slotTime, setSlotTime] = useState('')

    const addSlot = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "date": slot + slotTime,
            "slote": slot,
            "time": slotTime
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/slots", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    alert('Successfully Add ')
                } else {
                    alert('Not  Add ')
                }
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Form style={{ marginTop: '15%', width: '30%' }}>

                    <Form.Label> Time Slot</Form.Label>


                    <Row className="g-2 mb-4 mt-2">
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" >
                                <Form.Control type="text" placeholder="Enter Time slot" onChange={(e) => setSlot(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelectGrid">
                                <Form.Select aria-label="Floating label select example" onChange={(e) => setSlotTime(e.target.value)} >
                                    <option>select Time</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Button variant="primary" onClick={addSlot} >
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddSlot
