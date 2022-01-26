import React from 'react';
import { Navbar, Container, Form, Button, FormControl } from 'react-bootstrap';
import img from '../image/back-img.jpg'

const SignUp = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '100vh' }}>

                <Container fluid>
                    <div style={{ width: '26%', height: '40%', boxShadow: "10px 10px 10px 10px #888888", position: 'absolute', marginTop: '10%' }}>
                        <Form style={{ padding: '30px' }}>
                            <h6>SignUp</h6>
                            <hr />
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="enter name" autocomplete='off' required/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="enter email" autocomplete='off' required />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="enter password" autocomplete='off' required />
                            </Form.Group>
                            <div style={{display:'grid', justifyItems:'center'}}>
                                <Button type='submit' variant="primary"> SignUp </Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default SignUp;
