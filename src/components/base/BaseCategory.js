import React from 'react';
import { FaBars } from 'react-icons/fa';




const BaseCategory = () => {
  return (
    <div className='flex text-xl  cursor-pointer     '>
      <h3 className='pl-1 font-bold order-gray-400 '>Category of Goods</h3>
      <FaBars />
    </div>
  );
}

export default BaseCategory;