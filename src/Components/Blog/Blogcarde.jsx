import Blogsimg1 from "../../Images/blogsimg1.png";
import Blogsimg2 from "../../Images/blogsimg2.png";
import Blogsimg3 from "../../Images/blogsimg3.png";
import Blogsimg4 from "../../Images/blogsimg4.png";
import Blogsimg5 from "../../Images/blogsimg5.png";
import Blogsimg6 from "../../Images/blogsimg6.png";
import Blogsimg7 from "../../Images/blogsimg7.png";
import Blogsimg8 from "../../Images/blogsimg8.png";
import Blogsimg9 from "../../Images/blogsimg9.png";


const blogData = [
  {
    id: 1,
    title: "Hiring Offshore Developers – Mistakes And Key Steps to Avoid",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg1,
  },
  {
    id: 2,
    title: "5 Effective Ways Of Hiring Best Offshore Software Developers – Checklist",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg2,
  },

  {
    id: 3,
    title: "How to Choose Offshore Software Development Company?",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg3,
  },

  {
    id: 4,
    title: "Hiring Offshore Developers – Mistakes And Key Steps to Avoid",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg4,
  },
  {
    id: 5,
    title: "5 Effective Ways Of Hiring Best Offshore Software Developers – Checklist",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg5,
  },
  {
    id:6 ,
    title: "How to Choose Offshore Software Development Company?",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg6,
  },
  {
    id: 7,
    title: "Hiring Offshore Developers – Mistakes And Key Steps to Avoid",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg7,
  },
  {
    id: 8,
    title: "5 Effective Ways Of Hiring Best Offshore Software Developers – Checklist",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg8,
  },
  {
    id: 9,
    title: "How to Choose Offshore Software Development Company?",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    link: "#",
    image: Blogsimg9,
  },
  
  // Add more blog items as needed
];

const Blogcarde = () => {
  return (
    <>
      <main className="w-full lg:px-20 lg:mt-32 mt-20 mb-">
        <h1 className='font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] text-center pb-10'>
          Blogs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 lg:px-0 px-4 ">
          {blogData.map((blogItem) => (
            <div
              key={blogItem.id}
              className="w-full  bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="">
                <img
                  className="  w-full rounded-xl mx-auto lg:mt-2"
                  src={blogItem.image}
                  alt={`Blog ${blogItem.id}`}
                />
              </div>

              <div className="p-5">
                <h5 className="font-bold text-[#000] font-['HubotSans-Regular'] text-[20px] ">
                  {blogItem.title}
                </h5>

                <p className="mb- font-normal text-[#000] font-['HubotSans-Regular'] text-[20px] text-justify">
                  {blogItem.content}
                </p>
                <a
                  href={blogItem.link}
                  className="inline-flex items-center  py-1 font-bold text-[#000] font-['HubotSans-Regular'] text-[20px]"
                >
                  See more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blogcarde;
