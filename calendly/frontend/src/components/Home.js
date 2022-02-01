import React, { useState } from 'react'
import AccountUser from '../AccountUser'
import Cards from './Cards'
import NavBar from './NavBar'
import NavBar1 from './NavBar1'

const Home = ({calenderPath}) => {


    const getPath = (paths) =>{
        calenderPath(paths)
      }

    return (
        <>
            <NavBar/>
            <NavBar1/>
            <AccountUser getPath={getPath}/>
            <Cards/>
        </>
    )
}

export default Home
