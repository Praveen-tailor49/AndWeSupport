import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Admin from "../page/Admin";

function AddProduct() {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [allCategory, setAllCategory] = useState([])


    useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showCategory", requestOptions)
            .then(response => response.json())
            .then(result => setAllCategory(result))
            .catch(error => console.log('error', error));
    }, [])

    const sendData = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "ProductName": productName, "ProductImage": productImage, "ProductPrice": productPrice, "productCategory":productCategory });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/product", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result === 'Successfully') {
                    alert('Successfully added')
                } else {
                    alert('Product not add')
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
        <Admin/>
        <div style={{ display: 'grid', justifyItems: 'center' }}>
            <h1>Add Product</h1>
            <Form style={{ width: '40%', marginTop: '100px' }}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" onChange={(e) => setProductName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Product Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Price" onChange={(e) => setProductPrice(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Product Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Image" onChange={(e) => setProductImage(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Category </Form.Label>
                    <Form.Select aria-label="Default select example"  onChange={(e) => setProductCategory(e.target.value)} >
                    <option >Select Category</option>
                        {
                            allCategory.map(data => {
                                return (
                                    <>
                                        <option value={data.id}>{data.name}</option>
                                    </>
                                )
                            })
                        }

                    </Form.Select>
                </Form.Group>



                <Button variant="warning" type="button" onClick={(e) => { sendData(e) }} >
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}

export default AddProduct
