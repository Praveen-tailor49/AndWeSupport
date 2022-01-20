import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import CreateEvent from './components/CreateEvent';
import EventForm from './components/EventForm';
import EventDuration from './components/EventDuration';
 
function App() {

  const [eventT, setEventType] = useState('')
  const [state,  setStates] = useState({
    eventName: '',
    location: '',
    description: '',
})

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

  return (
    <>
      <Routes>
          <Route path = '/' element= {<Home/>} />
          <Route path = '/events' element= {<CreateEvent eventType={eventType}/>} />
          <Route path = '/eventsForm' element= {<EventForm handlshow={handlshow} state={state} />} />
          <Route path = '/eventsDuration' element= {<EventDuration eventT={eventT} state={state}  />} />
      </Routes>
    </>
  );
}

export default App;
