import React, { useState, useEffect } from 'react'
import { Button, Modal, Card, Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import Calendar from './Calender';


const Modals = (props) => {

    const [allCategory, setAllCategory] = useState([])
    const [allService, setAllService] = useState([])
    const [allExtraService, setAllExtraService] = useState([])
    const [duration, setDuration] = useState([])
    const [bookTime, setBookTime] = useState('')
    const [show, setShow] = useState(false);

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [comments, setcomments] = useState('')
    const [service, setservice] = useState('')
    const [categoryName, setcategoryName] = useState('')
    const [extraServices, setextraServices] = useState('')
    const [calDate, setCalDate] = useState('')
    const [buttonId, setButtonId] = useState('')



    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showCategory", requestOptions)
            .then(response => response.json())
            .then(result => setAllCategory(result))
            .catch(error => console.log('error', error));


        var requestOptions1 = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showDuration", requestOptions1)
            .then(response => response.json())
            .then(result => setDuration(result))
            .catch(error => console.log('error', error));
    }, [])

    const servicesData = (id, categoryName) => {

        setcategoryName(categoryName)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions2 = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showService", requestOptions2)
            .then(response => response.json())
            .then(result => {
                if (result) {
                    setAllService(result)
                    document.getElementById('show1').style.display = 'none';
                    document.getElementById('show2').style.display = 'block';
                }
            })
            .catch(error => console.log('error', error));
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {

        props.setModalShow(false)
        setShow(true)
        bookSlote();
    };

    const extraServicesData = (id, serviceName) => {

        setservice(serviceName)
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

    const durationD = (serviceName) => {

        setextraServices(serviceName)
        document.getElementById('show3').style.display = 'none';
        document.getElementById('show4').style.display = 'block';
    }

    const calendar = () => {

        document.getElementById('show4').style.display = 'none';
        document.getElementById('show5').style.display = 'block';
    }

    const getTime = (time) => {
        setBookTime(time)

        document.getElementById('showButton').style.display = 'block'
    }

    const showForm = () => {
        document.getElementById('show5').style.display = 'none';
        document.getElementById('show6').style.display = 'block';
    }

    const bookSlote = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "date": calDate.slice(0, 15),
            "time": bookTime,
            "userName": firstName + lastName,
            "phone": phoneNumber,
            "email": email,
            "service": categoryName,
            "extraService":extraServices,
            "btnId": buttonId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/bookSlots", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <div style={{ display: 'block' }} id='firstModal'>

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
                                                        <h6 onClick={() => servicesData(data.id, data.categoryName)}> <i class="fas fa-tooth"></i> {data.categoryName}</h6>
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
                                                        <h6 onClick={() => extraServicesData(data.id, data.serviceName)}> <i class="fas fa-tooth"></i> {data.serviceName} <span style={{ marginLeft: '50%', color: 'blue' }}>{data.servicesPrice}</span></h6>
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
                                                        <h6 onClick={() => durationD(data.serviceName)}> <i class="fas fa-tooth"></i> {data.serviceName} <span style={{ marginLeft: '50%', color: 'blue' }}>{data.servicesPrice}</span></h6>
                                                    </Card.Body>
                                                </Card>
                                            </>
                                        )
                                    })
                                }


                            </Modal.Body>

                            <Modal.Body style={{ display: 'none' }} id='show4'>
                                <div style={{ textAlign: 'center' }}>
                                    <h6>Select Service Duration</h6>
                                    <p>You need to select service duration, the price of your service will depend on duration.</p>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                                    {
                                        duration.map((data) => {
                                            return (
                                                <>

                                                    <Card style={{ width: '10rem', cursor: 'pointer' }} onClick={() => {
                                                        calendar();
                                                    }
                                                    }  >
                                                        <Card.Body>
                                                            <div style={{ display: 'flex', justifyContent: 'end' }}>

                                                                <Card.Title style={{ color: '#D09F1D', }}>{data.durationPrice}</Card.Title>
                                                            </div>

                                                            <div style={{ display: 'flex', justifyContent: 'center', color: '#4b64e8' }}>
                                                                <Card.Title style={{ fontSize: '46px' }}>{data.duration}</Card.Title>
                                                            </div>


                                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                                <Card.Text>
                                                                    {data.time}
                                                                </Card.Text>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </Modal.Body>
                            <div style={{ display: 'none' }} id='show5'>
                                <Modal.Body >
                                    <Calendar getTime={getTime} setCalDate={setCalDate} setButtonId={setButtonId}/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div style={{ display: 'none' }} id='showButton'>
                                        <Button onClick={showForm}>Next <i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
                                    </div>
                                </Modal.Footer>
                            </div>

                            <div style={{ display: 'none' }} id='show6'>
                                <Modal.Body >
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setfirstName(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Last Name" onChange={(e) => setlastName(e.target.value)} />
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Phone No.</Form.Label>
                                                <Form.Control type="text" placeholder="Enter number" onChange={(e) => setphoneNumber(e.target.value)} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setemail(e.target.value)} />
                                            </Form.Group>
                                        </Row>

                                        <Row >
                                            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                                                <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e) => setcomments(e.target.value)} />
                                            </FloatingLabel>
                                        </Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div >
                                        <Button onClick={handleShow}>Next <i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
                                    </div>
                                </Modal.Footer>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: '#2d54de' }}>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ color: '#2d54de' }}>
                            <h6>Customer Info</h6>
                            <hr />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px' }}>
                            <div>
                                Name: {firstName} {lastName}
                            </div>
                            <div>
                                Phone No. {phoneNumber}
                            </div>

                            <div>
                                Email: {email}
                            </div>
                        </div>
                        <hr />
                        <div style={{ color: '#2d54de' }}>
                            <h6>Appointment Info</h6>
                            <hr />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridGap: '20px' }}>
                            <div>
                                DATE: {calDate.slice(0, 15)}
                            </div>
                            <div>
                                TIME: {bookTime}
                            </div>
                            <div>
                                SERVICE: {categoryName}
                            </div>
                            <div>
                                EXTRAS: {extraServices}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Modals
