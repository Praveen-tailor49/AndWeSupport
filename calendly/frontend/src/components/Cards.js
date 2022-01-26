import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const Cards = () => {

    const [eventData, setEventsData] = useState([])

    useEffect(() => {

        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/allEvents", requestOptions)
            .then(response => response.json())
            .then(result => setEventsData(result))
            .catch(error => console.log('error', error));

    })

    return (
        <>
            <div style={{ marginTop: '20px' }}>
                <Container>
                    <Row>
                        {
                            eventData.map((val, index) => {
                                return (
                                    <Col key={index}>
                                        <Card style={{ width: '18rem', marginTop: '12px' }}>
                                            <Card.Body>
                                                <Card.Title>{val.eventName}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{val.duration} {val.eventType}</Card.Subtitle>
                                                <Card.Text>
                                                   <Link to=''> View booking page </Link> 
                                                </Card.Text>

                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>
                                                        <Card.Link href="#">Card Link</Card.Link>
                                                        <Card.Link href="#">Another Link</Card.Link>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

        </>
    )
}


export default Cards
