import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



const AllEvent = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3000/schedule", requestOptions)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log('error', error));
    })

    const deleteData = (id) => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`http://localhost:3000/schedule/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Link to='/'><Button variant="primary"> Back </Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(data => {
                          

                                return (
                                    <>
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.date}</td>
                                            <td> {data.time} </td>
                                            <td><i class="fa fa-trash" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={() => deleteData(data.id)}></i></td>
                                        </tr>
                                    </>
                                )
                            
                        })

                    }

                </tbody>
            </Table>
        </>
    )
}

export default AllEvent