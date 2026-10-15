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
import SkylineBG from '../assets/skyline_bg.jfif'
import DemoBuildersLogo from '../assets/demo_builders/demobuilders_logo.png'

//Logos
import ancartech from '../assets/logos/ancartechnologies.png';
import porsche from '../assets/logos/porsche.png';
import blackdecker from '../assets/logos/blackdecker.png';
import chanel from '../assets/logos/chanel.png';
import mcdo from '../assets/logos/mcdo.png';
import nba from '../assets/logos/nba.png';
import puregold from '../assets/logos/puregold.png';
import starbucks from '../assets/logos/starbucks.png';
import blackrock from '../assets/logos/blackrock.png';
import toyota from '../assets/logos/toyota.png';

import StaggerReveal from "./components/StaggerReveal";
import InfiniteCarousel from "./components/InfiniteCarousel";
import LogoStrip from "./components/LogoStrip";
import HeroSection from "./components/HeroSection"

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
            onClick={onClick}
        />
    )
}

const ProjectCard = ({ image, title, desc }) => {
    return (
        <div className='hero-bg group flex items-end h-132 pb-12 px-4 border border-gray-500 
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

const ProjCard = ({ stats, category }) => {
    return (
        <div className='flex flex-col h-full text-center justify-center py-8 md:p-8 rounded-xl border border-gray-200'>
            <span className='font-semibold text-4xl md:text-5xl pb-4'>{stats}</span>
            <span>{category}</span>
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

    const statistics = [
        {
            stats: '15+',
            category: 'Years of Experience',
        },
        {
            stats: '100+',
            category: 'Projects Completed',
        },
        {
            stats: '50+',
            category: 'Professionals & Partners',
        },
        {
            stats: '2B+',
            category: 'Total Portfolio Revenue',
        },
        {
            stats: 'AAA',
            category: 'Licensed Contractor',
        },
        {
            stats: '900+',
            category: 'Total Employees',
        },
    ];

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
        demo: 'Established in 2015, Demo Builders is owned and managed by trustworthy professionals with more than 12 years of experience in residential and commercial construction projects. We stand at the forefront of nation-building in the Philippines, driven by a commitment to excellence.',
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

            {/* Whole hero section component */}
            <HeroSection />

            <section>
                <div className="relative h-full xl:h-250 w-full flex items-center justify-center
                before:absolute before:inset-0 before:bg-cover before:bg-center
                before:bg-no-repeat before:opacity-30"
                    style={{
                        "--bg-image": `url(${SkylineBG})`,
                    }}>
                    <div
                        className="absolute inset-0 before:content-['']"
                        style={{
                            backgroundImage: `url(${SkylineBG})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            opacity: 0.03,
                        }} />

                    <div className="relative z-10 w-full pb-24 xl:pb-0">
                        <div className='mx-auto w-full px-8 md:px-24 xl:max-w-300 2xl:max-w-360
                         flex flex-col p-24'>
                            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-24">
                                <div className='flex flex-col items-center '>
                                    <img className="h-auto w-28 mb-16"
                                        src={DemoBuildersLogo} alt="Demo Builders Logo" />
                                    <div className='flex flex-col justify-center text-justify text-lg'>
                                        For over a decade, Demo Builders has shaped spaces that inspire progress and stand the test of time.
                                        <br /><br />
                                        From thoughtfully designed homes to commercial developments, every project reflects our commitment to quality, precision, and enduring craftsmanship.
                                        <br /><br />
                                        Grounded in our values and driven by a pursuit of excellence, we build with purpose, creating lasting structures and a stronger foundation for generations to come.
                                    </div>
                                </div>
                                <StaggerReveal direction="up" className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
                                    {statistics.map((statistics) => (
                                        <ProjCard
                                            key={statistics.stats}
                                            stats={statistics.stats}
                                            category={statistics.category}
                                        />
                                    ))}
                                </StaggerReveal>
                            </div>
                        </div>
                        <LogoStrip 
                            label="Trusted by leading companies"
                            logos={[
                                { src: ancartech, alt: "Ancar Technologies" },
                                { src: porsche, alt: "Porsche" },
                                { src: blackdecker, alt: "Black Decker" },
                                { src: chanel, alt: "Chanel" },
                                { src: mcdo, alt: "McDonalds" },
                                { src: nba, alt: "NBA" },
                                { src: puregold, alt: "Puregold" },
                                { src: starbucks, alt: "Starbucks" },
                                { src: blackrock, alt: "Blackrock" },
                                { src: toyota, alt: "Toyota" },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className='flex justify-center bg-gray-800 py-24 xl:py-32'>
                <div className='flex flex-col w-full px-8 md:px-24 xl:p-0 xl:w-280 bg-gray-800 text-white'>
                    <span className='text-4xl font-semibold'>Where Engineering Meets Excellence</span>
                    <span className='mt-8 mb-4'>Demo Builders is a trusted leader in the construction sector, renowned
                        <br /> for delivering exceptional results across a diverse range of projects.</span>
                    <div>
                        <StaggerReveal direction="up" className="grid xl:grid-cols-3 gap-8">
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
                        </StaggerReveal>
                    </div>
                </div>
            </section>
            {/* People */}
            <section className="flex flex-col justify-center items-center pt-24 pb-32">
                <div className="flex flex-col w-full px-8 md:px-24 xl:px-0 lg:w-240 text-center">
                    <span className='text-3xl font-semibold'>Excellence Starts With Our People</span>
                    <span className='text-lg mt-8 pb-16 lg:pb-0 lg:mb-16 border-b lg:border-0'>
                        At Demo Builders, we believe exceptional work begins with exceptional people. We are committed to investing in our team’s growth, safety, and well-being, creating an environment where every individual is empowered to build with skill, confidence, and pride.
                    </span>
                </div>
                <div className="hidden lg:grid grid-cols-[0.3fr_1fr] xl:grid-cols-[0.5fr_1fr] h-64 xl:h-80 w-full">
                    <div />
                    <div
                        style={{
                            backgroundImage: `url(${PeopleImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </div>
            </section>
            {/* Client Feedback */}
            <section className='flex flex-col justify-center items-center pb-16'>
                <div className="h-fit flex flex-col-reverse items-center w-full px-8 md:px-24 lg:grid lg:grid-cols-2 lg:gap-16 xl:w-280">
                    <div className="flex flex-col pt-4 pb-16">
                        <span className='hidden lg:inline-block text-3xl font-semibold'>What Our Clients Say</span>
                        <span className='text-xl mt-8 mb-12'>
                            “Working with Demo Builders was a great experience from start to finish. Their team was professional, reliable, and attentive to every detail throughout the project. They understood our vision, communicated clearly, and delivered quality work that we can be proud of. We truly appreciate their commitment and would gladly work with them again.”
                        </span>
                        <span>
                            <b>— James Alexander McArthur</b> <br />
                            Chief Executive Officer, <b>McArthur Foods Inc.</b>
                        </span>
                    </div>
                    <div className="h-64 w-64 rounded-full lg:rounded-none lg:w-full lg:h-full"
                        style={{
                            backgroundImage: `url(${CEOImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top'
                        }}
                    />
                </div>
                <StaggerReveal direction="up" className="bg-gray-800 w-full mt-16 lg:mt-32 pt-24 lg:pt-0
                lg:bg-transparent grid lg:gap-4 
                grid-cols-1 lg:grid-cols-[.5fr_1.5fr_1.5fr] xl:grid-cols-[.5fr_1fr_1.5fr_0.5fr]">
                    <div className="h-36 lg:bg-gray-800 lg:h-full">
                        <BiSolidQuoteLeft className="h-full w-full fill-white" />
                    </div>
                    <div className="flex flex-col lg:bg-gray-800 text-white p-8 md:p-16">
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
                            backgroundImage: `url(${DealImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <div className="bg-gray-800 h-full" />
                </StaggerReveal>
            </section>
        </>
    )
}

export default Landing
