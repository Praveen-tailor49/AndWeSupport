import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewOrderU = () => {

    const [allOrder, setAllOrder] = useState([])
    const [orderLen, setOrderLen] = useState('')

    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "userId": "good@gmail.com" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showOrder", requestOptions)
            .then(response => response.json())
            .then(result => {
                setAllOrder(result.data)
                setOrderLen(result.data.length);
            }
            )
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {


                        orderLen > 0 ?



                            (
                                allOrder.map(data => {
                                    return (
                                        <>
                                            <tr>
                                                <td><img style={{ height: '5vh' }} src={data.productImage} /> {data.productName}</td>
                                                <td>
                                                    <p>{data.quantity}</p>
                                                </td>
                                                <td> {data.totalPrice} </td>
                                            </tr>

                                        </>
                                    )
                                })
                            )

                            :

                            (
                                <p>
                                    No order
                                </p>
                            )

                    }
                </tbody>
                <Link to='/home'> <Button variant="warning">Continue shopping</Button> </Link>
            </Table>

        </div>
    )
}

export default ViewOrderU
