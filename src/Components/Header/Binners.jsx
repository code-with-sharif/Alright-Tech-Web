import binners from "../../Images/binnerimg.png";

const Binners = () => {
  return (
    <>
  
  <main className="w-full md:pl-8 gap-3 flex  lg:flex-row flex-col gap- h-auto pb-4 md:mt-28  mt-20 mx-auto">
        {/* first section */}
        <section className="lg:w-6/12 w-full  flex flex-col lg:justify-start justify-center lg:p-0 p-4  ">
          <h1 className="text-colorblack font-['HubotSans-Regular'] font- text-[60px] pr-2  ">
            {" "}
            Taking your Idea to Scale{" "}
          </h1>
          <p className="text-[18px] font-medium">
            Leverage a Software Development Company’s technological capability
            to transform your ideas into reality with the right engineering
            talent.
          </p>

          <div>
            <button className="text-white px-3 py-1 rounded-md  custom mt-4">
              {" "}
              Contact
            </button>
          </div>
        </section>

        {/* section 2 */}
        <section className="lg:w-6/12 w-full ">
          <div className="bg-cover bg-no-repeat flex  justify-center lg:pr-8 p-4 h-[348px]">
            {" "}
            <img src={binners} alt="" />
          </div>
        </section>

      
      </main>
      {/* <section className="w-full border-2 border-red-700"> 
      <span className="font-medium text-[25px] font-['HubotSans-Regular'] ">Featured in</span>     
        </section> */}


    </>
  );
};

export default Binners;
