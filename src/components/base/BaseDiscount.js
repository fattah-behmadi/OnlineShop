import React from 'react';
import { FaPercentage } from 'react-icons/fa';
import { useTranslation } from "react-i18next";




const BaseDiscount = () => {
    const { t } = useTranslation();

    return (
        <div className='text-gray-500 flex mx-4   '>
            <a href='/' >{t('offers')}</a>
            <FaPercentage size='1.25rem' />
        </div>
    );
}

export default BaseDiscount;