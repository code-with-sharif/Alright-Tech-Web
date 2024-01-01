import img1 from '../../Images/aboutimg1.png'
import img2 from '../../Images/aboutimg2.png'
const Abouthero = () => {
  return (
    <>
        <main className="mt-28 w-full lg:px-20 px-4">
<div className='flex md:flex-row flex-col lg:gap-2 gap-8'>
    <section className="lg:w-6/12 w-full lg:mt-12 ">
        <h1 className="text-[30px] font-bold font-['HubotSans-Regular']  text-[#000]">Alright Tech Pvt.Ltd.</h1>
        <p className=" text-[15px]  mt-3 font-semibold font-['HubotSans-Regular'] text-justify text-[#000] lg:pr-28 pr-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
        aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
    </section>
    {/* section 2 */}
    <section className=' lg:w-6/12 w-full flex md:flex-row flex-col  gap-3'>
<div>
    <img className='lg:w-[640px] w-full h-[420px]  rounded-3xl' src={img1} alt="" />
</div>
<div>
    <img className='lg:w-[640px] w-full h-[420px]  rounded-3xl lg:mt-14' src={img2} alt="" />
</div>
    </section>
</div>

        </main>
    </>
  )
}

export default Abouthero