import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavbarAd({handleShow}) {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
            <Button variant="dark" onClick={handleShow}>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Button>

            <Navbar.Brand >Amazona Admin </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex" style={{flexGrow: '8', }} >
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="warning" m-6>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavbarAd
