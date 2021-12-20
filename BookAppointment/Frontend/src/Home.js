import React from 'react'
import { Button } from 'react-bootstrap';
import HomeImage from './image/demo2.png'
import Modals from './component/Modal';
const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div style={{ display: 'flex', margin: '100px' }}>
                <div style={{ textAlign: 'center', marginTop: '130px' }} >
                    <h1>Appointment Booking and Scheduling for Small Businesses</h1>
                    <p>Incredibly powerful software, yet simple in everyday use for customers and administrators.</p>
                    <Button variant="primary" onClick={() => setModalShow(true)}>Book Appointment</Button>
                </div>

                <div >
                    <img src={HomeImage} alt='img' style={{ height: '60vh' }} />
                </div>

                <div>
                    <Modals
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
