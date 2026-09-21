import { Outlet } from "react-router";
import { Link } from "react-router";

import IMG_1 from '../../assets/demo_infrastructure.png';
import IMG_2 from '../../assets/demo_residential.png';
import IMG_3 from '../../assets/demo_commercial.png';
import IMG_4 from '../../assets/demo_people.png';
import IMG_5 from '../../assets/project_loft.png';


const PagesTemplate = ({ Title = "No Title" }) => {
  const RANDOM_IMG = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];

  const img = RANDOM_IMG[Math.floor(Math.random() * RANDOM_IMG.length)];
  return (
    <>
      <section className="flex flex-col items-center w-full overflow-hidden pb-16">
        <div className='h-120 w-full overflow-hidden'>
          <div className="absolute overflow-hidden z-1 h-120 w-full bg-linear-to-b from-white/30 via-white/10 to-transparent"/>
          <div  
            className={`h-120 w-full`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
            />
        </div>
        <div className="flex justify-center mt-24 mb-16">
          <div className="flex flex-col items-center justify-center">
            <div className="h-0.5 w-24 bg-gray-800"/>
            <div className="text-3xl font-semibold py-2">
              { Title }
            </div>
            <Link to={'/'}>Home</Link>
          </div>
        </div>
        <div className="w-7xl">
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default PagesTemplate
