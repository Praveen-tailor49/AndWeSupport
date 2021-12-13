import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function AuthAdmin ({cmp, sendData, categoryList}) {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('admin')){
            navigate('/admin-login')
        }


    }, [])

    return (
        <>
            <Cmp sendData={sendData} categoryList={categoryList}/>
        </>
    )
}

export default AuthAdmin 
