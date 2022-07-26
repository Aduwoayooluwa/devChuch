import Image from 'next/image'
import React from 'react'

const HeroDesktop = () => {
  return (
    <div className='w-full bg-black h-screen flex justify-evenly p-2'>
        <div className='w-full text-center grid place-content-center'>
          <p className='text-5xl font-bold text-white'>Join us let us preach the Gospel of Tech around.</p>
          <p className='text-slate-100 text-lg w-4/5 text-center'>There are still many people yet to know what Tech means..Let us create the awareness together</p>
          
          
          <div className=''>
          <button className='bg-green-900 font-semibold p-2 mt-12 mr-4 rounded-md w-40 h-12 text-white'>Join Now</button>
          <button className='border-green-600 border-2 p-2 h-12 w-40 rounded-md font-semibold bg-transparent text-green-800'>View Team</button>
          </div>

          <div className='text-white justify-evenly mt-20 flex'>
            <div className='border-2 border-green-800 hover:bg-green-800 hover:shadow-md p-4 hover:text-white hover:rounded-md w-1/4'>
              <p className='font-medium'>Awareness</p>
              <p>We are a team of individuals that spread the gospel of Tech round our society and community.
                We are committed to bringing more poeple into the tech ecosystem. 
              </p>
            </div>

            <div className='border-2 border-green-800 hover:bg-green-800 hover:shadow-md p-4 hover:text-white hover:rounded-md w-1/4'>
              <p className='font-medium'>Opportunities</p>
              <p>We want to educate non-Techies about the opportunities in Tech. How Tech can benefit their lives. We want more people to see the beauty in Tech and be interested in revolutionizing the world through Tech.</p>
              </div>

            <div className='border-2 border-green-800 hover:bg-green-800 hover:shadow-md p-4 hover:text-white hover:rounded-md w-1/4'>
              <p className='font-medium'>Vision</p>
              <p>Our vision is to Educate millions of individuals both yooung and old about what they culd pick in Tech. 
                We want more people to have their visions in Tech.</p>
            </div>
          </div>

        </div>

        {/* <div>
            <span className='shadow-md'>
                <Image src='/group.png'
                alt=''
                width={500}
                height={450}
                />
            </span>
        </div> */}
    </div>
  )
}

export default HeroDesktop