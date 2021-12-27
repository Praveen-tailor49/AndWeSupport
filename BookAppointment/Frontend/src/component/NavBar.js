import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'


const NavBar = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('admin')
        navigate('/')
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Admin</Navbar.Brand>
                    <div>
                        <Link to ='/all-bookings'>
                            <Button variant="warning">All Bookings</Button>
                        </Link>
                    </div>

                    <div>
                            <Button variant="danger" onClick={()=>{logout()}}>Logout</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
