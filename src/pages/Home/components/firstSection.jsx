import './firstSection.sass'
import cowboy from '../../../assets/img/Asset 1.png'
import wanted from '../../../assets/img/Asset 3.png'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'


export const FirstSection = () => {
    return (
        <>
            <div name="Home" className='w-[100%] flex items-center flex-col relative py-16 max-[430px]:justify-center max-[430px]:mt-24'>
                <img width={110} className='absolute top-[30px] left-[21.5%] z-20 max-[430px]:top-48 max-[430px]:hidden' src={cowboy} alt="" />
                <h1 className='text-8xl text-text font-bold ml-[20px]'>OUFKIR Hamza</h1>
                <div className='w-[40%] relative mt-6 flex flex-col gap-3 max-[430px]:w-[80%]'>
                    <TypeAnimation className='text-2xl text-text font-bold '
                        sequence={[
                            'Front-End Developer',
                            1000, 
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <Link to="Projects" className='cursor-pointer w-fit font-bold px-6 py-3 rounded-full bg-background border-2 border-text text-text hover:bg-text hover:text-background'>Saddle Up for Projects</Link>
                </div>
                <img width={100} className='absolute right-52 max-[430px]:-top-5 ' src={wanted} alt="" />
            </div>
        </>
    );
}
