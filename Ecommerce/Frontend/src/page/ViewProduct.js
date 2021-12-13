import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import Admin from "../page/Admin";

const ViewProduct = () => {

    const [allData, setAllData] = useState([])
    // const [searchData, setSearchData] = useState('')

    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/allProduct", requestOptions)
            .then(response => response.json())
            .then(result => setAllData(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <Admin />
            <div style={{ display: 'grid', gridTemplateColumns: " repeat(auto-fit, minmax(300px, 1fr))", gridGap: '2px', justifyItems: 'center' }}>

                {
                    allData.map(val => {
                        return (
                            <Card style={{ width: '18rem', marginTop: '30px' }}>
                                <Card.Img variant="top" src={val.ProductImage} />
                                <Card.Body>
                                    <Card.Title>{val.ProductName}</Card.Title>
                                    <Card.Text>
                                        {val.ProductPrice}
                                    </Card.Text>
                                    <Button variant="primary">Edit</Button>
                                    <Button variant="danger" style={{ marginLeft: '10px' }}>Remove</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ViewProduct

