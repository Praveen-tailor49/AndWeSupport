import React from 'react'
import '../App.css'
import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div style={{textAlign:'center'}}>

            <h6 style={{marginTop:'10%'}}> Hey {localStorage.getItem('name')}</h6>
            <h6 style={{color:'orange'}}>Your order is confirmed!</h6>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>

            <p>Thanks for shopping!</p>
            <Link to='/home'> <Button variant="primary" >Continue shopping</Button> </Link>

        </div>
    )
}

export default Order
