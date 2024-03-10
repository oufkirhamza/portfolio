import './firstSection.sass'
import React, { useEffect, useState } from 'react';
import htmlBdg from "../../../assets/img/badge.png"
import cssBdg from "../../../assets/img/CSSbadge.png"
import jsBdg from "../../../assets/img/Jsbadge.png"
import bootstrapBdg from "../../../assets/img/bootstrapbadge.png"
import reactBdg from "../../../assets/img/reactbadge.png"
import tailwindBdg from "../../../assets/img/tailwindbadge.png"
import sassBdg from "../../../assets/img/sassbadge.png"
import cactus from '../../../assets/img/coctus.png'
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import hat from "../../../assets/img/hat-boots.png"
export const About = () => {
    let badges = [htmlBdg, cssBdg, jsBdg, bootstrapBdg, reactBdg, tailwindBdg, sassBdg];
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='py-10 relative'>
            <img src={cactus} alt="" className='absolute w-[5%]'/>
            <h1 className='text-6xl text-center head'>Skills</h1>
            <div className='flex gap-5 justify-center items-center py-10'>
                    <div  className=' w-[80%]  py-4 flex flex-wrap justify-center gap-4'>
                        {
                            badges.map(badge=>
                                <img className='w-[11%] max-[430px]:w-[50%]' data-aos="flip-right" data-aos-duration="2500" src={badge} alt="" />
                                )
                        }
                    </div>
                </div>
        </div>
    );
};
