import React from 'react'
import Admin from "../page/Admin";
import { Card, Button } from 'react-bootstrap';

function CategoryList({categoryList}) {
    return (
        <>
            <Admin />

            <div style={{  display: 'grid', gridTemplateColumns: " repeat(auto-fit, minmax(300px, 1fr))", gridGap: '2px', justifyItems:'center' }}>

            {
                categoryList.map(val => {
                    return (
                        <Card style={{ width: '18rem', marginTop:'30px' }}>
                            <Card.Img variant="top" src={val.ProductImage} />
                            <Card.Body>
                                <Card.Title>{val.ProductName}</Card.Title>
                                <Card.Text>
                                   {val.ProductPrice}
                                </Card.Text>
                                <Button variant="primary">Edit</Button>
                                <Button variant="danger" style={{marginLeft:'10px'}}>Remove</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            </div>
        </>
    )
}

export default CategoryList
