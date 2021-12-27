import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function AuthUser({cmp}) {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('name')){
            navigate('/')
        }


    }, [])

    return (
        <>
            <Cmp/>
        </>
    )
}

export default AuthUser