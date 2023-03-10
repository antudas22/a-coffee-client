import React from 'react';
import banner from '../../../assets/a-coffee-banner.png'
import { HiPhone } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <img src={banner} alt="banner" />
            </div>
            <div className='absolute top-1/4 text-center text-amber-900 ml-20'>
                <h3 className='text-3xl font-bold mb-3'><button>a-Coffee</button></h3>
                <h1 className='text-7xl font-bold'>Delicious Coffee</h1>
                <p className='text-lg my-8'>We make the best coffee in town blended with<br/>authentic chocolate, perfect to start your day.</p>
                <button className='btn'>Book Now</button>
            </div>
            <div className='flex gap-6 absolute bottom-5 text-amber-900 text-xl ml-20'>
                <div className='flex items-center gap-1'><HiPhone/><p>+123-456-7890</p></div>
                <div className='flex items-center gap-1'><IoLocationSharp/><p>123 Narayanganj, Dhaka</p></div>
            </div>
        </div>
    );
};

export default Banner;