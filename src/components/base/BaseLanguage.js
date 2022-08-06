import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { useTranslation } from "react-i18next";


const BaseLanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);
    }
    return (

        <div className=' flex cursor-pointer  ml-[400px] mr-12 items-center '>
            <FaMoon size='1.5rem' className='ml-8' />
            <FaGlobeAmericas size="1.5rem" />
            <select className="bg-[#e2e0e0] border-none text-gray-500 font-bold border-none	" onChange={changeLanguageHandler} >
                <option value="en" >English - En</option>
                <option value="fa" >فارسی - Fa</option>
            </select>
            <hr />

        </div>);
}

export default BaseLanguage;
