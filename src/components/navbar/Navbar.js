import React from 'react';
import Logo from './logo/Logo';
import SingIn from './Sing-in/Sing-in';
import Input from './input/Input';


const Navbar = () => {
    return (
        <div className='flex-grow'>
            <Logo />
            <Input />
            <SingIn />
        </div>
    );
}

export default Navbar;