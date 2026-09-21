import { useState, useEffect } from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { BiSolidQuoteLeft } from "react-icons/bi";

import HeroImage from '../assets/demo_hero.png';
import Residential from '../assets/demo_residential.png';
import Commercial from '../assets/demo_commercial.png';
import Infrastructure from '../assets/demo_infrastructure.png';
import AboutUsImage from '../assets/about_us.png';
import PeopleImage from '../assets/demo_people.png';
import CEOImage from '../assets/demo_ceo.png';
import DealImage from '../assets/demo_deal.png';

const HeroCard = ({ image, text, selected = false, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className={`${selected ? 'w-[40%]' : 'w-[20%] grayscale opacity-80'}
            flex items-end justify-end hover:cursor-pointer
            border border-gray-400 bg-linear-to-t from-black to-transparent
            transition-all duration-500 ease-in-out`}
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
        </button>
    )
}

const HeroBlock = ({ selected = false, onClick }) => {
    return (
        <button 
            className={`${selected ? 'bg-white' : 'bg-white/60'} size-8 hover:cursor-pointer`} 
            onClick={ onClick }
        />  
    )
}

const ProjectCard = ({ image, title, desc }) => {
    return (
        <div className='hero-bg group flex items-end h-132 pb-12 px-4 rounded-tr-4xl border border-gray-500 
        hover:cursor-pointer transition-all ease-in-out duration-300'
            style={{
                backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'

            }}>
            <div className='flex flex-col w-full'>
                <span className='text-2xl font-semibold'>{title}</span>
                <span className='h-[0.5px] bg-white w-full mt-2 mb-4'></span>
                <div className="flex justify-between items-center">
                    <span>{desc}</span>
                    <MdOutlineArrowOutward className="size-8 p-1 border border-white 
                    group-hover:rounded-md 
                    transition-all ease-in-out duration-400" />
                </div>
            </div>
        </div>
    )
}

const Landing = () => {
    const [selectedHero, setSelectedHero] = useState('demo')

    const [slideDirection, setSlideDirection] = useState('right')

    const heroOrder = [
        'demo',
        'residential',
        'commercial',
        'infrastructure'
    ]

    const handleHeroChange = (hero) => {
    const currentIndex = heroOrder.indexOf(selectedHero)
    const newIndex = heroOrder.indexOf(hero)

        setSlideDirection(newIndex > currentIndex ? 'right' : 'left')
        setSelectedHero(hero)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedHero((current) => {
                const currentIndex = heroOrder.indexOf(current)
                const nextIndex = (currentIndex + 1) % heroOrder.length

                setSlideDirection('right')
                return heroOrder[nextIndex]
            })
        }, 12000)

        return () => clearInterval(interval)
    }, [])

    const heroImages = {
        demo: HeroImage,
        residential: Residential,
        commercial: Commercial,
        infrastructure: Infrastructure,
    }

    const heroDescriptions = {
        demo: 'Established in 2015, Demo Builders is owned and managed by trustworthy professionals with more than 12 years of experience in residential and commercial construction projects. We stand at the forefront of nation-building in the Philippines, Driven by a commitment to excellence.',
        residential: `We specialize in building quality residential spaces designed for comfort, functionality, and lasting value. From single-family homes to larger residential developments, our team delivers projects with careful planning, quality workmanship, and attention to detail.`,
        commercial: `We deliver commercial construction projects that combine functionality, durability, and thoughtful design. From office spaces and retail establishments to larger commercial developments, we work to create spaces that support businesses and meet the demands of everyday operations.`,
        infrastructure: `We undertake infrastructure projects that contribute to the growth and development of communities. Our work focuses on delivering reliable, durable, and well-planned structures while maintaining high standards of safety, quality, and engineering throughout every stage of construction.`,
    }

    return (
        <>
            <style>
                {`
                    @keyframes slideFromRight {
                        from {
                            opacity: .70;
                            filter: blur(10px);
                            transform: translateX(20%);
                        }
                        to {
                            opacity: 1;
                            filter: blur(0px);
                            transform: translateX(0);
                        }
                    }
                    @keyframes slideFromLeft {
                        from {
                            opacity: .70;
                            filter: blur(10px);
                            transform: translateX(-20%);
                        }
                        to {
                            opacity: 1;
                            filter: blur(0px);
                            transform: translateX(0);
                        }
                    }
                    .slide-right {
                        animation: slideFromRight 500ms ease-in-out;
                    }
                    .slide-left {
                        animation: slideFromLeft 500ms ease-in-out;
                    }
                    .hero-bg {
                        background-size: cover, cover;
                    }

                    .hero-bg:hover {
                        background-size: cover, auto 101%;
                    }
                `}
            </style>

            <section>
                <div className='absolute h-250 w-full flex justify-end items-end p-24 
                transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-1000
                bg-linear-to-b from-gray-100/50 via-transparent to-gray-800/70 overflow-x-hidden'>
                        <div className='grid grid-cols-[1fr_1.5fr] gap-100 z-5 h-60 w-full items-start'>
                            <div className='text-white'>
                                <div className='text-2xl font-semibold mb-4'>WE BUILD TRUST</div>
                                <p className="whitespace-pre-line text-lg">
                                    {heroDescriptions[selectedHero]}
                                </p>
                                <div className='flex gap-2 mt-8'>
                                    <HeroBlock
                                        selected={selectedHero === 'demo'}
                                        onClick={() => setSelectedHero('demo')}
                                    />
                                    <HeroBlock
                                        selected={selectedHero === 'residential'}
                                        onClick={() => setSelectedHero('residential')}
                                    />
                                    <HeroBlock
                                        selected={selectedHero === 'commercial'}
                                        onClick={() => setSelectedHero('commercial')}
                                    />
                                    <HeroBlock
                                        selected={selectedHero === 'infrastructure'}
                                        onClick={() => setSelectedHero('infrastructure')}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='text-white text-2xl font-semibold mb-4'>WHAT WE DO</div>
                                <div className='flex h-50 transition-all ease-in-out'>
                                    <HeroCard
                                        image={HeroImage}
                                        text={'Demo Builders'}
                                        selected={selectedHero === 'demo'}
                                        onClick={() => setSelectedHero('demo')}
                                    />
                                    <HeroCard
                                        image={Residential}
                                        text={'Residential'}
                                        selected={selectedHero === 'residential'}
                                        onClick={() => setSelectedHero('residential')}
                                    />
                                    <HeroCard
                                        image={Commercial}
                                        text={'Commercial'}
                                        selected={selectedHero === 'commercial'}
                                        onClick={() => setSelectedHero('commercial')}
                                    />
                                    <HeroCard
                                        image={Infrastructure}
                                        text={'Infrastructure'}
                                        selected={selectedHero === 'infrastructure'}
                                        onClick={() => setSelectedHero('infrastructure')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute h-250 w-full flex justify-end items-end' />
                    <div className='overflow-hidden w-full'>
                        <img
                            key={selectedHero}
                            className={`h-250 w-full object-cover
                            ${slideDirection === 'left'
                                    ? 'slide-right'
                                    : 'slide-left'
                            }`}
                            src={heroImages[selectedHero]}
                            alt={selectedHero}
                        />
                    </div>
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
        </>
    )
}

export default Landing
