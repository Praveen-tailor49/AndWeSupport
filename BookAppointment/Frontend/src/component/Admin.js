import React from 'react'
import { Card, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'


const Admin = () => {
    return (
        <>
            <NavBar />
            <div style={{ display:'flex', justifyContent:'center' }}>
                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Category</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-category'><Button style={{ border: 'none', marginLeft: '10px', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>Add Service Catgory</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Service</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-services'><Button style={{ border: 'none', marginLeft: '10px', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>Add Service</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div style={{ margin: '100px' }}>
                    <Card style={{ width: '22rem', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Extra Service</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-extra-services'><Button style={{ border: 'none', marginLeft: '10px', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>Add Service</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: 'linear-gradient(to right, rgb(130, 138, 201), rgb(192, 155, 155))', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default Admin
