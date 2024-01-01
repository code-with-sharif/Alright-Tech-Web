import React from 'react'
import img3 from '../../Images/aboutimg3.png'
const Ourclients = () => {
  return (
    <>
        <main className=' w-full lg:px-20 px-4 mt-28  '>
            <div className=' w-full h-auto pb-4 flex gap-5 lg:gap-2 lg:flex-row flex-col  '>
                <section className='lg:w-6/12 w-full lg:order-1 order-2  '>
<div className='lg:relative overflow-x-clip'>
<div className='  bg-[#DBEFFA] rounded-xl w-[450px]    h-[225px] lg:block hidden '> </div>
<div className='lg:absolute lg:left-10  lg:top-5 '>
<img className='  lg:w-[480px] w-full h-[200] rounded-xl' src={img3} alt="" />

</div>
</div>
                </section>
                {/* section 2 */}
                <section className='lg:w-6/12 w-full lg:order-2 order-1 '>
                <h1 className='text-[#00A7E1]  text-[15px] font-bold font-["HubotSans-Regular"]'>OUR PRIORITY</h1>
                <h2 className="text-[30px] font-bold font-['HubotSans-Regular']  text-[#000]">Our clients are our 
priority</h2>
        <p className=" text-[15px]  my-3 font-semibold font-['HubotSans-Regular'] text-justify text-[#000] "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
        aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
        <div>
          <button className="text-white px-3 py-1 rounded-md  custom">
            Contact
          </button>
        </div>
                </section>
            </div>
        </main>
    </>
  )
}

export default Ourclients