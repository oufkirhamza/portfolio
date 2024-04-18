import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-scroll'

import "../pages/Home/components/firstSection.sass"

export const Header = () => {

    return (
        <>
            <Navbar fluid className='w-[100%] text-text bg-transparent max-[430px]:fixed max-[430px]:top-0 max-[430px]:bg-background max-[430px]:z-50'>
                <Navbar.Brand >
                    {/* <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" /> */}
                    <h1 className='font-bold head text-2xl'>HAMZA</h1>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {/* <Button>Get started</Button> */}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to="Home" smooth={true} duration={500} className='cursor-pointer'>Home</Link>
                    <Link to="Projects" smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
                    <Link to="Contact" smooth={true} duration={500} className='cursor-pointer'>Contact</Link>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};
