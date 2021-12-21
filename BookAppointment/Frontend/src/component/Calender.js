import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'react-bootstrap';


const Calender = ({getTime}) => {

    const [date, setDate] = useState(new Date());


    const handleShow = (e) => {
        setDate(e);

        document.getElementById('showTimeDiv').style.display = 'block'
    }

    console.log(date);

    return (
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Calendar
                    value={date}
                    onClickDay={handleShow}
                    onClickMonth={handleShow}
                />
            </div>

            <div style={{ display: 'none', marginTop:'10px' }} id='showTimeDiv'>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '15px' }}>
                    <Button variant="success" value='8.00' onClick={(e)=>getTime(e.target.value)}>8.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >8.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >9.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >9.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >10.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >10.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >11.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >11.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >12.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >12.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >1.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >1.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >2.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >2.30</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >3.00</Button>
                    <Button variant="success" onClick={(e)=>getTime(e.target.value)} >3.00</Button>
                </div>
            </div>
        </>
    )
}

export default Calender
