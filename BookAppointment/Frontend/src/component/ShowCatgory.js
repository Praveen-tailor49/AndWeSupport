import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';


const ShowCatgory = () => {

    const [category, setCategory] = useState([])

    useEffect(()=>{
        let requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3001/showCategory", requestOptions)
            .then(response => response.json())
            .then(result => setCategory(result))
            .catch(error => console.log('error', error));
    },[])
    return (
        <>
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No .</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map((data, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.categoryName}</td>
                                        <td> <i className="fas fa-edit" style={{cursor:'pointer'}}></i> <i style={{cursor:'pointer'}} className="fas fa-trash"></i></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    </>
    )
}

export default ShowCatgory
