import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';

const AddExtraService = () => {

    const [serviceName, setServiceName] = useState('')
    const [serviceId, setServiceId] = useState('')
    const [servicesPrice, setServicesPrice] = useState('')
    const [allService, setAllService] = useState([])

    useEffect(()=>{
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/showService", requestOptions)
            .then(response => response.json())
            .then(result =>setAllService(result))
            .catch(error => console.log('error', error));
    }, [])

    const AddService = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "serviceName": serviceName,
            "serviceId": serviceId,
            "servicesPrice": servicesPrice
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/add-extra-service", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Form style={{ marginTop: '15%', width: '30%' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Services Name</Form.Label>
                        <Form.Control type="text" placeholder=" Services Name" onChange={(e) => setServiceName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Service Price</Form.Label>
                        <Form.Control type="text" placeholder="Services Price" onChange={(e) => setServicesPrice(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Catgory</Form.Label>
                        <Form.Select onChange={(e)=>setServiceId(e.target.value)}>
                        <option>Default select</option>
                            {
                                allService.map((data, index)=>(
                                    <>
                                        <option value={data.id} key={index}>{data.serviceName}</option>
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

export default AddExtraService
