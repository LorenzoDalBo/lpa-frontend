import React, { useState } from 'react'
import HeaderNavbar from './headerNavbar'


const Header = () => {
  const [actualPage, setActualPage] = useState("Home")
  
  
  return (
    <header className='flex p-4 bg-bluesatc1 justify-around'>
        <h1 className='text-4xl items-start'>LPA</h1>
        
        <HeaderNavbar/>
    </header>
  )
}

export default Header