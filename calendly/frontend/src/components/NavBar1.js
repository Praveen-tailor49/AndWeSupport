import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';


const NavBar1 = () => {
    return (
        <>
            <div>
                <hr />
                <Navbar bg="light" expand="lg" style={{ height: '150px' }}>
                    <Container>
                        <Navbar.Brand>My Calendly</Navbar.Brand>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Event Types</Nav.Link>
                                <Nav.Link href="#link">Scheduled Events  </Nav.Link>
                                <Nav.Link href="#link">Workflows</Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar1
