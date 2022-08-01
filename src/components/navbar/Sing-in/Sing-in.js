import React from 'react';



const SingIn = () => {
    return (
        <div>
            <a href='/login' >
                <div className='p-4 absolute left-28 top-5 border-solid border-1  border-gray-300 shadow-xl rounded-xl mt-1	' >
                    <p className='text-center'>
                        <i className="fa fa-user-plus pl-2" aria-hidden="true"></i>
                        ورود
                        |
                        ثبت نام
                    </p>
                </div>
            </a>
            <div className='absolute left-12 top-10 cursor-pointer'>
                <a className='relative flex items-center ltr:md:pl-6 rtl:md:pr-6 rtl:md:border-r-2 rtl:md:border-r-slate-600 h-10 z-50'>
                    <i className="fa fa-shopping-cart fa-4" aria-hidden="true"></i>
                    <span className='absolute left-2 -top-2  flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-[0.75rem] leading-1 text-white  shadow-lg' >10</span>
                </a>
            </div>
        </div>
    );
}

export default SingIn;