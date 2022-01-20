import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap';

const CreateEvent = ({eventType}) => {
    return (
        <>
            <NavBar />

            <div style={{ background: '	#DCDCDC', height: '100vh' }}>
                <div >
                    <Container >
                        <Row style={{ paddingTop: '100px' }}>
                            <Col style={{ maxWidth: '5%' }}>
                                <div>
                                    <i className="fas fa-empty-set"></i>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <div>
                                            <h6>One-on-One</h6>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <h6>Let an invitee pick a time to meet with you.</h6>
                                        </div>
                                    </Row>
                                </div>
                            </Col>

                            <Col>
                                <Link to='/eventsForm'> <Button style={{ borderRadius: "50px 20px" }} variant="primary" onClick={()=>eventType('One-on-One')}>Create</Button> </Link>
                            </Col>
                        </Row>

                        
                            <Row style={{ paddingTop: '100px', pointerEvents: 'none', opacity: '0.4 '}}  >
                                <Col style={{ maxWidth: '5%' }}>
                                    <div>
                                        <i className="fas fa-users"></i>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <Row>
                                            <div>
                                                <h6>Group</h6>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div>
                                                <h6>Let multiple invitees meet with you at one time.</h6>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>

                                <Col>
                                    <Button style={{ borderRadius: "50px 20px" }} variant="primary">Create</Button>
                                </Col>
                            </Row>
                        

                        <Row style={{ paddingTop: '100px', pointerEvents: 'none', opacity: '0.4 '}}>
                            <Col style={{ maxWidth: '5%' }}>
                                <div>
                                    <i className="fad fa-wifi"></i>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <div>
                                            <h6>Collective</h6>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <h6>Host an event with another person and let invitees pick a time when you’re all available.</h6>
                                        </div>
                                    </Row>
                                </div>
                            </Col>

                            <Col>
                                <Button style={{ borderRadius: "50px 20px" }} variant="primary">Create</Button>
                            </Col>
                        </Row>

                        <Row style={{ paddingTop: '100px', pointerEvents: 'none', opacity: '0.4 '}}>
                            <Col style={{ maxWidth: '5%' }}>
                                <div>
                                    <i className="fas fa-circle-notch"></i>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <div>
                                            <h6>Round Robin</h6>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <h6>Create an event that cycles between multiple hosts.</h6>
                                        </div>
                                    </Row>
                                </div>
                            </Col>

                            <Col>
                                <Button style={{ borderRadius: "50px 20px" }} variant="primary">Create</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default CreateEvent
