import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className='bg-[#F6F7FA] py-4'>
            <nav className='container flex justify-between m-auto'>
                <NavLink to={'/'}>RossCart</NavLink>
                <ul className='flex space-x-4'>
                    <li>
                        <NavLink to={'store'}>Store</NavLink>
                    </li>
                    <li>
                        <NavLink to={'cart'}>Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
