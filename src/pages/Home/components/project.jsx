import './firstSection.sass'
import React, { useState } from 'react';
import adidas from "../../../assets/img/adidasstore.png"
import movies from "../../../assets/img/movie.png"
import resto from "../../../assets/img/lionsresto.png"
import quranApp from "../../../assets/img/quran_project.png"
import { Link, useNavigate } from 'react-router-dom';


export const Projects = () => {
    const navigate = useNavigate()
    const [projects, setProjects] = useState([
        {
            picture: adidas,
            title: "adidasstore",
            description: "Experience top-tier sportswear shopping with my React.js project. Seamlessly blending style and performance, this platform ensures a dynamic and responsive user journey. Join me in exploring the intersection of technology and athletic fashion.",
            sourceCode: "https://github.com/oufkirhamza/adidasstore",
            live: "https://adidasstore.vercel.app/"
        },
        {
            picture: quranApp,
            title: "QuranApp",
            description: "Immerse yourself in the divine words of the Quran with my comprehensive app. Read and listen to the Quran anytime, anywhere, with ease. Let this app be your faithful companion on your spiritual journey.",
            sourceCode: "https://github.com/oufkirhamza/quran_app",
            live: "https://quranapp-ho.vercel.app/"
        },
        {
            picture: movies,
            title: "movil.io",
            description: "Explore movies effortlessly with movil.io, my React.js project. Enjoy a user-friendly platform for discovering and watching your favorite films. Simple, sleek, and designed for movie lovers like you!",
            sourceCode: "https://github.com/oufkirhamza/oufkir_hamza_react_projet_final",
            live: "#"
        },
        {
            picture: resto,
            title: "LionsResto",
            description: "Savor the experience of my restaurant website crafted with HTML, Sass, and JavaScript. Immerse yourself in a delightful journey through mouthwatering visuals and seamless navigation. From the menu showcase to interactive features, this website invites you to explore the world of culinary delights.",
            sourceCode: "https://github.com/oufkirhamza/projet_final_DOM_OUFKIR_Hamza",
            live: "#"
        },
    ])

    return (
        <div name="Projects" className='py-10'>
            <h1 className='text-6xl text-center mb-7 head'>Projects</h1>
            <div className='flex gap-10 max-[430px]:gap-1 flex-wrap justify-center items-center'>
                {
                    projects.map(project =>
                        <>
                            <div data-aos="fade-up" data-aos-duration="2000" className="card max-[430px]:mt-10 ">
                                <img src={project.picture} alt="" />
                                <div className="card__content max-[430px]:hidden flex flex-col gap-6  ">
                                    <p className="card__title">{project.title}</p>
                                    <p className="card__description">{project.description}</p>
                                    <div className='max-[430px]:hidden'>
                                        <Link to={project.live} target='_blank' className="card__button hover:bg-text hover:text-background ">Live Demo</Link>
                                        <Link to={project.sourceCode} className="card__button secondary w-fit ">Source Code</Link>
                                    </div>
                                </div>
                            </div>
                            <p className='w-[80%] hidden max-[430px]:block'>{project.description}</p>
                            <Link to={project.live} className="card__button hidden max-[430px]:block">Live Demo</Link>
                            <Link to={project.sourceCode} className="card__button secondary hidden w-fit max-[430px]:block">Source Code</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};
