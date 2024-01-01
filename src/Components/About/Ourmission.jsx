import React from "react";
import img1 from "../../Images/missionimg1.png";
import missionimg2 from "../../Images/missionimg2.png";

const Ourmission = () => {
  const data = [
    {
      image: img1,
      text: "Top quality IT team",
    },
    {
      image: img1,
      text: "State of the art IT services ",
    },
    {
      image: img1,
      text: "Discount on all IT Services    ",
    },
    // Add more objects to the array as needed
  ];

  return (
    <>
      <main className="mt-28 w-full lg:px-20 px-4">
        <h2 className="text-[30px] font-bold font-['HubotSans-Regular'] text-center my-8 text-[#000]">
          Our Mission
        </h2>
        <div className="flex gap-4 lg:flex-row flex-col">
          <section className="lg:w-6/12 h-auto pb-4 w-full ">
            <div className="lg:mt-20">
              <h1 className='text-[#00A7E1] my-2 text-[15px] font-bold font-["HubotSans-Regular"]'>
                EXPERTS IN IT
              </h1>
              <h2 className="text-[30px] font-bold font-['HubotSans-Regular']  text-[#000]">
                Our Mission & Vision
              </h2>
              <p className=" text-[15px]  my-3 font-semibold font-['HubotSans-Regular'] text-justify text-[#000] md:pr-14 ">
                {" "}
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts
              </p>
            </div>

            <div className=" md:w-6/12 w-full mt-6">
              {data.map((item, index) => (
                <div key={index} className="  inline-flex gap-2 ">
                  <h1>
                    <img src={item.image} alt="" />{" "}
                  </h1>
                  <p className='text-[20px] font-bold font-["HubotSans-Regular"]'>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="lg:w-6/12 h-auto pb-4 w-full   overflow-x-clip">
          <div  className="lg:relative">
          <div className=" bg-[#FADBE2] w-[500px] h-[600px] float-right rounded-xl lg:block hidden "> </div>
              <div className=" w-full lg:absolute lg:-left-2 lg:top-14">
                {" "}
                <img className="w-full lg:w-[550px] h-[450px]" src={missionimg2} alt="" />
              </div>
          </div>
           
          </section>
        </div>
      </main>
    </>
  );
};

export default Ourmission;
