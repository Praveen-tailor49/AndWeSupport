import React from 'react'
import AccountUser from '../AccountUser'
import Cards from './Cards'
import NavBar from './NavBar'
import NavBar1 from './NavBar1'

const Home = () => {
    return (
        <>
            <NavBar/>
            <NavBar1/>
            <AccountUser/>
            <Cards/>
        </>
    )
}

export default Home
