import React, { useState } from 'react'
import HeaderNavbar from './headerNavbar'


const Header = () => {
  const [actualPage, setActualPage] = useState("Home")
  
  
  return (
    <header className='flex p-4 bg-blue-600 justify-around'>
        <h1 className='text-4xl'>LPA</h1>
        <h2 className='flex items-center'>{actualPage}</h2>
        <HeaderNavbar/>
    </header>
  )
}

export default Header