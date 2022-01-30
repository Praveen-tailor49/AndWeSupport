import React, { useRef, useState, useEffect } from 'react';
import img from '../image/back-img.jpg'
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        userEmail: '',
        userPassward: ''
    })

    const handlshow = (e) => {

        const { name, value } = e.target

        setUserData(prastate => ({
            ...prastate,
            [name]: value
        }))
    }

    const loginUser = () => {

        const {userEmail, userPassward} = userData
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
             userEmail,
             userPassward
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/userLogin", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.message === 'Successfully'){
                    alert('hhh')
                    navigate("/home")
                    
                    localStorage.setItem('token', result.data[0].userToken)
                }else {
                    alert(result)
                }
            })
            .catch(error => console.log('error', error));

            
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh' }}>
                <Container fluid>
                    <div style={{ width: '26%', height: '40%', boxShadow: "10px 10px 10px 10px #888888", position: 'absolute', marginTop: '10%' }}>

                        <Form style={{ padding: '30px', display: 'block' }} >
                            <h6>SignIn</h6>
                            <hr />

                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='userEmail' value={userData.userEmail} placeholder="enter email" autoComplete='off' onChange={handlshow} required />
                                <div id='emailErrShow' style={{ display: 'none' }}>
                                    <p style={{ color: 'red' }}>Email Already Register</p>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='userPassward' value={userData.userPassward} placeholder="enter password" autoComplete='off' onChange={handlshow} required />
                            </Form.Group>
                            <div style={{ display: 'grid', justifyItems: 'center' }}>
                                <Button type='button' variant="primary" onClick={() => loginUser()}> Login </Button>
                            </div>
                        </Form>

                        <div style={{ padding: '15px' }}>
                            <h6>Create an account? <Link to='/signUp'>SignUp</Link></h6>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
};

export default Login;
