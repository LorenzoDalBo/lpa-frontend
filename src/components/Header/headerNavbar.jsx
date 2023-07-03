import Link from 'next/link'
import React, { useState } from 'react'

const HeaderNavbar = () => {
  
  return (
    <nav className='flex items-center'>
        <ul className='flex gap-12 text-xl'>
            <Link className='font-inter text-white' href="/aboutPage">Sobre</Link>
            <Link className='font-inter text-white' href="/timelinePage">Timeline</Link>
            <Link className='font-inter text-white' href="/projectsPage">Projetos</Link>
            <Link className='font-inter text-white' href="/LoginPage">Login</Link>
        </ul>
    </nav>
  )
}

export default HeaderNavbar