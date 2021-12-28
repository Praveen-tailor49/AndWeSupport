import React from 'react'
import { Card, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'


const Admin = () => {
    return (
        <>
            <NavBar />
            <div style={{margin:'20px'}}>
            <div style={{ display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gridGap:'20px' }}>
                <div>
                    <Card style={{ width: '19rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Category</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-category'><Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Catgory</Button></Link>
                            <Link to='/show-category'><Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show service</Button></Link>
                        </Card.Body>
                    </Card>
                </div>

                <div >
                    <Card style={{ width: '19rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Service</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-services'><Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Service</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div >
                    <Card style={{ width: '19rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Extra Service</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-extra-services'><Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Service</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px',background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show service</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div >
                    <Card style={{ width: '19rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Service Duration</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/add-duration'><Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Duration</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show Duration</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div >
                    <Card style={{ width: '19rem', background: 'linear-gradient(to right, rgb(214, 214, 214), rgb(253, 247, 247))', boxShadow: "1px 1px 2px gray" }}>
                        <Card.Body>
                            <Card.Title>Add Time Slot</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                            <Link to='/slote'><Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Add Time Slot</Button></Link>
                            <Button style={{ border: 'none', marginLeft: '10px', background: '#2d54de', boxShadow: "1px 1px 2px gray" }}>Show Slot</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            </div>
        </>
    )
}

export default Admin
