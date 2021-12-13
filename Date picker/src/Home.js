import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import './App.css'
import NavBar from './NavBar';
import Meeting from './Meeting';


const Home = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [title, setTitle] = useState('');


    const handleShow = (e) => {
        setDate(e)

        document.getElementById('show').style.display = 'block';
        
    }

    const getTime = (e) => {
        setTime(e)
    }

    const show = () => {
        document.getElementById('showButton').style.display = 'block';
    }

    const sendData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "title": title, "date": date.toString().slice(0,15), "time": time });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/schedule", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            document.getElementById('showButton').style.display = 'none';
            document.getElementById('show').style.display = 'none';
    }

    return (
        <>
            <NavBar />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                
                <div style={{ marginTop: "5%", marginBottom:'1%' }}>
                <h1 style={{  marginBottom:'10%' }}>Schedule Events</h1>
                    <Calendar
                        value={date}
                        onClickDay={handleShow}
                        onClickMonth={handleShow}
                    />
                </div>

                <div id='show' style={{ width: '10%', marginLeft: '100px', marginTop: "8%", display: 'none' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" value='11.30' style={{ width: '100px', marginTop: "5px" }} onClick={(e) => { getTime(e.target.value); show() }} >
                        11.30
                    </Button>
                    <Button variant="primary" value='12.30' style={{ width: '100px', marginTop: "5px" }} onClick={(e) => { getTime(e.target.value); show() }}>
                        12.30
                    </Button>
                    <Button variant="primary" value='1.30' style={{ width: '100px', marginTop: "5px" }} onClick={(e) => { getTime(e.target.value); show() }}>
                        1.30
                    </Button>
                    <Button variant="primary" value='3.30' style={{ width: '100px', marginTop: "5px" }} onClick={(e) => { getTime(e.target.value); show() }}>
                        3.30
                    </Button>
                    <Button variant="primary" value='4.30' style={{ width: '100px', marginTop: "5px" }} onClick={(e) => { getTime(e.target.value); show() }}>
                        4.30
                    </Button>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center'  }}>
                <div id='showButton' style={{ marginLeft: '20px', marginTop: "50px", display: 'none' }}>
                    <Button variant="primary" value='3.30' style={{ width: '100px' }}>
                        Cencal
                    </Button>
                    <Button variant="primary" value='4.30' style={{ width: '100px', marginLeft: "10px", }} onClick={() => sendData()}>
                        Comferm
                    </Button>
                </div>
            </div>
            <div style={{marginTop:'50px'}}>

            <Meeting date={date}/>
            </div>
        </>
    )
}

export default Home
