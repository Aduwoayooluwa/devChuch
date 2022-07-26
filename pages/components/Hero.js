import React from 'react'
import Particle from '../Particle'

const Hero = () => {
    return (
        <div id='' className='p-2 h-fit flex justify-evenly bg-black'>
            <div className='w-full text-center grid place-content-center mt-20 p-4'>
            <p className='font-bold text-3xl w-2/5 text-left text-white'>Join us let us preach the Gospel of Tech around.</p>
            <p className='text-slate-100 mt-4 w-4/5 text-left'>There are still many people yet to know what Tech means..Let us create the awareness together</p>

            <div className=''>
                <button className='bg-green-900 font-semibold p-2 mt-12 mr-4 rounded-md w-40 h-12 mb-5 text-white'>Join Now</button>
                <button className='border-green-900 border-2 p-2 h-12 w-40 rounded-md font-semibold bg-transparent text-green-800'>View Team</button>
            </div>

            <div className='text-white mt-5 text-sm w-full'>
            <div className='m-4 border-2 border-green-800 p-2'>
                <p className='font-medium'>Awareness</p>
                <p className='text-justify'>We are a team of individuals that spread the gospel of Tech round our society and community.
                    We are committed to bringing more poeple into the tech ecosystem. 
                </p>
                </div>

                <div className='m-4 border-2 border-green-800 p-2'>
                <p className='font-medium'>Opportunities</p>
                <p className='text-justify '>We want to educate non-Techies about the opportunities in Tech. How Tech can benefit their lives. We want more people to see the beauty in Tech and be interested in revolutionizing the world through Tech.</p>
                </div>

                <div className='m-4 border-2 border-green-800 p-2'>
                <p className='font-medium'>Vision</p>
                <p className='text-justify'>Our vision is to Educate millions of individuals both yooung and old about what they culd pick in Tech. 
                    We want more people to have their visions in Tech.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero