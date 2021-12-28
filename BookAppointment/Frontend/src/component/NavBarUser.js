import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'


const NavBarUser = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('name')
        navigate('/')
    }
    return (
        <>
             <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>Booking</Navbar.Brand>

                    <div>
                            <Button variant="danger" onClick={()=>{logout()}}>Logout</Button> 
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarUser
