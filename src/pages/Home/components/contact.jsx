import './firstSection.sass'
import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import barrel from '../../../assets/img/barel.png'

export const Contact = () => {
        const [name, setName]=useState("")
        const [email, setEmail]=useState("")
        const [msg, setMsg]=useState("")
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            
            emailjs
                .sendForm('service_e84yvrk', 'template_ua9fapf', form.current, '-TE9B0KzCbpNt8WAp',)
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
                setName("")
                setEmail("")
                setMsg("")
        };
        return (
            <div name="Contact" data-aos="fade-up" data-aos-duration="1000" className='py-10 flex flex-col justify-center items-center'>
                <h1 className='text-6xl text-center my-7 head relative'>Contact</h1>
                <img className='w-[7%] absolute right-3 bottom-1 max-[430px]:w-[40%]' src={barrel} alt="" />
                    <div className='p-5  w-[50%] max-[430px]:w-full'>
                        <form ref={form}  className='flex flex-col  w-[100%] gap-3'>
                            <input className='bg-[#eec899] border-text' type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='name' name="user_name"/>
                            <input className='bg-[#eec899] border-text' type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='email' name="user_email" />
                            <textarea className='bg-[#eec899] border-text' name="message" id="" cols="30" rows="5" onChange={(e)=>{setMsg(e.target.value)}} value={msg} placeholder='message' ></textarea>
                            <button onClick={sendEmail} className='border-text border bg-[#eec899] px-5 py-2 w-fit rounded-full'> Send</button>
                        </form>
                    </div>
                </div>
        );
    };
