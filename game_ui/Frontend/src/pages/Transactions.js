import React from 'react'
import { Navbar } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Footer from '../components/Footer';

const Transactions = () => {
    return (
        <>
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand href="#home" style={{color:'white'}}><span style={{marginLeft:'42px'}}><IoMdArrowRoundBack/></span> <span style={{marginLeft:'42px'}}>Transactions</span> </Navbar.Brand>
                </Navbar>
            </div>

            <Footer/>
        </>
    )
}

export default Transactions