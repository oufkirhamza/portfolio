import React from 'react';
import { LuGithub } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className=' flex text-text p-2 justify-between  items-center font-bold bg-[#9b6a2f99]'>
            <p className='text-center'>&copy; Copyright 2024</p>
            <div className='flex items-end'>
            <Link to={"https://github.com/oufkirhamza"}><FaGithub className='text-3xl' /></Link>
            <Link to={"https://github.com/oufkirhamza"}><FaLinkedinIn className='text-3xl' /></Link>
            </div>
        </div>
    );
};
