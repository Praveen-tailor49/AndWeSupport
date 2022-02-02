import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import CreateEvent from './components/CreateEvent';
import EventForm from './components/EventForm';
import EventDuration from './components/EventDuration';
import BookEvent from './components/BookEvent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Calender from './components/Calender';
import 'react-calendar/dist/Calendar.css';
 
function App() {

  const [eventT, setEventType] = useState('')
  const [state,  setStates] = useState({
    eventName: '',
    location: '',
    description: '',
})

const [bookEventData, setBookEventDetails] = useState([])


  const eventType = (eventType) => {
      setEventType(eventType)
  }

  
const handlshow = (e) => {
    const {name, value} = e.target

    setStates(pravstate => ({
        ...pravstate, 
        [name]: value
    }))
}

const bookEventDetails = (val) =>{
  setBookEventDetails(val);
  console.log(val);
}

  return (
    <>
      <Routes>
          <Route path = '/' element= {<Login/>} />
          <Route path = '/signUp' element= {<SignUp/>} />
          <Route path = '/home' element= {<Home/>} />
          <Route exact path = '/calender' element= {<Calender bookEventData={bookEventData}/>} />
          <Route path = '/book/:id/:token' element= {<BookEvent bookEventDetails={bookEventDetails}/>} />
          <Route path = '/events' element= {<CreateEvent eventType={eventType}/>} />
          <Route path = '/eventsForm' element= {<EventForm handlshow={handlshow} state={state} />} />
          <Route path = '/eventsDuration' element= {<EventDuration eventT={eventT} state={state}  />} />
      </Routes>
    </>
  );
}

export default App;
