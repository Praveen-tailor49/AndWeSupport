import React from 'react'
import NavBar from '../components/NavBar';
import { Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';


export const Register = () => {
    return (
        <>
            <NavBar />

            <div style={{ padding: '30px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Enter Name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder={'Mobile Number'} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Enter Nick Name' required />
                    </Form.Group>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '70rem' }}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Verification Code" required />
                            </Form.Group>
                        </div>

                        <div style={{ width: '10rem', marginLeft: '10px' }}>
                            <Button variant="secondary" type="submit">
                                OTP
                            </Button>
                        </div>
                    </div>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Recommendation Code" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree PRIVACY POLICY" />
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <Button style={{ width: '16rem' }} variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    )
}
