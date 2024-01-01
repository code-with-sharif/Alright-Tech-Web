import Latestworkimg1 from '../../Images/latestworkimg1.png'
import Latestworkimg2 from '../../Images/latestworkimg2.png'
import Latestworkimg3 from '../../Images/latestworkimg3.png'
const Latestwork = () => {
    const data=[
        {
            
                icon: Latestworkimg1,
                title: "Software Development",
                pairagraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,consetetur sadipscing elitr, "
              
        },
        {
            
                icon: Latestworkimg2,
                title: "Mobile Application Development",
                pairagraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,consetetur sadipscing elitr, "
              
        },
        {
            
                icon: Latestworkimg3,
                title: "Data Analytics",
                pairagraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,consetetur sadipscing elitr, "
              
        }
    ]
  return (
    <>
<main className='w-full lg:px-20  '>
<h1 className='py-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] lg:text-start text-center'>Our latest work</h1>
<div className='flex lg:flex-nowrap flex-wrap lg:mx-0 mx-4 lg:justify-start justify-center gap-5'>
{data.map((item,index)=>(
<div  key={index} className="md:w-4/12  w-full lg:mx-0 mx-4 h-auto bg-white border  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-lg lg:w-[410px] w-full h-[250px]" src={item.icon} alt="" />
      </a>
      <div className="pt-5 px-5">
        <a href="#">
          <h5 className="mb-2 text-[15px] font-bold   w-2/4 text-[#000] font-['HubotSans-Regular'] ">{item.title}</h5>
        </a>
        <p className="mb-2 font-normal text-[18px] text-[#5E5E5E]">{item.pairagraph} </p>
        
      </div>
    </div>
    ))}
</div>
        </main>
    </>
  )
}

export default Latestwork;