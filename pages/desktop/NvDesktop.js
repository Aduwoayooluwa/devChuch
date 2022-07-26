import React from 'react'
import Link from 'next/link'

const NvDesktop = () => {
  return (
    <div className=''>
        <nav className='flex justify-evenly w-full font-medium p-4 fixed bg-black text-white'>
          <div>
            <p className='font-semibold text-xl'>DEv<span className='text-green-900 font-bold text-2xl'>Church</span></p>
          </div>
          <div className='hover:bg-green-800 p-2 text-center hover:text-white rounded-md'>
            <Link href='/'>
                <a>Home</a>
              </Link>
          </div>

          <div className='hover:bg-green-800 p-2 hover:text-white rounded-md'>
            <Link href='/#about-desk'>
                <a>About</a>
              </Link>
          </div>

          <div className='hover:bg-green-800 p-2 hover:text-white rounded-md'>
            <Link href='/#contact'>
                <a>Contact</a>
              </Link>
          </div>
          
          <div className='hover:bg-green-800 p-2 hover:text-white rounded-md'>
            <Link href='/team'>
                <a>Our Team</a>
            </Link>
          </div>
            
          <div className='hover:bg-green-800 p-2 hover:text-white rounded-md'>
          <Link href='/support'>
              <a>Support Us</a>
            </Link>
          </div>
        
        </nav>
    </div>
  )
}

export default NvDesktop