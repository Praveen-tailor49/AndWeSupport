import React from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

const AddBankCard = () => {
  return (
    <>
        <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{marginLeft:'42px', color:'white'}}><IoMdArrowRoundBack/></Link></Navbar.Brand>
                    <Navbar.Brand >Add Bank Card</Navbar.Brand>
                </Navbar>
            </div>
            <div>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Actual Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="IFSC Code" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Bank Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Account Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="State/Territory" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="UPI Account" />
                        </Form.Group>

                        
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Button variant="primary" style={{width:'13rem'}} type="submit">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default AddBankCard