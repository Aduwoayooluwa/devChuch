import React, {useEffect, useState} from 'react'
import { useMediaQuery } from 'react-responsive';
import Nav from './components/Nav';
import NvDesktop from './desktop/NvDesktop';
import Head from 'next/head'
import { BsPeopleFill } from 'react-icons/bs'
import { BiDonateHeart } from 'react-icons/bi'
import {TbBrandPatreon} from 'react-icons/tb'
import Footer from './components/Footer';

function Support() {
    const [mount, setMount] = useState(false)
    const isMobile = useMediaQuery({
        query: "(min-device-width: 600px)",
    });
    
    
    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });
    
    useEffect(() => {
        setMount(true)
    }, [])

    return (
        <>
        <div className='bg-zinc-900 h-screen relative'>
            <Head>
                <title>Support Us</title>
            </Head>
            <div>
            {
            mount && isDesktop ? (<NvDesktop />) : (<Nav />)
        }
            </div>

            <div className='top-32 absolute w-full h-fit'>
                <div className='w-full bg-green-900 text-white h-20 p-4'>
                        <p className='text-2xl text-center'>Thank you for supporting us 🤗</p>
                </div>

                <div className='bg-zinc-900'>
                    <div className='flex justify-around flex-wrap'>
                            <div className='m-4 p-2 w-40 h-40 border-2 border-green-800 hover:rounded-md hover:bg-green-900 text-center cursor-pointer'>
                                <BsPeopleFill color='green' fontSize='40px'/>
                                <p className='text-white'>Join us to create more awareness about Tech</p>
                                <p className='text-white text-xl font-medium'>Volunteer</p>
                            </div>

                            <div className='m-4 p-2 w-40 h-40 border-2 border-green-800 hover:rounded-md hover:bg-green-900 text-center cursor-pointer'>
                                <BiDonateHeart color='green' fontSize={40}/>
                                <p className='text-white'>Support our action by giving to us</p>
                                <p className='text-white text-xl font-medium'>Donate</p>
                            </div>

                            <div className='m-4 p-2 w-40 h-40 border-2 border-green-800 hover:rounded-md hover:bg-green-900 text-center cursor-pointer'>
                                <TbBrandPatreon color='green' fontSize='40px'/>
                                <p className='text-white'>Become a Patreon</p>
                                <p className='text-white text-xl font-medium'>Patreon</p>
                            </div>
                    </div>
                </div>
                
            </div>    

        </div>
        <footer className=''>
            {/* the foooter */}
            {/* lemme add something to it, maybe it will detect it */}
                <Footer />
            </footer>
        </>
    )
}

export default Support