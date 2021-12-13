import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BuyProduct({productPrice}) {

    var count = 1;
    var retrievedObject = localStorage.getItem('product');

    const [totalPrice, setTotalPrice] = useState(productPrice);
    const [quantity, setQuantity] = useState(count);
    const [idata, setIdata] = useState([JSON.parse(retrievedObject)]);

   
    localStorage.setItem('quantity', quantity)
    localStorage.setItem('totalPrice', totalPrice)

    const plusQuantity = (ProductPrice) => {
        count = quantity + 1;
        setQuantity(count)
        console.log(quantity);
        const price = count *ProductPrice ;
        setTotalPrice(price)
    }
    const subQuantity = (ProductPrice) => {

        if (quantity > 1) {
            const count = quantity - 1;
            setQuantity(count)

            const price = totalPrice - ProductPrice;
            setTotalPrice(price)

        } else {
            setIdata('')
        }
    }
   
    
    console.log(quantity);
    return (
        <>
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
                  
                        {
                            idata.length>0 ?
                            idata.map(val => {
                                return (
                                    <>
                                    <tbody>
                                        <tr>
                                            <td><img style={{ height: '5vh' }} src={val.ProductImage} /> {val.ProductName}</td>
                                            <td>
                                                <i class="fa fa-plus-square" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={() => plusQuantity(val.ProductPrice)}></i>
                                                <p>{quantity}</p>
                                                <i class="fa fa-minus-square" aria-hidden="true" style={{ cursor: 'pointer' }} onClick={() => subQuantity(val.ProductPrice)}></i>
                                            </td>
                                            <td> {val.ProductPrice} </td>
                                            <td>{totalPrice}</td>
                                        </tr>
                                        </tbody>
                                        <Link to='/placed'> <Button variant="warning">Comfirm Order</Button> </Link>
                                    </>
                                )
                            })
                            :
                            <Link to='/home'> <Button variant="warning">Continue shopping</Button> </Link>
                        }


                    
                </Table>
                
            </div>
        </>
    )
}

export default BuyProduct
