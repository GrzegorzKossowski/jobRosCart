import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='w-full mt-[100px] text-center'>
            <div className='text-center font-bold text-5xl text-gray-600 mb-8'>
                Welcome screen
            </div>
            <div className='flex justify-evenly'>
                <Link className='text-2xl font-semibold hover:border-b-2 hover:cursor-pointer' to={'store'}>Store</Link>
                <Link className='text-2xl font-semibold hover:border-b-2 hover:cursor-pointer' to={'cart'}>Cart</Link>
            </div>
        </div>
    );
};

export default HomePage;
