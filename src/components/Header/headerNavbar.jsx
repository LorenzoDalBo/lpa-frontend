import Link from 'next/link'
import React, { useState } from 'react'

const HeaderNavbar = () => {
  return (
    <nav className='flex items-center'>
        <ul className='flex gap-12 text-xl'>
            <Link className='font-semibold text-white' href="/aboutPage">Sobre</Link>
            <Link className='font-semibold text-white' href="/timelinePage">Timeline</Link>
            <Link className='font-semibold text-white' href="/projectsPage">Projetos</Link>
        </ul>
    </nav>
  )
}

export default HeaderNavbar