import React from 'react'
import { Button, Modal, Card } from 'react-bootstrap';


const Modals = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <div style={{ display: 'flex', margin: '30px' }}>
                    <div style={{ borderRight: '2px solid black', width: '30%' }}>

                        <Modal.Body style={{ textAlign: 'center' }}>
                            <i class="fa fa-id-card-o" aria-hidden="true" style={{ color: 'blue', fontSize: '60px' }} ></i>
                            <h6 style={{ color: 'blue', marginTop: '50px' }}>Select Service</h6>
                            <p>Please select a service you want to schedule appointment for</p>

                            <h6 style={{ color: 'blue', marginTop: '80px' }}>Questions?</h6>
                            <p>Call (858) 939-3746 for help</p>
                        </Modal.Body>

                    </div>

                    <div style={{ width: '70%' }}>

                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Select Service
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card style={{ margin: '10px', cursor:'pointer' }}>
                                <Card.Body>
                                <i class="fas fa-tooth"></i> General Dentistry
                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '10px', cursor:'pointer' }}>
                                <Card.Body>
                                <i class="fas fa-balance-scale-right"></i> Weight Management

                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '10px', cursor:'pointer' }}>
                                <Card.Body>


                                    <i class="fas fa-head-side-brain"></i> Psychology Services
                                </Card.Body>
                            </Card>
                            <Card style={{ margin: '10px', cursor:'pointer' }}   >
                                <Card.Body>
                                <i class="fas fa-envelope-open-text"></i> Massage and Recovery
                                </Card.Body>
                            </Card>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button >Next <i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Modals
