import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './component/Admin';
import Home from './Home';
import AddCategory from './component/AddCategory';
import {Routes, Route} from 'react-router-dom'
import AddServices from './component/AddServices';
import AddExtraService from './component/AddExtraService';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/admin' element={<Admin/>} />
        <Route exact path='/add-category' element={<AddCategory/>} />
        <Route exact path='/add-services' element={<AddServices/>} />
        <Route exact path='/add-extra-services' element={<AddExtraService/>} />
      </Routes>
    </>
  );
}

export default App;
