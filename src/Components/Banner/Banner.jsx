import React from 'react'
import banner from '../../assets/banner.png'
import Button from '../../Page/Ui/Button';

const Banner = () => {
    return (
        <div className="bg-base-100">
            <figure>
                <img className='w-md mx-auto'
                    src={banner}
                    alt="Mobile Banner image" />
            </figure>
            <div className='text-center space-y-4'>
                <h2 className='text-7xl text-center text-gray-900'>Browse, Search, View, Buy</h2>
                <p className='my-2 text-gray-500 w-[50%] mx-auto'>Best place to browse, search, view details and purchase of top flagship phones
                of the current time - Mobile Bazar</p>
                
                <form className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>

                <input type="text" name="name" placeholder='Search Phone by Name' className='mb-3 bg-white border border-gray-300 rounded shadow-sm md:mr-2 md:mb-0 focus:outline-none h-12 px-4 w-1/2 ' />
                
                <Button type='submit' label='Search'></Button>
                </form>
            </div>
        </div>
    );
};

export default Banner;