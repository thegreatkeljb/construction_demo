import { FaHammer, FaCheckSquare } from "react-icons/fa";

import IMG_1 from '../assets/demo_infrastructure.png';
import IMG_2 from '../assets/demo_residential.png';
import IMG_3 from '../assets/demo_commercial.png';
import IMG_4 from '../assets/project_loft.png';
import IMG_5 from '../assets/project_housing.png';

const ProjectCard = ({ img, name = "No Title", category, status }) => {

    return (
        <div className='border border-gray-800 h-120'
        style={{
            backgroundImage: `url(${ img })`,
            backgroundPosition: 'center',
            backgroundSize: ('cover', '150%'),
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="relative w-full h-full overflow-hidden group text-white">
                <div
                    className="absolute inset-0
                    bg-linear-to-t from-black/90 via-black/40 to-transparent
                    translate-y-[40%]
                    group-hover:translate-y-0 group-hover:cursor-pointer
                    transition-transform duration-1000
                    ease-[cubic-bezier(0.22,1,0.36,1)]"   
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <div 
                    className="flex flex-col
                    transition-transform duration-700
                    group-hover:-translate-y-2">
                        <span className='text-2xl font-semibold'>{ name }</span>
                        <span className='uppercase'>{ category }</span>
                    </div>
                    <div
                    className="flex flex-row items-center
                    mt-2 pt-4 border-t border-gray-400
                    opacity-0 translate-y-10
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-700 delay-100">
                        {status?.toUpperCase() === 'COMPLETED' ? <FaCheckSquare /> : <FaHammer />}
                        <span className="ml-2 uppercase">{ status }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Portfolio = () => {
    const projects = [
        {
            img: IMG_1,
            name: 'Bacolod-Silay Airport',
            category: 'Industrial',
            status: 'Completed'
        },
        {
            img: IMG_2,
            name: 'Dela Cruz Apartments',
            category: 'Reidential',
            status: 'Completed'
        },
        {
            img: IMG_3,
            name: 'Triple Dragon Building',
            category: 'Commercial',
            status: 'Completed'
        },
        {
            img: IMG_4,
            name: 'Love You Lofts',
            category: 'Residential',
            status: 'ON GOING'
        },
        {
            img: IMG_5,
            name: 'Barangay Carlita Housing',
            category: 'Residential',
            status: 'ON GOING'
        },
    ]
  return (
    <div className="grid grid-cols-2 gap-8">
       {projects.map((projects) => (
            <ProjectCard
                key={projects.name}
                img={projects.img}
                name={projects.name}
                category={projects.category}
                status={projects.status}
            />
        ))}
    </div>
  )
}

export default Portfolio
