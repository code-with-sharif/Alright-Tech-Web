import img11 from "../../src/Images/portfolioimg1.png";
const Portfolio = () => {
  return (
    <>
      <main className="w-full lg:px-20 md:mt-40 mt-20 mx-auto">
        <div className="mx-4">
          <div className="w-full border flex flex-wrap md:flex-nowrap gap-6  h-auto pb-4 rounded-2xl shadow-xl bg-white opacity-100">
            <section className="md:w-6/12 w-full  lg:pt-16 pt-10 lg:pl-12 pl-4 ">
              <h1 className='  lg:px-0 px-4   pb-2  font-bold text-[#000] font-["HubotSans-Regular"] text-[25px]'>
                Alright Tech Company aims to invest in companies that provide
                highly innovative solutions
              </h1>
              <p className=' lg:px-0 px-4 pt-5 text-[25px] text-justify font-medium lg:mr-8 font-["HubotSans-Regular"]'>
                As a full-service digital designer, We work closely with our
                clients to define, design and develop transformative user
                experiences across all platforms and brand’s touchpoints.
              </p>
            </section>
            {/* section2 */}
            <section className=" md:w-6/12 w-full lg:pt-8 pt-4">
              <div>
                <img
                  className="bg-cover w-[500px] h-[400px] mx-auto "
                  src={img11}
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
