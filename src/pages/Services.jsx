import civil from '../assets/services/civilworks.jpg';
import commercial from '../assets/services/commercial_development.jpg';
import general from '../assets/services/general_construction.jpg';
import project from '../assets/services/project_mng.jpg';
import renovation from '../assets/services/renovation.jpg';
import residential from '../assets/services/residential.jpg';


const ServicesCard = ({ img, title, desc }) => {
    const subtitle_style = 'font-semibold mt-8 mb-2 text-xl'

    return (
        <div className='grid grid-cols-2 gap-8 min-h-80 mb-8'>
            <div className='border border-gray-800'
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} />
            <div className='flex flex-col text-justify'>
                <span className={` ${subtitle_style} mt-0 `}>{ title }</span>
                <span>
                    { desc }
                </span>
            </div>
            
        </div>
    )
}


const Services = () => {
    const content = [
        {
            img: general,
            title: 'General Construction',
            desc: 'End-to-end construction services covering site development, structural works, building systems, and finishing. We coordinate every stage of construction with careful attention to quality and schedule.'
        },
        {
            img: commercial,
            title: 'Commercial Development',
            desc: 'We build functional, efficient spaces for businesses and organizations, including offices, retail establishments, hospitality spaces, and other commercial developments.'
        },
        {
            img: residential,
            title: 'Residential Construction',
            desc: 'From individual homes to multi-unit developments, we create residential spaces that balance thoughtful design, durability, and everyday functionality.'
        },
        {
            img: civil,
            title: 'Structural & Civil Works',
            desc: 'Our capabilities include foundations, concrete structures, masonry, steel works, site preparation, and other essential civil and structural requirements.'
        },
        {
            img: renovation,
            title: 'Renovation & Upgrading',
            desc: 'We modernize and improve existing properties through renovation, remodeling, and building upgrades while considering the structure, function, and character of the space.'
        },
        {
            img: project,
            title: 'Project Management',
            desc: 'We provide coordinated project management throughout the construction process, from planning and procurement to execution, quality control, and completion.'
        },
    ]
  return (
    <div>
        <div className="flex flex-col mt-12 text-lg">
            {content.map((content) => (
                <ServicesCard 
                    key={content.title}
                    img={content.img}
                    title={content.title}
                    desc={content.desc}
                />
            ))}
      </div>
    </div>
  )
}

export default Services
