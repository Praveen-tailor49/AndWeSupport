import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slide from "../component/Slide";
import Navbar from "../component/NavBar";



function Home({ buyProduct }) {

    const [allData, setAllData] = useState([])
    const [searchData, setSearchData] = useState('')
    const [item, setItem] = useState([])

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

    const checkoutProduct = (val) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "userId": localStorage.getItem("email"), "productId": val.id , "productName":val.ProductName, "productImage": val.ProductImage, "productPrice": val.ProductPrice });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/cartProduct", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    
                    alert('Successfully Add ')
                    
                } else {
                    alert('Not add')
                }
            })
            .catch(error => console.log('error', error));
    }
    
    return (
        <>
            <Navbar setSearchData={setSearchData} />
            <Slide />
            <div style={{ display: 'grid', gridTemplateColumns: " repeat(auto-fit, minmax(300px, 1fr))", gridGap: '2px', justifyItems: 'center' }}>

                {
                    allData.filter(val => {
                        if (searchData === "") {
                            return val
                        } else if (val.ProductName.toLowerCase().includes(searchData.toLocaleLowerCase())) {
                            return val
                        }
                    }).map(val => {
                        return (
                            <Card style={{ width: '18rem', marginTop: '30px' }}>
                                <Card.Img variant="top" src={val.ProductImage} />
                                <Card.Body>
                                    <Card.Title>{val.ProductName}</Card.Title>
                                    <Card.Text>
                                        {val.ProductPrice}
                                    </Card.Text>
                                    <Link to='/buy-product'> <Button variant="primary" onClick={() => buyProduct(val)}>Buy </Button></Link>
                                     <Button variant="warning" style={{ marginLeft: '10px' }} onClick={() => checkoutProduct(val)} >Add </Button>

                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home
