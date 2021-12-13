import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import Admin from "../page/Admin";
import { Link } from 'react-router-dom';

const ViewCategory = ({sendData}) => {

    const [allData, setAllData] = useState([])
    // const [searchData, setSearchData] = useState('')

    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showCategory", requestOptions)
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
                                <Card.Img variant="top" src={val.categoryImg} />
                                <Card.Body>
                                    <Card.Title>{val.name}</Card.Title>
                                    <Card.Text>
                                        {val.status}
                                    </Card.Text>
                                    <Link to='/category-list'>
                                    <Button variant="primary" onClick={() => sendData(val.id)}>View list</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ViewCategory

