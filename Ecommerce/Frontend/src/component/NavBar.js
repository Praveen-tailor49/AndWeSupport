import React from 'react'
import { Navbar, Container,  Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar({ setSearchData }) {
    var name = localStorage.getItem("name");

    const logOut = () =>{
        localStorage.removeItem("name");
        localStorage.removeItem("email");
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand >amazona</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex" style={{ flexGrow: '1', }} >
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => setSearchData(e.target.value)}
                            />
                            <Button variant="warning" >Search</Button>
                            <Link to='/view-order'><Button variant="dark" style={{ marginLeft:'50px'}}>order</Button></Link>
                            <h6  style={{color:'white', marginLeft:'50px', display:'inline'}} >Welcome-{name} </h6>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{marginLeft:'50px'}}>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                     <Dropdown.Item > <Link to="/" style={{color:'Black', textDecoration:'none'}}> SingUp</Link></Dropdown.Item>
                                    <Dropdown.Item ><Link to="/singin" style={{color:'Black', textDecoration:'none'}}>SingIn</Link></Dropdown.Item>
                                    <Dropdown.Item onClick={()=>logOut()}><Link to="/" style={{color:'Black', textDecoration:'none'}}>LogOut</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link to ='/checkOut'> <Button variant="warning" type="button" style={{marginLeft:'1%'}} >
                                Cart
                            </Button></Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
