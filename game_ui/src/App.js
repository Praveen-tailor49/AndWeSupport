import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Win from './pages/Win';
import MinePage from './pages/MinePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { ResetPassword } from './pages/ResetPassword';
import AddAddress from './pages/AddAddress';
import AddBankCard from './pages/AddBankCard';
import Withdrawal from './pages/Withdrawal';
import Orders from './pages/Orders';
import ComplaintsSuggestions from './pages/ComplaintsSuggestions';
import Promotion from './pages/Promotion';
import Transactions from './pages/Transactions';
import RiskDisclosureAgreement from './pages/RiskDisclosureAgreement';
import Recharge from './pages/Recharge';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/win' element={<Win/>}/>
          <Route path='/mine' element={<MinePage/>}/>
          <Route path='/privacy/policy' element={<PrivacyPolicy/>}/>
          <Route path='/reset/password' element={<ResetPassword/>}/>
          <Route path='/add/address' element={<AddAddress/>}/>
          <Route path='/add/bank' element={<AddBankCard/>}/>
          <Route path='/withdrawal' element={<Withdrawal/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/ComplaintsSuggestions' element={<ComplaintsSuggestions/>}/>
          <Route path='/promotion' element={<Promotion/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/RiskDisclosure' element={<RiskDisclosureAgreement/>}/>
          <Route path='/recharge' element={<Recharge/>}/>
      </Routes>
        
    </>
  );
}

export default App;
