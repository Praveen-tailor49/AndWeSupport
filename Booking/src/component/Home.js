import React from 'react'
import { Button} from 'react-bootstrap';
import HomeImage from '../image/homeImage.png'
const Home = () => {
    return (
        <>
            <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}>
                <div >
                    <h1>Appointment Booking and Scheduling for Small Businesses</h1>
                    <p>Incredibly powerful software, yet simple in everyday use for customers and administrators.</p>
                    <Button variant="primary">Book Appointment</Button>
                </div>

                <div >
                    <img src={HomeImage} alt='img'/>
                </div>
            </div>
        </>
    )
}

export default Home
