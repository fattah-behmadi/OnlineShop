import React from 'react';
import { FaGripfire } from 'react-icons/fa';
import { useTranslation } from "react-i18next";



const BaseSell = () => {
    const { t } = useTranslation();

    return (
        <div className='text-gray-500 flex mr-72   '>
            <a href='/' >{t('sell')}</a>
            <FaGripfire size="1.25rem" />
        </div>
    );
}

export default BaseSell;