import React from 'react'
import { Card, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'


const Admin = () => {
    return (
        <>
            <NavBar />
            <div style={{ display:'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Category</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-category'><Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Service Catgory</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Service</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-services'><Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Service</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Extra Service</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-extra-services'><Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Service</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Service Duration</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-duration'><Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Duration</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show Duration</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </>
    )
}

export default Admin
