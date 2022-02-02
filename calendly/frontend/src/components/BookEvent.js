import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'


const BookEvent = ({bookEventDetails}) => {
  const { token } = useParams();

  const [eventData, setEventsData] = useState([])
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {

    meetingData();

    userData();

  },[])

  const meetingData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "token": token
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/allEvents", requestOptions)
      .then(response => response.json())
      .then(result => setEventsData(result))
      .catch(error => console.log('error', error));
  }

  const userData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "token": token
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/userDataToken", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <div style={{ margin: 'auto', height: '70vh', width: '50%', background: '#F5F5F5', boxShadow: ' 0 0 15px  #E8E8E8', marginTop: '100px' }} >
        <Container>
          <div style={{ textAlign: 'center' }}>
            <h6>Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.</h6>
          </div>
        </Container>

        <Container style={{ padding: '130px' }}>
          <Row >
            {
              eventData.length > 0 ?
                eventData.map((val, index) => {
                  return (
                    <Col key={index}>
                      <Link to='/calender'><Card style={{ width: '18rem', marginTop: '12px', cursor: 'pointer', height:'15vh' }} onClick={()=>bookEventDetails(val)}>
                        <Card.Body>
                          <Card.Title>{val.duration} Meeting</Card.Title>
                        </Card.Body>
                      </Card></Link>
                    </Col>
                  )
                })
                :
                <h1 style={{ textAlign: 'center' }}>No Event Create</h1>
            }
          </Row>
        </Container>
      </div>

    </>
  );
};

export default BookEvent;
