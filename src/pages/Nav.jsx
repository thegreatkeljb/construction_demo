import { useState, useEffect } from "react";
import { Link } from "react-router";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import LOGO from '../assets/demo_builders/demobuilders_logo.png'

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Our Portfolio' },
    { to: '/contact', label: 'Contact Us' },
];

const Nav = () => {
    const navlink_style = 'mr-6 border-t border-t-transparent hover:border-gray-800';
    const mobilelink_style = 'block border-b border-gray-200 py-3 text-lg hover:text-gray-500';
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)')
        const onChange = (e) => e.matches && setOpen(false)
        const onKey = (e) => e.key === 'Escape' && setOpen(false)
        mq.addEventListener('change', onChange)
        window.addEventListener('keydown', onKey)
        return () => {
            mq.removeEventListener('change', onChange)
            window.removeEventListener('keydown', onKey)
        }
    }, [])

    const close = () => setOpen(false)

    return (
        <nav className={`fixed inset-x-0 top-0 transition z-100
            ${scrolled || open ? 'bg-white shadow-lg' : 'bg-transparent shadow-none'}
            ${scrolled ? 'py-3 lg:py-4' : 'py-4 lg:py-8'}`}>
            <div className="flex items-center justify-between">
                <Link to='/' onClick={close}
                    className="flex w-fit items-center justify-center pl-4 sm:pl-8 lg:pl-16">
                    <img className="h-12 lg:h-20 mr-1 w-auto"
                        src={LOGO} alt="Demo Builders Logo" />
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-semibold text-xl sm:text-2xl lg:text-3xl">Demo Builders</span>
                        <span className="text-[0.65rem] sm:text-xs lg:text-base italic">A CONSTRUCTION COMPANY</span>
                    </div>
                </Link>
                <div className="hidden lg:flex flex-col justify-center">
                    <div className="border-b border-black pl-2 pr-16">
                        This is a demo website built by <a className='font-semibold hover:underline' href='https://ancartechnologies.onrender.com/'>Ancar Technologies</a>
                    </div>
                    <ul className="flex flex-row text-lg pl-2 pr-16">
                        {LINKS.map((l) => (
                            <Link key={l.to} to={l.to} className={navlink_style}>{l.label}</Link>
                        ))}
                    </ul>
                </div>
                <button
                    type="button"
                    className="lg:hidden mr-4 sm:mr-8 flex size-11 items-center justify-center border border-gray-800
                    transition-colors duration-300 hover:bg-gray-800 hover:text-white"
                    onClick={() => setOpen((o) => !o)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                >
                    {open ? <RxCross1 className="size-5" /> : <RxHamburgerMenu className="size-5" />}
                </button>
            </div>
            <div
                id="mobile-nav"
                aria-hidden={!open}
                className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-out
                ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-4 sm:px-8 pt-4">
                        {LINKS.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={close}
                                tabIndex={open ? 0 : -1}
                                className={mobilelink_style}
                            >
                                {l.label}
                            </Link>
                        ))}
                        <p className="py-4 text-sm text-gray-600">
                            This is a demo website built by{' '}
                            <a
                                className='font-semibold hover:underline'
                                href='https://ancartechnologies.onrender.com/'
                                tabIndex={open ? 0 : -1}
                            >
                                Ancar Technologies
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav