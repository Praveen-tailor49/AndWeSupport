import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function AuthAdmin ({cmp}) {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('admin')){
            navigate('/login')
        }


    }, [])

    return (
        <>
            <Cmp />
        </>
    )
}

export default AuthAdmin 