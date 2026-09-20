import { useState, useEffect } from "react";
import { Link } from "react-router";

const Nav = () => {
    const navlink_style = 'mr-6 hover:border-t hover:border-gray-800';
    const [scrolled, setScrolled] = useState(false);

    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
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
                <Link to={'/'} className={navlink_style}>Home</Link>
                <Link to={'about'} className={navlink_style}>About</Link>
                <a className={navlink_style}>Services</a>
                <li className={navlink_style}>Our Portfolio</li>
                <li className={navlink_style}>Contact Us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
