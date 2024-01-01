import blogicon1 from "../../Images/blogsicon1.png";
import blogicon2 from "../../Images/blogsicon2.png";
import blogicon3 from "../../Images/bolgsicon3.png";
import blogimg1 from "../../Images/blogsimg1.png";
import blogimg2 from "../../Images/blogsimg2.png";
import blogimg3 from "../../Images/blogsimg3.png";
const Blogs = () => {
  const data=[
    {
        
            icon: blogicon1,
            title: " Start Hiring",
            pairagraph:"  Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
            img:blogimg1
          
    },
    {
        
            icon: blogicon2,
            title: "5 Effective Ways Of Hiring",
            pairagraph:"Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
          img:blogimg2
    },
    {
        
            icon: blogicon3,
            title: "Development Outsourcing",
            pairagraph:"Are you a restaurant owner looking to grow your business? Reach new customers when you join our network. ",
          img:blogimg3
    }
]
  return (
    <>
      


      <main className='w-full lg:px-20  lg:mt-20 mt-10'>
<h1 className='py-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] lg:text-start text-center'>Blogs</h1>
<div className='flex lg:flex-nowrap flex-wrap lg:justify-start justify-center gap-5'>
{data.map((item,index)=>(
<div  key={index} className="md:w-4/12  w-full lg:mx-0 mx-4 h-auto bg-white border  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="pt-5 pl-5 " src={item.icon} alt="" />
      </a>
      <div className={`pt-${item.icon === blogicon3 ? 2 : 5} px-5`}>
  <a href="#">
    <h5 className="mb-2 text-[15px] font-bold text-[#000] font-['HubotSans-Regular']">{item.title}</h5>
  </a>
  <p className="mb-2 font-normal text-[18px] text-[#5E5E5E]">{item.pairagraph}</p>
</div>


<div className="pb-2 pt-0">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-4 font-['HubotSans-Regular'] text-[15px] font-bold uppercase text-center align-middle transition-all rounded-lg  disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
               see more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>

      <div>   <img
                className=" lg:w-[410px] w-full h-[250px]"
                src={item.img}
                alt=""
              /></div>
        
    </div>
    ))}
</div>
        </main>
    </>
  );
};

export default Blogs;
