import React from 'react'

const About = () => {
    return (
        <div id='about-desk' className='flex justify-center bg-zinc-900 text-white'>
            <div className='w-full grid place-content-center p-4 h-screen'>
                <div className='flex justify-evenly'>
                <div>
                <p className=' text-5xl font-bold text-center w-48'>Who we <span className='text-green-900'>Are</span></p>
                </div>
                
                <div className='w-3/5'>
                    <p>
                        We are a non-profit orrganization committed to informing the society what tech is, and how tech is. The Tech
                        is a very broad space. We want the society to know what it is and know it in-depth. The world is undergoing revolution everyday and 
                        we want people and the individuals of our current to society to move with it. With the current ignorance in the society, 
                        it means so many people would be left behind. We want more people to be on board.
                    </p>

                    <p className='mt-2'>
                    DEVChurch is a church of Techies by Techies. We organize events for Techies and non techies that want to transition
                    into tech. 
                    </p>

                    <p className='mt-2'> If you believe in our Vision, you can join our team or Support our movement. </p>
                </div>
            
                </div>
                

            </div>
        </div>
    )
}

export default About