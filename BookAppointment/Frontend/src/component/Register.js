import React,{useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
         
        if(localStorage.getItem('name')){
            navigate('/home')
        }


    }, [])

    const singin = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ name, email, password });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/userSignin", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    alert('Successfully SingIn')
                    localStorage.setItem("name", name);
                    localStorage.setItem("email", email);
                    navigate('/home');
                } else if(result === 'Already Register'){
                    alert('Email Already Register')
                } else {
                    alert('Not Register')
                }
            })
            .catch(error => console.log('error', error));
    }


    return (
        <>
            <div style={{ display: 'grid', justifyItems: 'center' }}>
                <h1>Create Account</h1>
                <Form style={{ width: '40%', marginTop: '100px' }}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="warning" type="button" onClick={()=>singin()} >
                        Submit
                    </Button>
                    
                </Form>
            </div>
        </>
    )
}

export default Register