import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaPercentage } from 'react-icons/fa';
import { FaGripfire } from 'react-icons/fa';

const BaseCategory = () => {
    return (

        <div className='flex justify-end ml-6  mt-1 '>
            <div className='text-gray-500 flex '>
                <a href='/' >Offers and Discounts</a>
                <FaGripfire />
            </div>
            <div className='text-gray-500 flex mx-4'>
                <a href='/' >Offers and Discounts</a>
                <FaPercentage size='1.25rem' />
            </div>
            <div className='flex '>
                <h3 className='pl-2 font-bold order-gray-400 cursor-pointer'>Category of Goods</h3>
                <FaBars />
            </div>
        </div>



    );
}

export default BaseCategory;
