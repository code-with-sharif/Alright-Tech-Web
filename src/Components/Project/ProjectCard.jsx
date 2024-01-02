import projectimg1 from '../../Images/projectimg1.png'
import projectimg2 from '../../Images/projectimg2.png'
import projectimg3 from '../../Images/projectimg3.png'
import projectimg4 from '../../Images/projectimg4.png'
import ProjectViewIcon from '../Icon/ProjectViewicon';
import ProjectstudyIcon from '../Icon/Projectstudyicon';
function ProjectCard() {
    const projectsData = [
        {
          id: 1,
          title: 'NFT - Web Design',
          imageSrc: projectimg1,
        },
        {
          id: 2,
          title: 'Ant - Personal Portofolio',
          imageSrc: projectimg2,
      
        },
        {
          id: 3,
          title: 'Lumy - Dashboard UI Kit',
          imageSrc: projectimg3,
       
        },
        {
          id: 4,
          title: 'Keeper - Soccer Site',
          imageSrc: projectimg4,
       
        },
        {
          id: 3,
          title: 'Lumy - Dashboard UI Kit',
          imageSrc: projectimg3,
       
        },
        {
            id: 6,
            title: 'Keeper - Soccer Site',
            imageSrc: projectimg4,
         
          },
        // Add more project data objects as needed
      ];

    return (
      <>
        <main className='w-full lg:px-24 mt-16'>
          <h1 className='py-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] lg:text-start text-center'>Our Projects</h1>
          {/* <div>
            <ul className="flex gap-10 list-none lg:mx-0 text-[#828282] cursor-pointer"> 
              <li className="border-b-4 border-b-[#00A7E1] text-[#00A7E1]">
                Website Development
              </li>
              <li>
                Mobile App Development
              </li>
              <li>
                UI/UX Design
              </li>
              <li>
                Wordpress
              </li>
            </ul>
          </div> */}

        <div className='mx-4'>
            
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-5 grid-cols-1  my-10 w-full  ">
      {projectsData.map((project) => (
        <div key={project.id} className="">
          <div className='w-full'>
            <img className='' src={project.imageSrc} alt="" />
          </div>
          <div className='my-2 pl-2'>
            <h1 className='py-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] text-start '>{project.title}</h1>
            <div className='flex items-center md:gap-12 gap-6'>
              <ul className='flex  md:gap-5  gap-2 items-center'>
                <li><ProjectstudyIcon /></li>
                <li className='font-bold text-[#000] font-["HubotSans-Regular"] text-[20px]'><a href={project.caseStudyLink}>View Study Case</a></li>
              </ul>
              <ul className='flex md:gap-5  gap-2 items-center'>
                <li><ProjectViewIcon /></li>
                <li className='font-bold text-[#000] font-["HubotSans-Regular"] text-[20px]'><a href={project.livePreviewLink}>Live Preview</a></li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
        </main>
      </>
    )
  }
  
  export default ProjectCard;
  