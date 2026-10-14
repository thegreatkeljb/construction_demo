import { useState, useEffect } from "react";

import HeroImage from '../../assets/demo_hero.png';
import Residential from '../../assets/demo_residential.png';
import Commercial from '../../assets/demo_commercial.png';
import Infrastructure from '../../assets/demo_infrastructure.png';

const INTERVAL = 8000; // ms between automatic slides (restarts every time you click)

const SLIDES = [
    {
        key: 'demo',
        image: HeroImage,
        label: 'Demo Builders',
        description: 'Established in 2015, Demo Builders is owned and managed by trustworthy professionals with more than 12 years of experience in residential and commercial construction projects. We stand at the forefront of nation-building in the Philippines, Driven by a commitment to excellence.',
    },
    {
        key: 'residential',
        image: Residential,
        label: 'Residential',
        description: `We specialize in building quality residential spaces designed for comfort, functionality, and lasting value. From single-family homes to larger residential developments, our team delivers projects with careful planning, quality workmanship, and attention to detail.`,
    },
    {
        key: 'commercial',
        image: Commercial,
        label: 'Commercial',
        description: `We deliver commercial construction projects that combine functionality, durability, and thoughtful design. From office spaces and retail establishments to larger commercial developments, we work to create spaces that support businesses and meet the demands of everyday operations.`,
    },
    {
        key: 'infrastructure',
        image: Infrastructure,
        label: 'Infrastructure',
        description: `We undertake infrastructure projects that contribute to the growth and development of communities. Our work focuses on delivering reliable, durable, and well-planned structures while maintaining high standards of safety, quality, and engineering throughout every stage of construction.`,
    },
];

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

const HeroBlock = ({ selected = false, onClick, label }) => {
    return (
        <button
            aria-label={`Show ${label}`}
            className={`${selected ? 'bg-white' : 'bg-white/60'} size-8 hover:cursor-pointer transition-colors duration-300`}
            onClick={onClick}
        />
    )
}

export default function HeroSlider() {
    const [index, setIndex] = useState(0);
    const [prev, setPrev] = useState(null);   // the slide that is leaving; stays underneath until covered
    const [resetKey, setResetKey] = useState(0); // bumped on every click to restart the timer

    // Every click (even on the slide that's already showing) restarts the 12s countdown
    const goTo = (i) => {
        if (i !== index) {
            setPrev(index);
            setIndex(i);
        }
        setResetKey((k) => k + 1);
    };

    // One timeout instead of a fixed interval: it is recreated whenever the slide changes
    // or a click happens, so a click can never be followed immediately by an auto-advance.
    useEffect(() => {
        const timer = setTimeout(() => {
            setPrev(index);
            setIndex((index + 1) % SLIDES.length);
        }, INTERVAL);
        return () => clearTimeout(timer);
    }, [index, resetKey]);

    const slide = SLIDES[index];

    return (
        <section>
            <style>
                {`
                    .hero-stage { --hero-dur: 1000ms; }

                    /* All slides are always mounted and stacked, so each image is already
                       loaded and decoded before it is shown: no blank frame, no white flash. */
                    .hero-layer {
                        position: absolute; inset: 0;
                        width: 100%; height: 100%;
                        object-fit: cover;
                        opacity: 0;
                        transform: translate3d(var(--hero-x), 0, 0);
                        /* Leaving slide: stays fully visible underneath for the whole
                           transition, then switches off after the new one has covered it. */
                        transition: opacity 0ms linear var(--hero-dur), transform 0ms linear var(--hero-dur);
                        will-change: opacity, transform;
                    }
                    .hero-layer.is-active {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                        transition: opacity var(--hero-dur) ease-in-out,
                                    transform var(--hero-dur) cubic-bezier(0.22, 1, 0.36, 1);
                    }

                    @keyframes hero-text-in {
                        from { opacity: 0; transform: translateY(10px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    .hero-text-in { animation: hero-text-in 700ms ease-out both; }

                    @media (prefers-reduced-motion: reduce) {
                        .hero-layer, .hero-layer.is-active { transition: none; }
                        .hero-text-in { animation: none; }
                    }
                `}
            </style>

            <div className="hero-stage relative h-250 w-full overflow-hidden bg-gray-900">
                {/* Image stack */}
                {SLIDES.map((s, i) => (
                    <img
                        key={s.key}
                        src={s.image}
                        alt={s.label}
                        aria-hidden={i !== index}
                        draggable={false}
                        fetchPriority={i === 0 ? 'high' : undefined}
                        className={`hero-layer ${i === index ? 'is-active z-20' : i === prev ? 'z-10' : 'z-0'}`}
                        // new slides enter from the side they sit on in the sequence
                        style={{ '--hero-x': i < index ? '-8%' : '8%' }}
                    />
                ))}

                {/* Overlay with text and controls */}
                <div className='absolute inset-0 z-30 flex justify-end items-end p-24
                    bg-linear-to-b from-gray-100/50 via-transparent to-gray-800/70 overflow-x-hidden'>
                    <div className='grid grid-cols-[1fr_1.5fr] gap-100 z-5 h-60 w-full items-start'>
                        <div className='text-white'>
                            <div className='text-2xl font-semibold mb-4'>WE BUILD TRUST</div>
                            <p key={slide.key} className="hero-text-in whitespace-pre-line text-lg">
                                {slide.description}
                            </p>
                            <div className='flex gap-2 mt-8'>
                                {SLIDES.map((s, i) => (
                                    <HeroBlock
                                        key={s.key}
                                        label={s.label}
                                        selected={i === index}
                                        onClick={() => goTo(i)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='text-white text-2xl font-semibold mb-4'>WHAT WE DO</div>
                            <div className='flex h-50 transition-all ease-in-out'>
                                {SLIDES.map((s, i) => (
                                    <HeroCard
                                        key={s.key}
                                        image={s.image}
                                        text={s.label}
                                        selected={i === index}
                                        onClick={() => goTo(i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}