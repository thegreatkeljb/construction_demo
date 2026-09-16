import React from 'react'

const Footer = () => {
    const navlink_style = 'mb-4'
  return (
    <footer>
        <div className='bg-gray-800 text-white'>
            <div className='grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 p-16'>
                <div className="flex flex-col w-fit pl-16">
                    <span className="font-semibold text-5xl">DEMO BUILDERS</span>
                    <span className="italic w-[80%] mt-8">
                        Disclaimer: This website is a demonstration project created by 
                        <b> Ancar Technologies</b> and does not represent a real company or business entity. All names, content, images, and information presented are for demonstration purposes only.
                    </span>
                </div>
                <div className=''>
                    <span className='pb-8 text-xl font-semibold'>QUICK LINKS</span>
                    <ul className="text-lg pt-8">
                        <li className={navlink_style}>Home</li>
                        <li className={navlink_style}>About</li>
                        <li className={navlink_style}>Services</li>
                        <li className={navlink_style}>Our Portfolio</li>
                        <li className={navlink_style}>Contact Us</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <span className='pb-8 text-xl font-semibold'>JOIN OUR NEWS LETTER</span>
                    <span>Subscribe to our newsletter to recieve latest information on all of our projects.</span>
                    <div className='my-4 w-full'>
                        <input type="text" placeholder='Enter your email address' className='border border-white p-2 w-[64%]'/>
                        <button className='ml-4 border p-2 hover:bg-white hover:text-black hover:cursor-pointer'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center bg-yellow-400 text-black py-16'>
            <div className='flex flex-col pr-16 w-240 justify-center items-center'>
                <span className='text-2xl font-semibold'>
                    BUILD YOUR ONLINE PRESENCE
                </span>
                <p className='mt-4 leading-relaxed text-center text-lg'>
                    Establish your own online presence with <b>Ancar Technologies</b>.
                    We develop modern, responsive, and fully customized websites, apps, or games
                    built around your needs.
                </p>
                <span className='text-2xl font-semibold mt-4'>
                    For as low as $50 / ₱3000
                </span>
                <button className='mt-6 w-fit border border-gray-800 px-6 py-3
                                font-semibold hover:bg-gray-800
                                hover:text-white hover:cursor-pointer'>
                    GET IN TOUCH
                </button>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer
