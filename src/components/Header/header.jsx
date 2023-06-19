import React, { useState } from 'react'
import HeaderNavbar from './headerNavbar'


const Header = () => {
  const [actualPage, setActualPage] = useState("Home")
  
  
  return (
    <header className='flex p-4 bg-blue-600 justify-around'>
        <h1 className='text-4xl'>LPA</h1>
        
        <HeaderNavbar/>
    </header>
  )
}

export default Header