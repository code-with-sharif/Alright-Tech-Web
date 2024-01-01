import TestimonialIcon1 from './Icon/testimonial-icon1';
import testimonialimg1 from '../Images/testimonialimg1.svg';
import testimonialimg2 from '../Images/testimonialimg2.svg';
import testimonialimg3 from '../Images/testimonialimg3.svg';
import Footer  from '../Components/Header/Footer';
import Pagination from './Pagination';
import TestimoialIcon2 from './Icon/testimoial-icon2';
import TestimoialIcon3 from './Icon/testimoial-icon3';
// import tes
const testimonialData = [
  {
    id: 1,
    img:testimonialimg1,
    name: 'Natalie Colin',
    icon:<TestimonialIcon1 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 2,
    img:testimonialimg2,
    name: 'Natalie Colin',
    icon:<TestimoialIcon2 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 3,
    img:testimonialimg3,
    name: 'Natalie Colin',
    icon:<TestimoialIcon3 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 4,
    img:testimonialimg1,
    name: 'Natalie Colin',
    icon:<TestimonialIcon1 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 5,
    img:testimonialimg2,
    name: 'Natalie Colin',
    icon:<TestimoialIcon2 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 6,
    img:testimonialimg3,
    name: 'Natalie Colin',
    icon:<TestimoialIcon3 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 7,
    img:testimonialimg1,
    name: 'Natalie Colin',
    icon:<TestimonialIcon1 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 8,
    img:testimonialimg2,
    name: 'Natalie Colin',
    icon:<TestimoialIcon2 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 9,
    img:testimonialimg3,
    name: 'Natalie Colin',
    icon:<TestimoialIcon3 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 10,
    img:testimonialimg1,
    name: 'Natalie Colin',
    icon:<TestimonialIcon1 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 11,
    img:testimonialimg2,
    name: 'Natalie Colin',
    icon:<TestimoialIcon2 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 12,
    img:testimonialimg3,
    name: 'Natalie Colin',
    icon:<TestimoialIcon3 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 13,
    img:testimonialimg1,
    name: 'Natalie Colin',
    icon:<TestimonialIcon1 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 14,
    img:testimonialimg2,
    name: 'Natalie Colin',
    icon:<TestimoialIcon2 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 15,
    img:testimonialimg3,
    name: 'Natalie Colin',
    icon:<TestimoialIcon3 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 16,
    img:testimonialimg1,
    name: 'Natalie Colin',
    icon:<TestimonialIcon1 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 17,
    img:testimonialimg2,
    name: 'Natalie Colin',
    icon:<TestimoialIcon2 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  {
    id: 18,
    img:testimonialimg3,
    name: 'Natalie Colin',
    icon:<TestimoialIcon3 />,
    position: 'Founder, Alpha Group',
    text: 'Lorem ipsum dolor sit amet, consetetur sadscing elitr, sed diam nonumy eirmod',
  },
  // Add more testimonial data as needed
];

const TestimonialCard = () => {
  return (
    <>
     <main className='mt-20 lg:px-12'>
        <h1 className='py-5 w-1/2 mx-auto font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] text-center '>
          We Care About Our Customers Experience Too
        </h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 '>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className='lg:w-[400px] w-fulllg:mx-0 mx-4 h-auto pb-2 bg-white opacity-100 rounded-xl shadow-sm border'>
              <section className='inline-flex mt-5 pl-5 gap-5'>
                {testimonial.img && ( // Conditionally render the img tag
                  <div className='lg:-mt-2'>
                    <img className='rounded-full object-cover w-12' src={testimonial.img} alt='' />
                  </div>
                )}

                <div>
                  <h1 className='inline-flex items-center gap-2'>
                    <span className='text-[18px] font-bold text-[#000] font-["HubotSans-Regular"]'>{testimonial.name}</span>
                    <span className=''>
                      {testimonial.icon}
                    </span>
                  </h1>
                  <p className='text-[18px] font-medium text-[#000] font-["HubotSans-Regular"] pr-1'>{testimonial.position}</p>
                </div>
              </section>

              <div className='text-[##5E5E5E] text-[20px] font-medium font-["HubotSans-Regular"] px-5 mt-2 text-justify'>{testimonial.text}</div>
            </div>
          ))}
        </div>

        <span>
            <Pagination />
        </span>
      </main>
      <Footer />
    </>
  );
};

export default TestimonialCard;