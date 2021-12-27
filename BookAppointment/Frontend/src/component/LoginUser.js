import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import {  Link, useNavigate } from 'react-router-dom';

function LoginUser() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')

    useEffect(() => {
         
        if(localStorage.getItem('name')){
            navigate('/home')
        }


    }, [])

    const loginUser = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ email, password});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/userLogin", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.message === 'Successfully') {
                    localStorage.setItem("name", result.data[0].name)
                    localStorage.setItem("email", result.data[0].email)
                    alert('Successfully Login')
                    
                    navigate('/home');
                } else if(result === 'Email and Password is wrong'){
                    alert('Email and Password is wrong')
                } else {
                    alert('Not Login')
                }
            })
            .catch(error => console.log('error', error));
            
    }


        return (
            <>
                <div style={{ display: 'grid', justifyItems: 'center' }}>
                    <h1>Login User</h1>
                    <Form style={{ width: '40%', marginTop: '100px' }}>
    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
    
                        <Button variant="warning" type="button" onClick={() => loginUser()} >
                            Submit
                        </Button>
                        <Link to='/register'>
                        <Button variant="primary" type="button" style={{marginLeft:'75%'}} >
                            Register
                        </Button>
                        </Link>
                    </Form>
                </div>
            </>
        )
}

export default LoginUser