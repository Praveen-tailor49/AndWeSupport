import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Container, Button } from 'react-bootstrap';


const Calender = ({ bookEventData }) => {

    const [date, setDate] = useState(new Date());
    const [buttonData, setButtonData] = useState([]);

    const handleShow = (e) => {
        setDate(e);
        document.getElementById('showTimeDiv').style.display = 'block';
    }

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "btnId": bookEventData.duration
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/eventsButton", requestOptions)
            .then(response => response.json())
            .then(result => setButtonData(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <div style={{ margin: 'auto', height: '70vh', width: '50%', background: '#F5F5F5', boxShadow: ' 0 0 15px  #E8E8E8', marginTop: '100px' }} >
                <Container style={{ padding: '130px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Calendar
                            value={date}
                            onClickDay={(e) => handleShow(e)}
                            onClickMonth={handleShow}
                            minDate={new Date()}
                            tileDisabled={({ date }) =>
                                date.getDay() === 0 || date.getDay() === 6
                            }
                        />
                    </div>
                </Container>
                <div style={{ display: 'none', marginTop: '10px' }} id='showTimeDiv'>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>
                        {
                            buttonData.map(val =>(
                                <Button variant="success" style={{ width: '100px', marginLeft: '10px' }}>{val.button}</Button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Calender;
