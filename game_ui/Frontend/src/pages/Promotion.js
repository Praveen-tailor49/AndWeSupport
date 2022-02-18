import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BiRupee } from 'react-icons/bi';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';

const Promotion = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand href="#home" style={{ color: 'white' }}><Link to='/mine' style={{marginLeft:'42px', color:'white'}}><IoMdArrowRoundBack/></Link> <span style={{ marginLeft: '42px' }}>Promotion</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ padding: '20px' }}>
                        <Nav className="me-auto">
                            <Nav.Link >Promotion Record</Nav.Link>
                            <Nav.Link >Bonus Record</Nav.Link>
                            <Nav.Link >Apply Record</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div style={{ marginTop: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <h6 style={{ fontSize: '20px' }}>Balance: <BiRupee />0</h6>
                    </div>
                    <div>
                        <Button style={{ width: '10rem', margin: '6px' }} variant="primary" type="submit">
                            Apply to Balance
                        </Button>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '25px' }}>
                <div style={{ padding: '25px' }}>
                    <p>My Promotion Code</p>
                    <h6>B2k32FCH</h6>
                    <hr />
                </div>

                <div style={{ padding: '25px' }}>
                    <p>Get Upto 10% Extra Off using Promotion Code</p>
                    {/* <h6>https://meok.in/promote/#/register?c=B2K32FCH</h6> */}
                    <hr />
                </div>

                {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <Button style={{ width: '10rem', margin: '6px' }} variant="light" type="submit">
                            Open Link
                        </Button>
                    </div>
                </div> */}
            </div>
            <Footer/>
        </>
    )
}

export default Promotion