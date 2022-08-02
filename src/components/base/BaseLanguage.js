import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'


const BaseLanguage = () => {
    return (<div className=' flex pr-20 '>
        <a className=' flex absolute top-32 right-10 cursor-pointer'>
            <FaMoon size='1.5rem' className='ml-8' />
            <FaGlobeAmericas size="1.5rem"></FaGlobeAmericas>
            <p className=' text-black font-bold  m-1 ' >EN</p>
        </a>
    </div>);
}

export default BaseLanguage;