import React, { useState } from 'react'
import HeaderNavbar from './headerNavbar'


const Header = () => {
  const [actualPage, setActualPage] = useState("Home")
  
  
  return (
    <header className='flex p-4 bg-bluesatc1 justify-around'>
        <h1 className='text-4xl items-start'><a href='http://localhost:3000/'><strong>LAB TECH</strong></a></h1>
        <HeaderNavbar/>
    </header>
  )
}

export default Header