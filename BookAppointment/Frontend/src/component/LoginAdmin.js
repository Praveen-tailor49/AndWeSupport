import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {

        if (localStorage.getItem('admin')) {
            navigate('/admin')
        }


    }, [])

    const loginAdmin = () => {


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "email": email, "password": password });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/adminLogin", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === 'Successfully') {
                    alert('Successfully Login')
                    localStorage.setItem('admin', email)
                    navigate('/admin');
                } else if (result === 'empty felid') {
                    alert('empty felid')
                } else {
                    alert('user not found')
                }})
            .catch(error => console.log('error', error));

    }


    return (
        <>
            <div style={{ display: 'grid', justifyItems: 'center' }}>
                <h1>Login Admin</h1>
                <Form style={{ width: '40%', marginTop: '100px' }}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="warning" type="button" onClick={() => loginAdmin()} >
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default LoginAdmin