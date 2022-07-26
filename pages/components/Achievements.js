import React from 'react'

const Achievements = () => {
    return (
        <div className='h-72 pt-12'>
            <div className=''>
                <p className='text-2xl text-center font-bold p-4'>Our Achievements</p>
            </div>
            <div className='flex justify-evenly  text-green-900'>
                <div>
                    <p className='text-xl font-bold'>0 school</p>
                </div>

                <div className='text-xl font-bold'>
                    0 occasion
                </div>

                <div className='text-xl font-bold'>
                    <p>0 student spoken to</p>
                </div>
            </div>
        </div>
    )
}

export default Achievements