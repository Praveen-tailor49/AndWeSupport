import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';


const AuthUser = ({cmp}) => {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('token')){
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