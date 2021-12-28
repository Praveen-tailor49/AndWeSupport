import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'react-bootstrap';


const Calender = ({ getTime, setCalDate, setButtonId }) => {

    var d = new Date()

    var nextDate = d.getDate() - 1

    console.log(d);
    console.log(nextDate);

    const [date, setDate] = useState(new Date());
    const [slot, setSlot] = useState([]);
    const [bookinData, setBookingData] = useState([])

    useEffect(() => {

        soltDatas();

        bookingData();

    }, [])

    const soltDatas = () => {

        let requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showSlot", requestOptions)
            .then(response => response.json())
            .then(result => setSlot(result))
            .catch(error => console.log('error', error))

    }

    const bookingData = () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOption = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showSlotBooking", requestOption)
            .then(response => response.json())
            .then(result => {
                if (result.length > 0) {
                    setBookingData(result)
                }
            })
            .catch(error => console.log('error', error));

    }



    const handleShow = (e) => {
        setDate(e);

        enbaleButton()

        dis(e)
        document.getElementById('showTimeDiv').style.display = 'block';

    }

    const enbaleButton = () => {
        slot.forEach(data => {
            document.getElementById(data.id).disabled = false;
        })
    }

    const dis = (d = date) => {


        bookinData.forEach(val => {
            if (d.toString().slice(0, 15) === val.date) {
                console.log('MATCH')
                document.getElementById(val.btnId).disabled = true;
            }
        })
    }

    return (
        <>

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

            <div style={{ display: 'none', marginTop: '10px' }} id='showTimeDiv'>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '10px' }}>

                    {
                        bookinData.length !== 0 ?
                            slot.map(data => {

                                return (
                                    <Button variant="success" id={data.id} style={{ width: '100px', marginLeft: '10px' }} value={data.date} onClick={(e) => { getTime(e.target.value); setCalDate(date.toString()); setButtonId(data.id) }}>{data.date}</Button>
                                )
                            })
                            :
                            slot.map(data => {
                                return (
                                    <Button variant="success" style={{ width: '100px', marginLeft: '10px' }} value={data.date} onClick={(e) => { getTime(e.target.value); setCalDate(date.toString()); setButtonId(data.id) }}>{data.date}</Button>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default Calender
