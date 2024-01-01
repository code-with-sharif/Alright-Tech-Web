import binners from "../../Images/binnerimg.png";
import reacticon from '../../Images/React-icon 1.png';
import laravel from '../../Images/laravel.png';
import flutter from '../../Images/flutter.png';
import adobexd from '../../Images/adobe xd.png';
import figma from '../../Images/figma.png';

const Binners = () => {
  const data = [
    {
      icon: reacticon,
      text: "React"
    },
    {
      icon: laravel,
      text: "Laravel"
    },
    {
      icon: flutter,
      text: "Flutter"
    },
    {
      icon: adobexd,
      text: "Adobe XD"
    }
    ,
    {
      icon: figma,
      text: "Figma"
    }
    // Add more items as needed
  ];

  return (
    <>
      <main className="w-full lg:px-20 gap-3 flex  lg:flex-row flex-col gap- h-auto pb-4 md:mt-28  mt-20 mx-auto">
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
      {/* section 3 */}
      <section className="py-5 w-full lg:px-20 ">
        <div className="py-2 flex  lg:justify-start justify-center lg:px-0 px-4">
          <h1 className="font-semibold text-[20px] font-['HubotSans-Regular'] mr-4 ">
            Featured in
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
          <h3 className="font-semibold text-[20px] font-['HubotSans-Regular'] text-[#00A7E180]">
            Trusted by tech leaders
          </h3>
        </div>

        <div className="flex flex-wrap lg:justify-start justify-center items-center gap-5 mt-3 ">
          {data.map((item, index) => (
            <div key={index} className="md:w-[8rem] w-full lg:mx-0 mx-4  h-16 bg-[#fff] border-2 flex flex-wrap justify-center items-center opacity-100 shadow-md  text-[#000]">
              <img src={item.icon} alt="no img" className="mr-2 w-2%" />
              <span className="text-[16px] font-bold font-['HubotSans-Regular']">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Binners;
