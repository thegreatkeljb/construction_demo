import HeroImage from '../assets/demo_hero.png'
import Residential from '../assets/demo_residential.png'
import Commercial from '../assets/demo_commercial.png'
import Infrastructure from '../assets/demo_infrastructure.png'
import AboutUsImage from '../assets/about_us.png'

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
            <div className={`flex items-center w-full py-4 ${selected ?  'gap-8' : 'gap-4'}`}>
            <div className={`w-full h-[0.5px] bg-gray-400 ${selected ?  'pl-8' : 'pl-4'} `} />
                <span className={`shrink-0 text-white ${selected ?  'pr-8' : 'pr-4'}`}>
                    { text }
                </span>
            </div>
        </div>
        </>
    )
}

const ProjectCard = ({ image, title, desc }) => {
    return (
        <div className='flex items-end h-132 pb-16 px-4 rounded-tr-4xl border border-gray-500'
        style={{
            backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${ image })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className='flex flex-col w-full'>
                <span className='text-xl font-semibold'>{ title }</span>
                <span className='h-[0.5px] bg-white w-full mt-2 mb-4'></span>
                <span>{ desc }</span>
            </div>
        </div>
    )
}

const Landing = () => {
  const navlink_style = 'mr-6'
    return (
      <>
        <nav className="fixed w-screen flex justify-between py-8 z-10">
          <div className="flex flex-col w-fit items-center pl-16">
            <span className="bold text-4xl">Demo Builders</span>
            <span className="text-lg italic">A CONSTRUCTION COMPANY</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border-b border-black pl-2 pr-16">
              This is a demo website built by <a className='font-semibold' href='#'>Ancar Technologies</a>
            </div>
            <ul className="flex flex-row text-lg pl-2 pr-16">
              <li className={navlink_style}>Home</li>
              <li className={navlink_style}>About</li>
              <li className={navlink_style}>Services</li>
              <li className={navlink_style}>Our Portfolio</li>
              <li className={navlink_style}>Contact Us</li>
            </ul>
          </div>
        </nav>
  
        <section>
          <div>
            <div className='absolute h-250 w-full flex justify-end items-end p-24
            bg-linear-to-b from-gray-100/70 via-transparent to-gray-800/70'>
              <div className='grid grid-cols-[1fr_1.5fr] gap-100 z-5 h-60 w-full items-end'>
                <div className='text-white'>
                  <div  className='text-2xl font-semibold mb-4'>WE BUILD TRUST</div>
                  <div>
                     Established in 2015, Demo Builders is owned and managed by reliable and trustworthy professionals with more than 12 years of experience in residential and commercial construction projects.
                  <br />
                  Demo Builders stands at the forefront of nation-building in the Philippines, driven by a steadfast commitment to engineering excellence and innovation.
                  </div>
                 <div  className='flex gap-2 mt-4'>
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
                        image = { HeroImage } 
                        text = { 'Demo Builders' }
                        selected = { false }
                    />
                    <HeroCard 
                        image = { Residential } 
                        text = { 'Residential' }
                        selected = { false }
                    />
                    <HeroCard 
                        image = { Commercial } 
                        text = { 'Commercial' }
                        selected = { false }
                    />
                    <HeroCard 
                        image = { Infrastructure } 
                        text = { 'Infrastructure' }
                        selected = { true }
                    />  
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute h-250 w-full flex justify-end items-end'>
  
            </div>
            <img className='h-250 w-full'
              src={Infrastructure} alt="Single Family Home" />
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
                Guided by our values and passion for excellence, we continue building stronger foundations for a better future.</div>
            </div>
            <img className='w-280 scale-105'
            src={AboutUsImage} alt="" />
            </div>
          </div>
        </section>
  
        <section className='flex justify-center bg-gray-800 py-16'>
          <div className='flex flex-col w-280 bg-gray-800 text-white'>
              <span className='text-4xl font-semibold'>Where Engineering Meets Excellence</span>
              <span className='pt-2 pb-12'>Demo Builders is a trusted leader in the construction sector, renowned
                <br /> for delivering exceptional results across a diverse range of projects.</span>
                <div>
                  <div className='grid grid-cols-3 gap-8'>
                    <ProjectCard 
                        image={ Residential }
                        title={ 'Residential' }
                        desc = { 'Horizontal / Vertical'}
                    />
                    <ProjectCard 
                        image={ Commercial }
                        title={ 'Commercial' }
                        desc = { 'Mixed Use'}
                    />
                    <ProjectCard 
                        image={ Infrastructure }
                        title={ 'Infrastructure' }
                        desc = { 'Transport'}
                    />
                  </div>
                </div>
          </div>
        </section>
      </>
    )
}

export default Landing
