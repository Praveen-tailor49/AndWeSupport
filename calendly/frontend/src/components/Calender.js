import React, {useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser"


const Calender = () => {
  const form = useRef();
  const [otp, setOtp] = useState ('')
  const [userOtp, setUserOtp] = useState ('')

  useEffect (()=> {
      const otp = Math.floor(1000 + Math.random() * 9000);
      setOtp(otp)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mocy6ly','template_4rvhjcd', e.target, "user_ZAGjoe6gJVVDW5JLRe4NG")
      .then((result) => {
          console.log(result.text);
          document.getElementById('show1').style.display = 'block'
      }, (error) => {
          console.log(error.text);  
      });
  }

  const verify = () => {

    console.log(otp);
    console.log(userOtp);
    if(userOtp == otp ){
      alert('login')
    }else{
      alert('otp wrong')
    }
  }
  
  return (
    <>
     <form ref={form} onSubmit={sendEmail}>
        email:
        <input type='email'  name='email' required />
        <input name='otp' value={otp} placeholder="Otp will send to your mail" style={{border:"none"}}  hidden/> 
        <button type='submit'>submit</button>
     </form>
     <div id='show1' style={{display:'none'}}> 
        <input type='text'  name='otp' required onChange={(e) => setUserOtp(e.target.value)} />
        <button type='button' onClick={(e)=>{
          verify();
        }}
          >submit</button>
      </div>
    </>
  );
};

export default Calender;
