import Blogsdetailimg2 from '../../Images/blogsdetailimg1.png'
const Blogsdetail = () => {
  return (
    <>
        <main className='w-full lg:px-20 mt-20'>

        <div>
   <h1 className='pt-8  lg:px-0 px-4  pb-2  font-bold text-[#000] font-["HubotSans-Regular"] text-[25px]  '>
   Hiring Offshore Developers – Mistakes And Key Steps to Avoid
        </h1>

        <div className=" flex  lg:justify-start justify-center lg:px-0 px-4">
          <h1 className="font-semibold text-[20px] font-['HubotSans-Regular'] mr-4 ">
          Monday, January 07 2023 
          </h1>
          <h2 className="w-[20px] h-[50%]  font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="30"
              viewBox="0 0 2 30"
              fill="none"
            >
              <path d="M0.766846 0.25V29.25" stroke="#707070" />
            </svg>
          </h2>
          <h3 className="font-semibold text-[20px]  font-['HubotSans-Regular'] text-[#00A7E180]">
          By Muhammad Haseeb
          </h3>
        </div>
<p className=' lg:px-0 px-4 text-[16px] text-justify font-medium py-4 font-["HubotSans-Regular"]'>Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lect
us dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
 arcu neque amet. Amet metus pellentesque eget scelerisque fringilla
. Mattis ut sed eget dui suspendisse est gravida vitae quam. Proin sem 
nunc at sit ac sit lacus interdum. Velit in eu nunc nisi. Nunc adipiscing
 eget arcu egestas tellus gravida ac vitae. Et sit in habitant dolor in morbi.
  Cursus eu id egestas dis pulvinar vulputate pharetra enim. Nec faucibus impe
  rdiet nisl penatibus at metus. Integer sit ac morbi cursus enim tristique. Morbi 
  volutpat lacus suspendisse diam egestas sed tincidunt.</p>
   
   <div className='border-1 border-red-700 lg:mx-0 mx-4'>
    <img className='w-full h-72 object-cover rounded-xl' src={Blogsdetailimg2} alt="" />
   </div>
        </div>

        </main>
    </>
  )
}

export default Blogsdetail