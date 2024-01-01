import serviceimg1 from '../../Images/serviceimg1.png';
import serviceimg2 from '../../Images/serviceimg2.png';
import serviceimg3 from '../../Images/serviceimg3.png';
import serviceimg4 from '../../Images/serviceimg4.png';
import serviceimg5 from '../../Images/serviceimg5.png';
import serviceimg6 from '../../Images/serviceimg6.png';

const Ourservices = () => {
  const data = [
    {
      icon: serviceimg1,
      text: "Web Development",
    },
    {
      icon: serviceimg2,
      text: "Application Development",
    }
    ,
    {
      icon: serviceimg3,
      text: "UI/UX Design",
    },
    
    // {
    //   icon: serviceimg3,
    //   text: "UI/UX Design",
    // },
    
    {
      icon: serviceimg4,
      text: "Software Development",
    },
    {
      icon: serviceimg5,
      text: "Wordpress & Plugin 1Development",
    },
    {
      icon: serviceimg6,
      text: "Ecommerce Development",
    },
  ];

  return (
    <>
      <main className="w-full lg:px-20 my-20 pt-8">
        <div className='grid lg:grid-cols-4 md:grid-cols-3 mx-4 gap-3'>
        <div className="w-full lg:h-auto pb-3 lg:col-span-2   text-[#293241]"> 
        <h1 className='pl-4 pt-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[22px] '>Our Services Marketing Expertise</h1>
        <p className='px-4 pt-2 text-justify font-normal text-[25px]font-["HubotSans-Regular"] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr.</p>
        </div>
          {data.map((item, index) => (
            <div key={index} className="bg-[#FCF1E1] w-full h-auto pb-3  opacity-100 rounded-md text-red-700">
              <h1>
                <img className='pl-4 pt-2' src={item.icon} alt="" />
              </h1>
              <p className='w-5/6 pl-4'>{item.text}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Ourservices;
