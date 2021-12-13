import React from 'react'
import { Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SideBar({ handleClose, show }) {
    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add List</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ul">
                        <Link to='/add-category'> <ListGroup.Item as="li">Add Category</ListGroup.Item> </Link>
                        <Link to='/add-product'> <ListGroup.Item as="li">Add Product</ListGroup.Item></Link>
                        <Link to='/view-product'> <ListGroup.Item as="li">View Product</ListGroup.Item></Link>
                        <Link to='/view-category'> <ListGroup.Item as="li">View Category</ListGroup.Item></Link>
                        <Link to='/view-order-list'> <ListGroup.Item as="li">View OrderList</ListGroup.Item></Link>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideBar
