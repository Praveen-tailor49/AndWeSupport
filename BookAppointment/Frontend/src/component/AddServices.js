import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';

const AddServices = () => {
    const [serviceName, setServiceName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [servicesPrice, setServicesPrice] = useState('')
    const [allCategory, setAllCategory] = useState([])

    useEffect(()=>{
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/showCategory", requestOptions)
            .then(response => response.json())
            .then(result =>setAllCategory(result))
            .catch(error => console.log('error', error));
    }, [])

    const AddService = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "serviceName": serviceName,
            "categoryId": categoryId,
            "servicesPrice": servicesPrice
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow' 
        };

        fetch("http://localhost:3001/add-service", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result === 'Successfully'){
                    alert('Successfully Add ')
                } else (
                    alert('Not  Add ')
                )
            })
            .catch(error => console.log('error', error));
    }

    console.log(categoryId);
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Form style={{ marginTop: '15%', width: '30%' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Services Name</Form.Label>
                        <Form.Control type="text" placeholder="Category Services Name" onChange={(e) => setServiceName(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Service Price</Form.Label>
                        <Form.Control type="text" placeholder="Services Price" onChange={(e) => setServicesPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Catgory</Form.Label>
                        <Form.Select onChange={(e)=>setCategoryId(e.target.value)}>
                        <option>Default select</option>
                            {
                                allCategory.map((data, index)=>(
                                    <>
                                        <option value={data.id} key={index}>{data.categoryName}</option>
                                    </>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" onClick={AddService}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddServices
