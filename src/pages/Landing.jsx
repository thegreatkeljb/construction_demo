import { useState, useEffect } from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { BiSolidQuoteLeft } from "react-icons/bi";

import HeroImage from '../assets/demo_hero.png'
import Residential from '../assets/demo_residential.png'
import Commercial from '../assets/demo_commercial.png'
import Infrastructure from '../assets/demo_infrastructure.png'
import AboutUsImage from '../assets/about_us.png'
import PeopleImage from '../assets/demo_people.png'
import CEOImage from '../assets/demo_ceo.png'
import DealImage from '../assets/demo_deal.png'

import FooterComponent from './Footer'

const HeroCard = ({ image, text, selected = false }) => {
    return (
        <>
            <div className={`${selected ? 'w-[40%]' : 'w-[20%] grayscale opacity-80'} 
         flex items-end justify-end border border-gray-400 bg-linear-to-t from-black to-transparent`}
                style={{
                    backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}>
                <div className={`flex items-center w-full py-4 ${selected ? 'gap-8' : 'gap-4'}`}>
                    <div className={`w-full h-[0.5px] bg-gray-400 ${selected ? 'pl-8' : 'pl-4'} `} />
                    <span className={`shrink-0 text-white ${selected ? 'pr-8' : 'pr-4'}`}>
                        {text}
                    </span>
                </div>
            </div>
        </>
    )
}

const ProjectCard = ({ image, title, desc }) => {
    return (
        <div className='flex items-end h-132 pb-12 px-4 rounded-tr-4xl border border-gray-500'
            style={{
                backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div className='flex flex-col w-full'>
                <span className='text-2xl font-semibold'>{title}</span>
                <span className='h-[0.5px] bg-white w-full mt-2 mb-4'></span>
                <div className="flex justify-between items-center">
                    <span>{desc}</span>
                    <MdOutlineArrowOutward className="size-8 p-1 border border-white" />
                </div>
            </div>
        </div>
    )
}

const Landing = () => {
    const navlink_style = 'mr-6 hover:border-t hover:border-gray-800'

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed w-screen flex justify-between transition z-10 
                ${scrolled ? 'bg-white py-4 shadow-lg' : 'bg-transparent py-8 shadow-none'}`}>
                <div className="flex flex-col w-fit items-center pl-16">
                    <span className="font-semibold text-4xl">Demo Builders</span>
                    <span className="text-lg italic">A CONSTRUCTION COMPANY</span>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="border-b border-black pl-2 pr-16">
                        This is a demo website built by <a className='font-semibold' href='#'>Ancar Technologies</a>
                    </div>
                    <ul className="flex flex-row text-lg pl-2 pr-16">
                        <a className={navlink_style}>Home</a>
                        <a className={navlink_style}>About</a>
                        <a className={navlink_style}>Services</a>
                        <li className={navlink_style}>Our Portfolio</li>
                        <li className={navlink_style}>Contact Us</li>
                    </ul>
                </div>
            </nav>

            <section>
                <div className='absolute h-250 w-full flex justify-end items-end p-24
            bg-linear-to-b from-gray-100/70 via-transparent to-gray-800/70'>
                        <div className='grid grid-cols-[1fr_1.5fr] gap-100 z-5 h-60 w-full items-end'>
                            <div className='text-white'>
                                <div className='text-2xl font-semibold mb-4'>WE BUILD TRUST</div>
                                <div>
                                    Established in 2015, Demo Builders is owned and managed by reliable and trustworthy professionals with more than 12 years of experience in residential and commercial construction projects.
                                    <br />
                                    Demo Builders stands at the forefront of nation-building in the Philippines, driven by a steadfast commitment to engineering excellence and innovation.
                                </div>
                                <div className='flex gap-2 mt-4'>
                                    <div className='bg-white size-8' />
                                    <div className='bg-white/60 size-8' />
                                    <div className='bg-white/60 size-8' />
                                    <div className='bg-white/60 size-8' />
                                </div>
                            </div>
                            <div>
                                <div className='text-white text-2xl font-semibold mb-4'>WHAT WE DO</div>
                                <div className='flex h-50'>
                                    <HeroCard
                                        image={HeroImage}
                                        text={'Demo Builders'}
                                        selected={false}
                                    />
                                    <HeroCard
                                        image={Residential}
                                        text={'Residential'}
                                        selected={false}
                                    />
                                    <HeroCard
                                        image={Commercial}
                                        text={'Commercial'}
                                        selected={false}
                                    />
                                    <HeroCard
                                        image={Infrastructure}
                                        text={'Infrastructure'}
                                        selected={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute h-250 w-full flex justify-end items-end' />
                    <img className='h-250 w-full'
                        src={Infrastructure} alt="Single Family Home" />
            </section>
            {/* About */}
            <section >
                <div className='h-250 w-full flex items-center justify-center'>
                    <div className='w-280 flex flex-col border border-gray-400'>
                        <div className='grid grid-cols-[1fr_1.5fr] gap-44 pt-12 pl-8 pr-8'>
                            <div className='text-3xl'>For more than 10 years, Demo Builders built
                                <span className='font-semibold'> spaces that move people forward.</span>
                            </div>
                            <div className='text-lg text-justify'>
                                From homes to commercial spaces, we deliver quality construction built on experience, craftsmanship, and a commitment to doing things right.
                                <br />
                                Guided by our values and passion for excellence, we continue building stronger foundations for a better future.
                            </div>
                        </div>
                        <img className='w-280 scale-105' src={AboutUsImage} alt="" />
                    </div>
                </div>
            </section>
            {/* Projects */}
            <section className='flex justify-center bg-gray-800 py-16'>
                <div className='flex flex-col w-280 bg-gray-800 text-white'>
                    <span className='text-4xl font-semibold'>Where Engineering Meets Excellence</span>
                    <span className='pt-2 pb-12'>Demo Builders is a trusted leader in the construction sector, renowned
                        <br /> for delivering exceptional results across a diverse range of projects.</span>
                    <div>
                        <div className='grid grid-cols-3 gap-8'>
                            <ProjectCard
                                image={Residential}
                                title={'Residential'}
                                desc={'Horizontal / Vertical'}
                            />
                            <ProjectCard
                                image={Commercial}
                                title={'Commercial'}
                                desc={'Mixed Use'}
                            />
                            <ProjectCard
                                image={Infrastructure}
                                title={'Infrastructure'}
                                desc={'Transportation'}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* People */}
            <section className="flex flex-col justify-center items-center pt-24 pb-32">
                <div className="flex flex-col py-16 w-240 text-center">
                    <span className='text-3xl font-semibold'>Excellence Starts With Our People</span>
                    <span className='text-lg mt-4 mb-8'>
                        At Demo Builders, we believe exceptional work begins with exceptional people. We are committed to investing in our team’s growth, safety, and well-being, creating an environment where every individual is empowered to build with skill, confidence, and pride.
                    </span>
                </div>
                <div className="grid grid-cols-[0.5fr_1fr] h-80 w-full">
                    <div />
                    <div 
                    style={{
                        backgroundImage: `url(${ PeopleImage })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    />
                </div>
            </section>
            {/* Client Feedback */}
            <section className='flex flex-col justify-center items-center pb-16'>
                <div className="grid grid-cols-2 gap-16 w-280">
                    <div className="flex flex-col pt-4 pb-16">                        
                        <span className='text-3xl font-semibold'>What Our Clients Say</span>
                        <span className='text-xl mt-8 mb-12'>
                            “Working with Demo Builders was a great experience from start to finish. Their team was professional, reliable, and attentive to every detail throughout the project. They understood our vision, communicated clearly, and delivered quality work that we can be proud of. We truly appreciate their commitment and would gladly work with them again.”
                        </span>
                        <span>
                            <b>— James Alexander McArthur</b> <br />
                            Chief Executive Officer, <b>McArthur Foods Inc.</b> 
                        </span>
                    </div>
                    <div className="w-full h-full"
                    style={{
                        backgroundImage: `url(${ CEOImage })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top'
                    }}
                    />
                </div>
                <div className="grid grid-cols-[.5fr_1fr_1.5fr_0.5fr] gap-4 w-full mt-32">
                    <div className="bg-gray-800">
                        <BiSolidQuoteLeft className="h-full w-full fill-white"/>
                    </div> 
                    <div className="flex flex-col bg-gray-800 text-white p-16">           
                        <span className='text-xl mt-8 mb-12'>
                            “Demo Builders turned our vision for our commercial space into a reality. From planning to completion, their team was professional, organized, and committed to delivering quality work. They handled every detail with care and kept the project moving efficiently. We’re very pleased with the result and proud of the space they built for our business.”
                        </span>
                        <span>
                            <b>— Greg Heffley</b> <br />
                            VP for Real Estate, <b>Heffley-Tatum Group</b> 
                        </span>
                    </div>
                    <div className="w-full h-full"
                    style={{
                        backgroundImage: `url(${ DealImage })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    />
                    <div className="bg-gray-800" />
                </div>
            </section>

            <FooterComponent />
        </>
    )
}

export default Landing
