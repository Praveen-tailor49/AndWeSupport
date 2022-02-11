import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import { Form, Button } from 'react-bootstrap';
// import { FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


export const Login = () => {
    const [page, setPage] = useState(true)
    return (
        <>
            <NavBar page={page} />

            <div style={{ padding: '30px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder={'Mobile Number'} />
                        {/* <Form.Control type="text" placeholder={<FaMobileAlt/> + 'Mobile Number'} /> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column' }}>
                        <div>
                            <Button style={{ width: '16rem' }} variant="primary" type="submit">
                                Login
                            </Button>
                        </div>

                        <div>
                            <Link to ='/register' onClick={()=>setPage(false)}><Button style={{ width: '5rem', margin: '3px' }} variant="secondary" type="submit">
                                Register
                            </Button></Link>
                            <Button style={{ width: '10rem', margin: '6px' }} variant="secondary" type="submit">
                                Forgot Password?
                            </Button>
                        </div>

                    </div>
                </Form>
            </div>
            <Footer/>
        </>
    )
}
