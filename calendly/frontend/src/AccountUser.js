import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AccountUser = () => {
    return (
        <>
            <hr style={{ margin: '0 rem 0 !important' }} />
            <div style={{ marginTop: '20px' }}>
                <Container>
                    <div style={{ display: 'flex' }}>
                        <h1><i className="fas fa-user-circle"></i> </h1>
                        <p style={{ margin: '15px' }}>Praveen</p>

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
