import React from 'react';


const Input = () => {
    return (<>
        <div className='w-full md:w-[50%] px-5 md:ltr:ml-4 md:rtl:mr-4 rounded-lg bg-slate-800/10 light:bg-slate-800 flex items-center flex-grow  absolute top-7 right-24  '>
            <input className='px-4 py-2 md:py-3 bg-transparent outline-none w-full ' type='search' placeholder="جستجو" />
            <i className="fa fa-search text-[#9ca3af]" aria-hidden="true"></i>
        </div>
    </>);
}

export default Input;