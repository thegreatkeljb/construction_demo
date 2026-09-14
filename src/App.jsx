import HeroImage from './assets/demo_hero.png'
import Residential from './assets/demo_residential.png'
import Commercial from './assets/demo_commercial.png'
import Industrial from './assets/demo_industrial.png'


function App() {
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
          </ul>
        </div>
      </nav>

      <section>
        <div>
          <div className='absolute h-250 w-full flex justify-end items-end p-24
          bg-linear-to-b from-gray-100/70 via-transparent to-gray-800/70'>
            <div className='grid grid-cols-[1fr_1.5fr] gap-100 z-5 h-60 w-full items-end'>
              <div className='text-white'>
                <span className='text-2xl font-semibold'>WE BUILD TRUST</span>
                <br />
                <br />
                Established in 2015, Demo Builders is owned and managed by reliable and trustworthy professionals with more than 12 years of experience in residential and commercial construction projects.
                <br />
                Demo Builders stands at the forefront of nation-building in the Philippines, driven by a steadfast commitment to engineering excellence and innovation.
              </div>
              <div>
                <div className='text-white text-2xl font-semibold mb-4'>What We Do</div>
                <div className='flex h-50'>
                  <div className='w-[40%] flex items-end justify-end border border-gray-400 bg-linear-to-t from-black to-transparent'
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${HeroImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'left',
                    }}>
                    <div className="flex items-center w-full gap-8 py-4">
                      <div className="w-full h-[0.5px] bg-gray-400 pl-8" />
                      <span className="shrink-0 text-white pr-8">
                        Demo Builders
                      </span>
                    </div>
                  </div>
                  <div className='w-[20%] grayscale opacity-80 
                  flex items-end justify-end border border-gray-400'
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${Residential})`,
                      backgroundSize: 'auto 120%',
                      backgroundPosition: 'center',
                    }}>
                    <div className="flex items-center w-full gap-4 py-4">
                      <div className="w-full h-[0.5px] bg-gray-400 pl-4" />
                      <span className="shrink-0 text-white pr-4">
                        Residential
                      </span>
                    </div>
                  </div>
                  <div className='w-[20%] grayscale opacity-80 
                  flex items-end justify-end border border-gray-400'
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${Commercial})`,
                      backgroundSize: 'auto 120%',
                      backgroundPosition: 'center',
                    }}>
                    <div className="flex items-center w-full gap-4 py-4">
                      <div className="w-full h-[0.5px] bg-gray-400 pl-4" />
                      <span className="shrink-0 text-white pr-4">
                        Commercial
                      </span>
                    </div>
                  </div>
                  <div className='w-[20%] grayscale opacity-80 
                  flex items-end justify-end border border-gray-400'
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${Industrial})`,
                      backgroundSize: 'auto 120%',
                      backgroundPosition: 'center',
                    }}>
                    <div className="flex items-center w-full gap-4 py-4">
                      <div className="w-full h-[0.5px] bg-gray-400 pl-4" />
                      <span className="shrink-0 text-white pr-4">
                        Industrial
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='absolute h-250 w-full flex justify-end items-end'>

          </div>
          <img className='h-250 w-full'
            src={Residential} alt="Single Family Home" />
        </div>
      </section>

      <section className='h-250'>

      </section>
    </>
  )
}

export default App
