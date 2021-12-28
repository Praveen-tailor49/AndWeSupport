import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import Admin from './component/Admin';
import Home from './Home';
import AddCategory from './component/AddCategory';
import { Routes, Route } from 'react-router-dom'
import AddServices from './component/AddServices';
import AddExtraService from './component/AddExtraService';
import AddDuration from './component/AddDuration';
import AddSlot from './component/AddSlot';
import ViewBookings from './component/ViewBookings';
import LoginUser from './component/LoginUser';
import LoginAdmin from './component/LoginAdmin';
import Register from './component/Register';
import ShowCatgory from './component/ShowCatgory';
import AuthUser from './AuthUser';
import AuthAdmin from './AuthAdmin';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginUser />} />
        <Route exact path='/login' element={<LoginAdmin />} />
        <Route exact path='/register' element={<Register/>} />

        {/* User */}

        <Route exact path='/home' element={<AuthUser  cmp={Home} />} />

        {/* Admin */}

        <Route exact path='/admin' element={<AuthAdmin cmp={Admin} />} />
        <Route exact path='/add-category' element={<AuthAdmin cmp={AddCategory} />} />
        <Route exact path='/add-services' element={<AuthAdmin cmp={AddServices} />} />
        <Route exact path='/add-extra-services' element={<AuthAdmin cmp={AddExtraService}/>} />
        <Route exact path='/add-duration' element={<AuthAdmin cmp={AddDuration}/>} />
        <Route exact path='/slote' element={<AuthAdmin cmp={AddSlot} />} />
        <Route exact path='/all-bookings' element={<AuthAdmin cmp={ViewBookings} />} />
        <Route exact path='/show-category' element={<AuthAdmin cmp={ShowCatgory} />} />

      </Routes>
    </>
  );
}

export default App;
