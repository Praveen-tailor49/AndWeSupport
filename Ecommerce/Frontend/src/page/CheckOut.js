import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CheckOut = () => {

    const [allCart, setAllCart] = useState([])
    const [dataLen, setDataLen] = useState('')
    var count = 1;
    const [quantity, setQuantity] = useState(count);


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "userId": localStorage.getItem("email") });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showCart", requestOptions)
            .then(response => response.json())
            .then(result => {
                setAllCart(result.data)
                setDataLen(result.data.length);
            }
            )
            .catch(error => console.log('error', error));

    }, [])


    const plusQuantity = () => {
        count = quantity + 1;
        setQuantity(count)

    }
    const subQuantity = () => {

        if (quantity > 1) {
            const count = quantity - 1;
            setQuantity(count)
        }
    }
    
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {


                        dataLen > 0 ?



                            (
                                allCart.map(data => {
                                    return (
                                        <>
                                            <tr>
                                                <td><img style={{ height: '5vh' }} src={data.productImage} /> {data.productName}</td>
                                                <td>
                                                    <i class="fa fa-plus-square" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={() => plusQuantity()}></i>
                                                    <p>{quantity}</p>
                                                    <i class="fa fa-minus-square" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={() => subQuantity()}></i>
                                                </td>
                                                <td> {data.productPrice} </td>
                                                <td> {data.productPrice} </td>
                                            </tr>

                                        </>
                                    )
                                })
                            )

                            :

                            (
                                <p>
                                    No product Added
                                </p>
                            )

                    }
                </tbody>
                <Link to='/placed'> <Button variant="warning">Comfirm Order</Button> </Link>
                <Link to='/home'> <Button variant="primary" style={{ marginLeft: '10px' }}>Add More Product</Button> </Link>
            </Table>

        </div>
    )
}

export default CheckOut
