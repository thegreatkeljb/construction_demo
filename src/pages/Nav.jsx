import { useState, useEffect } from "react";
import { Link } from "react-router";

import LOGO from '../assets/demo_builders/demobuilders_logo.png'

const Nav = () => {
    const navlink_style = 'mr-6 border-t border-t-transparent hover:border-gray-800';
    const [scrolled, setScrolled] = useState(false);

    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
     <nav className={`fixed w-screen flex justify-between transition z-100 
        ${scrolled ? 'bg-white py-4 shadow-lg' : 'bg-transparent py-8 shadow-none'}`}>
        <Link to='/'
        className="flex w-fit items-center justify-center pl-16">
            <img className="h-20 mr-1 w-auto"
                 src={LOGO} alt="Demo Builders Logo" />
            <div className="flex flex-col justify-center items-center">
                <span className="font-semibold text-3xl">Demo Builders</span>
                <span className="text italic">A CONSTRUCTION COMPANY</span>
            </div>
        </Link>
        <div className="flex flex-col justify-center">
            <div className="border-b border-black pl-2 pr-16">
                This is a demo website built by <a className='font-semibold hover:underline' href='https://ancartechnologies.onrender.com/'>Ancar Technologies</a>
            </div>
            <ul className="flex flex-row text-lg pl-2 pr-16">
                <Link to={'/'} className={navlink_style}>Home</Link>
                <Link to={'/about'} className={navlink_style}>About</Link>
                <Link to={'/services'} className={navlink_style}>Services</Link>
                <Link to={'/portfolio'} className={navlink_style}>Our Portfolio</Link>
                <Link to={'/contact'} className={navlink_style}>Contact Us</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
