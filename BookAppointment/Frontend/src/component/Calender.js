import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'react-bootstrap';


const Calender = ({ getTime, setCalDate, setButtonId }) => {

    const [date, setDate] = useState(new Date());
    const [slot, setSlot] = useState([]);
    const [bookinData, setBookingData] = useState([])

    useEffect(() => {
        
        soltDatas();

    }, [])

    const soltDatas = () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showSlot", requestOptions)
            .then(response => response.json())
            .then(result => setSlot(result))
            .catch(error => console.log('error', error))



        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // let raw = JSON.stringify({
        //     "date": e.toString().slice(0, 15)
        // });

        let requestOption = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showSlotBooking", requestOption)
            .then(response => response.json())
            .then(result => {
                if (result.length > 0) {
                    console.log(result)
                    setBookingData(result)   
                }
            })
            // .then(() => dis())
            .catch(error => console.log('error', error)); 
    }

    const handleShow = (e) => {
        setDate(e);

        slot.forEach(data => {
            document.getElementById(data.id).disabled = false;
        })

        dis(e)

    }

    const dis = (d = date ) => {


        bookinData.forEach(val => {
            // console.log(val)
            // console.log(date)
            if(d.toString().slice(0,15) === val.date){
                console.log('MATCH')
                document.getElementById(val.btnId).disabled = true;
            }
        })
        document.getElementById('showTimeDiv').style.display = 'block';
    }
    

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Calendar
                    value={date}
                    onClickDay={(e) => handleShow(e)}
                    onClickMonth={handleShow}
                    tileDisabled={ ({activeStartDate, date, view }) =>
                        date.getDay() === 0 || date.getDay() === 6 || (date < new Date() ? true : false)
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
