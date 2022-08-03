import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'


const BaseLanguage = () => {
    return (

        <div className=' flex cursor-pointer ml-[400px] mr-4 items-center '>
            <FaMoon size='1.5rem' className='ml-8' />
            <FaGlobeAmericas size="1.5rem" />
            <p className=' text-black font-bold  m-1 ' >EN</p>

        </div>);
}

export default BaseLanguage;


// className=' flex pr-20 '
// 