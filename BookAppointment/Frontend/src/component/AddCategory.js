import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';


const AddCategory = () => {

    const [categoryName, setCategoryName] = useState('')

    const addCategory = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "categoryName": categoryName,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/add-category", requestOptions)
            .then(response => response.json())
            .then(result =>{
                if(result === 'Successfully'){
                    alert('Successfully Add ')
                } else (
                    alert('Not  Add ')
                )
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <NavBar/>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Form style={{ marginTop: '15%', width: '30%' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Services Name</Form.Label>
                        <Form.Control type="text" placeholder="Category Services Name"  onChange={(e)=>setCategoryName(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={addCategory}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default AddCategory
