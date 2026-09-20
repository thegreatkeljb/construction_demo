import CEO from '../assets/leadership/ceo.jpg'
import COO from '../assets/leadership/coo.jpg'
import HEADCONST from '../assets/leadership/head_const.jpg'
import PROJDIR from '../assets/leadership/proj_dir.jpg'

const ProfileCard = ({ image, name, title }) => {
  return (
    <div className='pl-4 pt-2 border-l-2 border-gray-800 text-black'>
      <img className='grayscale-25'
      src={ image } alt="" />
      <div className='flex flex-col text-right pt-2 pr-4'>
        <span className='font-semibold'>{ name }</span>
        <span>{ title }</span>
      </div>
    </div>
  )
}

const ProjCard = ({ stats, category }) => {
  return (
    <div>
      <div className='flex flex-col h-full text-left justify-center
      border-r-2 pl-4'>
        <span className='font-semibold text-2xl'>{ stats }</span>
        <span>{ category }</span>
      </div>
    </div>
  )
}

const About = () => {
  const leaders = [
    {
      image: CEO,
      name: 'Michael Anderson',
      title: 'Chief Executive Officer',
    },
    {
      image: COO,
      name: 'Angel Clarkson',
      title: 'Chief Operations Officer',
    },
    {
      image: HEADCONST,
      name: 'Robert Mitchell',
      title: 'Head of Construction',
    },
    {
      image: PROJDIR,
      name: 'Andrew Tan',
      title: 'Project Director',
    },
  ];

  const statistics = [
    {
      stats: '15+',
      category: 'Years of Experience',
    },
    {
      stats: '100+',
      category: 'Projects Completed',
    },
    {
      stats: '50+',
      category: 'Professionals & Partners',
    },
    {
      stats: '4',
      category: 'Core Service Areas',
    },
  ];

  return (
    <section className='flex flex-col justify-center text-lg'>
      <div className="flex flex-col">
        <span className="text-2xl font-semibold mb-2">15+ Years of Experience</span>
        <span>With more than 15 years in the construction industry, our experience spans a wide range of projects and environments.
        Our team understands that every project comes with its own requirements, challenges, and expectations. We approach each one with careful planning, attention to detail, and a commitment to delivering work to a high standard.</span>
        <div className="grid grid-cols-4 gap-4 h-32 mt-8">
           {statistics.map((statistics) => (
              <ProjCard
                key={statistics.stats}
                stats={statistics.stats}
                category={statistics.category}
              />
            ))}
        </div>
      </div>
      {/* Values */}
      <div className="flex flex-col mt-12">
        <span className="text-2xl font-semibold mb-2">Our Values</span>
        <span className="font-semibold mt-2">01 — Quality</span> 
        We maintain high standards throughout every stage of construction, from planning and material selection to execution and final delivery.
        <span className="font-semibold mt-2">02 — Integrity</span> 
        We believe strong projects begin with strong relationships. We communicate clearly, act responsibly, and remain accountable to our commitments.
        <span className="font-semibold mt-2">03 — Collaboration</span> 
        Successful projects require people working toward the same goal. We work closely with clients, architects, engineers, suppliers, and partners throughout the process.
        <span className="font-semibold mt-2">04 — Excellence</span> 
        We continuously look for better ways to plan, build, and deliver. Our goal is to create results that meet expectations and provide lasting value.
      </div>
      {/* Process */}
      <div className="flex flex-col mt-12">
        <span className="text-2xl font-semibold mb-2">Our Process</span>
        We follow a structured approach to keep every project organized, transparent, and moving forward.
        <span className="font-semibold mt-2">01 — Consultation</span> 
        We begin by understanding your vision, requirements, budget, and project goals.
        <span className="font-semibold mt-2">02 — Planning & Design</span> 
        Our team develops a clear project plan, coordinating the necessary technical, design, and construction requirements.
        <span className="font-semibold mt-2">03 — Construction</span> 
        With the plan in place, our team manages the construction process with close attention to quality, safety, scheduling, and coordination.
        <span className="font-semibold mt-2">04 — Completion</span> 
        Before handover, we conduct final inspections and ensure that the completed project meets the agreed requirements.
      </div>
      {/* Leadership */}
      <div className="flex flex-col mt-12">
        <span className="text-2xl font-semibold mb-2">Our Leadership</span>
        Behind every successful project is a team that understands how to turn plans into action. <br />
        Our leadership team brings together experience across construction, project management, engineering, and business operations. Together, they provide the direction and accountability needed to deliver projects efficiently and responsibly.
        <div className="grid grid-cols-4 gap-4 h-100 mt-4">
           {leaders.map((leader) => (
              <ProfileCard
                key={leader.name}
                image={leader.image}
                name={leader.name}
                title={leader.title}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default About
