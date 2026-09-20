import { Outlet } from "react-router";
import { Link } from "react-router";

import ING from '../../assets/demo_infrastructure.png'

const PagesTemplate = ({ Title = "No Title" }) => {
  return (
    <>
      <section className="w-full overflow-hidden">
        <div className='h-120 w-full overflow-hidden'>
          <div className="absolute overflow-hidden z-1 h-120 w-full bg-linear-to-b from-white/70 via-white/30 to-transparent"/>
          <img
              className={`h-120 w-full grayscale-50 overflow-hidden`}
              src={ING}
              alt='{selectedHero}'
            />
        </div>
        <div className="flex justify-center mt-24 mb-12">
          <div className="flex flex-col items-center justify-center">
            <div className="h-1 w-24 bg-gray-800"/>
            <div className="text-3xl font-semibold py-2">
              { Title }
            </div>
            <Link to={'/'}>Home</Link>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  )
}

export default PagesTemplate
