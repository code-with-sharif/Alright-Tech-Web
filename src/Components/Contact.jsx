import  Footer  from "./Header/Footer";

const Contact = () => {
  return (
    <>
      <main className="mt-28">
        <div>
          <h1 className='py-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] text-center'>
            Tell us about your project
          </h1>
          <p className=' font-normal text-[#000] font-["HubotSans-Regular"] text-[20px] text-center px-4'>
            Share details of your project and we will join hands to deliver
            impactful solutions together{" "}
          </p>
        </div>
        <div className="w-full flex-wrap lg:flex-nowrap gap-8 lg:px-20 flex mt-16 ">
          <section className=" lg:w-6/12 w-full lg:px-0  px-4  ">
            <h1 className=' lg:w-8/12 w-full  font-bold text-[#000] font-["HubotSans-Regular"] text-[40px]'>
              Hello,there! we’ll be glad to here from you.
            </h1>

            <div className="my-10">
              <h1 className='font-semibold text-[#000] font-["HubotSans-Regular"] text-[20px]'>
                Phone
              </h1>
              <p className='font-normal text-[#000] font-["HubotSans-Regular"] text-[15px] mt-1'>
                642-084-3368
              </p>
            </div>

            <div>
              <h1 className='font-semibold text-[#000] font-["HubotSans-Regular"] text-[20px]'>
                Address
              </h1>
              <p className='font-normal text-[#000] font-["HubotSans-Regular"] text-[15px] mt-1'>
                508 Bridle Avenue Newnan, GA 30263
              </p>
            </div>
          </section>

          {/* section 2 */}
          <section className="lg:w-6/12 w-full   lg:px-0 px-4">
            <form className="max-w-md mx-auto bg-white rounded-md ">
              <div className="mb-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-1.5 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-1.5 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-1">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 p-1.5 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div className="mb-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-1.5 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                className="text-white px-3 py-1 rounded-md custom"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </button>
            </form>
          </section>
        </div>
        <Footer />
      </main>

    </>
  );
};

export default Contact;
