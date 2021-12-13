import React, { useState, useEffect } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "../component/NavBar";


const Placed = () => {

    const [userData, setUserData] = useState([])
    const [editAd, setEditAd] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        showData();
    }, [])

    const showData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "userId": localStorage.getItem('email') });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/allUser", requestOptions)
            .then(response => response.json())
            .then(result => setUserData(result[0].address))
            .catch(error => console.log('error', error));
    }

    const saveAd = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "email": localStorage.getItem('email'), "address": editAd });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/editAd", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {

                    alert('Successfully Edit ')

                } else {
                    alert('Not Edit Address')
                }
            })
            .catch(error => console.log('error', error));
        setShow(false);
        showData();
    }


    const order = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ 'userId':localStorage.getItem('email'), 'quantity':localStorage.getItem('quantity'), 'productName':localStorage.getItem('productName'), 'userName':localStorage.getItem('name'), 'totalPrice':localStorage.getItem('totalPrice'), 'productImage': localStorage.getItem('productImage')});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/userOrder", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '15%' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Link to='/order-placed'> <Button variant="warning" onClick={() => order()}>Delivered this address</Button> </Link>
                        <Card.Text>
                            {userData}
                        </Card.Text>
                        <Button variant="secondary" onClick={handleShow}>Edit Address</Button>
                    </Card.Body>
                </Card>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Delivered Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder={userData} onChange={(e) => setEditAd(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveAd}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Placed
