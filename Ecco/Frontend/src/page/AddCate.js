import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import Admin from "../page/Admin";


function AddCate() {

    const [cateName, setCateName] = useState('')
    const [cateSlug, setCateSlug] = useState('')
    const [cateImage, setCateImage] = useState('')
    const [cateStatus, setCateStatus] = useState('')


    const sendData = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ cateName, cateSlug, cateImage, cateStatus });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/category", requestOptions)
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

    console.log(cateName);

    return (
        <>
        <Admin/>
        <div style={{ display: 'grid', justifyItems: 'center' }}>
            <h1>Add Category</h1>
            <Form style={{ width: '40%', marginTop: '100px' }}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category Name"  onChange={(e) => setCateName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Slug </Form.Label>
                    <Form.Control type="text" placeholder="Enter Category Price"  onChange={(e) => setCateSlug(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Category Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category Image"  onChange={(e) => setCateImage(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Category Status</Form.Label>
                    <Form.Select aria-label="Default select example"  onChange={(e) => setCateStatus(e.target.value)} >
                        <option> select Status</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="warning" type="button" onClick={(e)=>sendData(e)} >
                    Submit
                </Button>
            </Form>
        </div >
        </>
    )
}

export default AddCate
