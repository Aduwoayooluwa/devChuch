import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdMenu} from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'

import { useState } from 'react'
const NavItems = [
    {
        title: ''
    }
]
const Nav = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='flex w-full text-whitejustify-around fixed p-6 bg-black'>
            <div >
                {/* <Image src='/devchurch.svg'
                alt=''
                width='200px'
                height='100px'
                /> */}
                <p className='font-sans text-2xl font-medium text-slate-200'>DEv<span className='text-green-900'>Church</span></p>
            </div>
            {
                toggle ? (<div className='justify-between text-white  z-10'>
                    <div className='cursor-pointer' onClick= {() => setToggle(false)}>
                        <MdOutlineCancel fontSize="2.5rem"  color='white'/>
                    </div>

                    <div className='block p-8 text-center w-56 h-96 text-xl font-medium'>
                        <div className='m-6 cursor-pointer'>
                            <Link href='/'>
                            <a className=''>Home</a>
                            </Link>
                        </div>

                        <div className='m-6 cursor-pointer'>
                            <Link href='/#about-mo'>
                            <a>About</a>
                            </Link>
                        </div>

                        <div className='m-6 cursor-pointer'>
                            <Link href='/support'>
                            <a>Support</a>
                            </Link>
                        </div>

                        <div className='m-6 cursor-pointer'>
                            <Link href='/#contact'>
                            <a>Contact</a>
                            </Link>
                        </div>
                    </div>
    
                </div>) : (
                <div>
                    <div className='cursor-pointer' onClick= {() => setToggle(true)}>
                        <IoMdMenu fontSize="2.5rem" color='white'/>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Nav