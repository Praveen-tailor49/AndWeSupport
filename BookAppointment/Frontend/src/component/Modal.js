import React, { useState, useEffect } from 'react'
import { Button, Modal, Card } from 'react-bootstrap';


const Modals = (props) => {

    const [allCategory, setAllCategory] = useState([])
    const [allService, setAllService] = useState([])
    const [allExtraService, setAllExtraService] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showCategory", requestOptions)
            .then(response => response.json())
            .then(result => setAllCategory(result))
            .catch(error => console.log('error', error));
    }, [])

    const servicesData = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showService", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.length > 0) {
                    setAllService(result)
                    document.getElementById('show1').style.display = 'none';
                    document.getElementById('show2').style.display = 'block';
                }
            })
            .catch(error => console.log('error', error));
    }

    const extraServicesData = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showExtraService", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.length > 0) {
                    setAllExtraService(result)
                    document.getElementById('show1').style.display = 'none';
                    document.getElementById('show2').style.display = 'none';
                    document.getElementById('show3').style.display = 'block';
                }
            }
            )
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <div style={{ display: 'flex', margin: '20px' }}>
                    <div style={{ borderRight: '2px solid gray', width: '30%' }}>

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

                        <Modal.Body style={{ display: 'block', overflowY: "scroll" }} id='show1'>

                            {
                                allCategory.map((data) => {
                                    return (
                                        <>
                                            <Card style={{ margin: '10px', cursor: 'pointer' }}>
                                                <Card.Body>
                                                    <h6 onClick={() => servicesData(data.id)}> <i class="fas fa-tooth"></i> {data.categoryName}</h6>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })
                            }


                        </Modal.Body>

                        <Modal.Body style={{ display: 'none' }} id='show2'>

                            {
                                allService.map((data) => {
                                    return (
                                        <>
                                            <Card style={{ margin: '10px', cursor: 'pointer' }}>
                                                <Card.Body>
                                                    <h6 onClick={() => extraServicesData(data.id)}> <i class="fas fa-tooth"></i> {data.serviceName} <span style={{ marginLeft: '50%', color: 'blue' }}>{data.servicesPrice}</span></h6>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })
                            }


                        </Modal.Body>

                        <Modal.Body style={{ display: 'none' }} id='show3'>

                            {
                                allExtraService.map((data) => {
                                    return (
                                        <>
                                            <Card style={{ margin: '10px', cursor: 'pointer' }}>
                                                <Card.Body>
                                                    <h6> <i class="fas fa-tooth"></i> {data.serviceName} <span style={{ marginLeft: '50%', color: 'blue' }}>{data.servicesPrice}</span></h6>
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })
                            }


                        </Modal.Body>
                    </div>
                </div>
                <Modal.Footer>
                    <Button >Next <i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modals
