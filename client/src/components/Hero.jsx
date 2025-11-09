import React from 'react'
import bookHeroImage from '../assets/banner.webp'

const Hero = () => {
    return (
        <div className='bg-gray-900 min-h-[600px] relative overflow-hidden'>
            <div className='container mx-auto px-4 py-36 flex flex-col lg:flex-row flex-wrap items-center justify-between'>
                <div className='w-full lg:w-1/2 text-white z-10'><h1 className='text-5xl font-bold'>
                    Welcome to Our Books - <br /> a haven for book lovers
                </h1>

                    <form className='mt-8 max-w-md flex gap-1'>
                        <input type="text" placeholder='Enter title' className='bg-white px-4 py-2 border text-black w-full' />
                        <button type='submit' className='bg-amber-300 px-6 py-2 text-black'>Search</button>
                    </form>

                </div>
                <div className='w-full lg:w-1/2 text-white'>
                    <img src={bookHeroImage} alt="" className='w-full h-fit object-cover rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero