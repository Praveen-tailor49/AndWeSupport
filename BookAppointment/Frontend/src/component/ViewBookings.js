import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';


const ViewBookings = () => {

    const [bookinData, setBookingData] = useState([])

    useEffect(() => {
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
    })

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No .</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Services</th>
                        <th>Extra Services</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookinData.length > 0 ?
                            bookinData.map((val) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{val.id}</td>
                                            <td>{val.userName}</td>
                                            <td>{val.email}</td>
                                            <td>{val.phone}</td>
                                            <td>{val.service}</td>
                                            <td>{val.extraService}</td>
                                            <td>{val.time}</td>
                                            <td>{val.date}</td>
                                        </tr>
                                    </>
                                )
                            })
                            :
                            <div>
                                <h1>
                                    No Bookings Available
                                </h1>
                            </div>
                    }

                </tbody>
            </Table>
        </>
    )
}

export default ViewBookings
