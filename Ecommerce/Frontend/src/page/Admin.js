import React, { useState } from 'react'
import Navbar from "../component/NavbarAd";
import SideBar from '../component/SideBar';



function Admin() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    return (
        <>
            <Navbar handleShow={handleShow}/>
            <SideBar handleClose={handleClose} show={show}/>
            <h1 style={{display:'flex', justifyContent:'center'}}>Welcome to Admin page</h1>
        </>
    )
}

export default Admin
