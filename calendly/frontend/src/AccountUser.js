import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AccountUser = () => {

    const [userProfileData, setUserProfileData] = useState([])

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": localStorage.getItem('token')
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/userData", requestOptions)
            .then(response => response.json())
            .then(result => setUserProfileData(result))
            .catch(error => console.log('error', error));
    }, [])
    
    return (
        <>
            <hr style={{ margin: '0 rem 0 !important' }} />
            <div style={{ marginTop: '20px' }}>
                <Container>
                    <div style={{ display: 'flex' }}>
                        <h1><i className="fas fa-user-circle"></i> </h1>
                        {
                            userProfileData.map(val => (
                                <p style={{ margin: '15px' }}>{val.userName}</p>
                            ))
                        }
                    </div>
                    <div style={{ display: 'grid', justifyItems: 'end', margin: '0px' }}>
                        <Link to="/events"> <Button style={{ border: '1px solid blue', color: 'blue', background: 'white', borderRadius: '25px' }}> + New Event Type</Button></Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AccountUser
