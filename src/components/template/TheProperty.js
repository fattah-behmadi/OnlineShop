import React from 'react';
import delivery from 'assets/images/delivery.svg'
import cash from 'assets/images/cash.svg'
import support from 'assets/images/support.svg'
import medal from 'assets/images/medal.svg'
import { useTranslation } from "react-i18next";


const TheProperty = () => {
    const { t } = useTranslation();

    return (<div className='flex items-center flex-wrap justify-evenly pt-4 my-4 w-full xl:max-w-[2100px] mx-auto'>
        <div className='flex flex-col items-center min-w-[100px] max-w-[250px] py-3 px-2'>
            <img src={delivery} className='w-16 h-20' alt='deliver' />
            <p className='py-2 text-[0.6rem] md:text-[0.75rem] lg:text-base text-palette-mute text-gray-600 font-bold'>{t('deliver')}</p>
        </div>
        <div className='flex flex-col items-center min-w-[100px] max-w-[250px] py-3 px-2'>
            <img src={cash} alt='cash' className='w-16 h-20 ' />
            <p className='py-2 text-[0.6rem] md:text-[0.75rem] lg:text-base text-palette-mute text-gray-600 font-bold'>{t('cash')}</p>
        </div>
        <div className='flex flex-col items-center min-w-[100px] max-w-[250px] py-3 px-2'>
            <img src={support} alt='cash' className='w-16 h-20 ' />
            <p className='py-2 text-[0.6rem] md:text-[0.75rem] lg:text-base text-palette-mute text-gray-600 font-bold'>{t('support')}</p>
        </div>
        <div className='flex flex-col items-center min-w-[100px] max-w-[250px] py-3 px-2'>
            <img src={medal} alt='cash' className='w-16 h-20 ' />
            <p className='py-2 text-[0.6rem] md:text-[0.75rem] lg:text-base text-palette-mute text-gray-600 font-bold'>{t('medal')}</p>
        </div>
    </div>);
}

export default TheProperty;