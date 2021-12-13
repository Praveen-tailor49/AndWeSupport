import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function Auth({cmp, buyProduct, data, productPrice}) {

    const navigate = useNavigate();

    let Cmp = cmp;

    useEffect(() => {
         
        if(!localStorage.getItem('name')){
            navigate('/')
        }


    }, [])

    return (
        <>
            <Cmp buyProduct={buyProduct}  data={data} productPrice={productPrice}/>
        </>
    )
}

export default Auth
