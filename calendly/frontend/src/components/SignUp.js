import React, { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser"
import { Container, Form, Button, Alert } from 'react-bootstrap';
import img from '../image/back-img.jpg'
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();
    const form = useRef();
    const [otps, setOtp] = useState('')
    const [userOtp, setUserOtp] = useState('')
    const [show, setShow] = useState(false);

    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        userPassward: '',
        userReData: []
    })

    useEffect(() => {
        const otp = Math.floor(1000 + Math.random() * 9000);
        setOtp(otp)

        userRegData()
    }, [])

    const userRegData = () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/userData", requestOptions)
            .then(response => response.json())
            .then(result => setUserData({ userReData: result }))
            .catch(error => console.log('error', error));
    }

    const handlshow = (e) => {

        const { name, value } = e.target

        setUserData(prastate => ({
            ...prastate,
            [name]: value
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (userData.userReData.length > 0 || userData.userReData.length === 0) {
            userData.userReData.forEach(val => {
                if (userData.userEmail === val.userEmail) {
                    document.getElementById('emailErrShow').style.display = 'block';
                } else {
                    emailjs.sendForm('service_mocy6ly', 'template_4rvhjcd', e.target, "user_ZAGjoe6gJVVDW5JLRe4NG")
                        .then((result) => {
                            setShow(true)
                            document.getElementById('showDiv1').style.display = 'none';
                            document.getElementById('showDiv2').style.display = 'block';
                        }, (error) => {
                            console.log(error.text);
                        });
                }
            })
        // } else if (userData.userReData.length === 0) {
        //     emailjs.sendForm('service_mocy6ly', 'template_4rvhjcd', e.target, "user_ZAGjoe6gJVVDW5JLRe4NG")
        //         .then((result) => {
        //             setShow(true)
        //             document.getElementById('showDiv1').style.display = 'none';
        //             document.getElementById('showDiv2').style.display = 'block';
        //         }, (error) => {
        //             console.log(error.text);
        //         });
        }


    }

    const verify = () => {

        if (userOtp == otps) {
            alert('login')
            storData()
        } else {
            alert('otp wrong')
        }
    }

    const storData = () => {

        const { userName, userEmail, userPassward } = userData

        const token = Math.floor(1000 + Math.random() * 9000);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userName": userName,
            "userEmail": userEmail,
            "userPassward": userPassward,
            "userToken": token
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/SignUp", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    alert('User Successfully Add')
                    navigate("/home")
                    localStorage.setItem('token', token)
                } else if (result === 'Already Register') {
                    alert('Already Register')
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh' }}>
                {
                    show ?
                        <>

                            <Alert variant="success"  >
                                <Alert.Heading>Otp send your email</Alert.Heading>
                            </Alert>
                            <Container fluid>
                                <div style={{ width: '26%', height: '44%', boxShadow: "10px 10px 10px 10px #888888", position: 'absolute', marginTop: '10%' }}>
                                    <div id='showDiv1' style={{ display: 'block' }}>

                                        <Form style={{ padding: '30px' }} ref={form} onSubmit={sendEmail} >
                                            <h6>SignUp</h6>
                                            <hr />
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" name='userName' value={userData.userName} placeholder="enter name" autoComplete='off' onChange={handlshow} required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" >
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" name='userEmail' value={userData.userEmail} placeholder="enter email" autoComplete='off' onChange={handlshow} required />

                                            </Form.Group>

                                            <Form.Group className="mb-3" >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='userPassward' value={userData.userPassward} placeholder="enter password" autoComplete='off' onChange={handlshow} required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='userPassward' value={userData.userPassward} placeholder="enter password" autoComplete='off' onChange={handlshow} required />
                                            </Form.Group>

                                            <div style={{ display: 'grid', justifyItems: 'center' }}>
                                                <Button type='submit' variant="primary"> SignUp </Button>
                                            </div>
                                        </Form>
                                    </div>

                                    <div id='showDiv2' style={{ display: 'none' }} >
                                        <Form style={{ padding: '30px' }} >
                                            <h6>Otp Verification</h6>
                                            <hr />
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Enter Otp</Form.Label>
                                                <Form.Control type="text" name='userotp' placeholder="Enter Otp" autoComplete='off' onChange={(e) => setUserOtp(e.target.value)} required />
                                            </Form.Group>
                                            <div style={{ display: 'grid', justifyItems: 'center' }}>
                                                <Button type='button' variant="primary" onClick={(e) => verify()}> Check Otp </Button>
                                            </div>
                                        </Form>
                                    </div>

                                </div>
                            </Container>
                        </>
                        :

                        <Container fluid>
                            <div style={{ width: '26%', height: '50%', boxShadow: "10px 10px 10px 10px #888888", position: 'absolute', marginTop: '10%' }}>
                                <div id='showDiv1'>
                                    <Form style={{ padding: '30px', display: 'block' }} ref={form} onSubmit={sendEmail} >
                                        <h6>SignUp</h6>
                                        <hr />
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" name='userName' value={userData.userName} placeholder="enter name" autoComplete='off' onChange={handlshow} required />
                                        </Form.Group>

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
                                        <input name='otp' value={otps} placeholder="Otp will send to your mail" style={{ border: "none" }} hidden />
                                        <div style={{ display: 'grid', justifyItems: 'center' }}>
                                            <Button type='submit' variant="primary"> SignUp </Button>
                                        </div>
                                    </Form>

                                    <div style={{ padding: '15px' }}>
                                        <h6>Already have account? <Link to='/'>Login</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </Container>
                }
            </div>
        </>
    );
};

export default SignUp;
