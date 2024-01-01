import logo from "../../Images/logo.png";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <main className="w-full  lg:px-20   py-8 bg-[#F2FFF8] mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:mx-0 mx-4">
          <section className=" w-full h-auto pb-4">
            <div className="">
              <img className="w-5/12 mb-4 " src={logo} alt="" />
            </div>
            <ul className="text-[#000] text-[15px] font-['HubotSans-Regular']  font-bold">
              <li className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                gravida posuere molestie ultrices
              </li>
            </ul>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 p-2 rounded-full">
                <a href="#" className="text-blue-500">
                  <FaFacebook />
                </a>
              </div>
              <div className="bg-gray-300 p-2 rounded-full">
                <a href="#" className="text-blue-500">
                  <FaLinkedin />
                </a>
              </div>
              <div className="bg-gray-300 p-2 rounded-full">
                <a href="#" className="text-blue-500">
                  <FaYoutube />
                </a>
              </div>
              <div className="bg-gray-300 p-2 rounded-full">
                <a href="#" className="text-blue-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </section>

          {/* section 2 */}

          <section className="w-full  h-auto lg:pl-12 pb-4">
            <div className="">
              <h2 className="mb-6 text-[18px] font-semibold  font-['HubotSans-Regular']">
                Company
              </h2>
              <ul className="text-[#000] text-[14px] font-['HubotSans-Regular']  font-bold ">
                <li className="mb-2">Home</li>
                <li className="mb-2">About us</li>
                <li className="mb-2">Products</li>
                <li className="mb-2">Blogs</li>
                <li className="mb-2">Testimonials</li>
              </ul>
            </div>
          </section>

          {/* section 3 */}

          <section className=" w-full h-auto  pb-4">
            <div className="">
              <h2 className="mb-6 text-[18px] font-semibold  font-['HubotSans-Regular']">
                support
              </h2>
              <ul className="text-[#000] text-[15px] font-['HubotSans-Regular']  font-bold">
                <li className="mb-2">Support carreer</li>
                <li className="mb-2">24h services</li>
                <li className="mb-2">Quick Cahat</li>
                <li className="mb-2">Setting and privacy</li>
              </ul>
            </div>
          </section>
          {/* section 4 */}

          <section className="  w-full h-auto pb-4">
            <div className="">
              <h2 className="mb-6 text-[18px] font-semibold  font-['HubotSans-Regular']">
                Contact Us
              </h2>
              <div>
                <form>
                  <div className="">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="number"
                      type="number"
                      placeholder="Enter your number"
                      required
                    />
                  </div>

                  <button className="text-white w-full lg:px-2   px-5 self-center  flex items-center mt-3 rounded-md  custom">
                    Request a call back
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* New section for "All Rights Reserved" and "Powered by Alright Tech 2023" */}
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          <p>&copy; 2023 All Rights Reserved. Powered by: Alright Tech</p>
        </div>
      </main>
    </>
  );
};

export default Footer;
