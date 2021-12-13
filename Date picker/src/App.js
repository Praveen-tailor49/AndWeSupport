import React from 'react';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import End from './End';
import AllEvent from './AllEvent';


function App() {
  
  return (
    <>
   
      <Routes>
        <Route exact path='/' element={<Home  />} />
        <Route exact path='/complete' element={<End  />} />
        <Route exact path='/view-events' element={<AllEvent  />} />
      </Routes>
    </>
  );
}

export default App;


