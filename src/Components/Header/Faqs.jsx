import React, { useState } from 'react';

const Faqs = () => {
  const faqsData = [
    {
      id: 1,
      question: 'What is Flowbite?',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
    },
    {
      id: 2,
      question: 'Is there a Figma file available?',
      answer: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
    },
    {
      id: 3,
      question: 'What are the differences between Flowbite and Tailwind UI?',
      answer: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
    },
    {
        id: 4,
        question: 'What is Flowbite?',
        answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
      },
      {
        id: 5,
        question: 'Is there a Figma file available?',
        answer: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
      },
      {
        id: 6,
        question: 'What are the differences between Flowbite and Tailwind UI?',
        answer: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
      },

      {
        id: 7,
        question: 'Is there a Figma file available?',
        answer: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
      },
      {
        id: 8,
        question: 'What are the differences between Flowbite and Tailwind UI?',
        answer: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
      },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className='lg:mt-20 mt-5'>
      <h1 className='text-[30px] font-["HubotSans-Regular"] font-semibold text-center my-5'>Frequently Asked Questions</h1>
      {faqsData.map((faq) => (
        <div key={faq.id}>
          <h2
            id={`accordion-collapse-heading-${faq.id}`}
          >
            <button
              type="button"
              className={`flex items-center justify-between w-10/12 mx-auto p-3 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-lg gap-3`}
              data-accordion-target={`#accordion-collapse-body-${faq.id}`}
              aria-expanded={openAccordion === faq.id}
              aria-controls={`accordion-collapse-body-${faq.id}`}
              onClick={() => handleAccordionClick(faq.id)}
            >
              <span className='text-[#000]'>{faq.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${
                  openAccordion === faq.id ? 'rotate-180' : ''
                } shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${faq.id}`}
            className={`${
              openAccordion === faq.id ? '' : 'hidden'
            } aria-labelledby="accordion-collapse-heading-${faq.id}`}
          >
            <div className="p-5 w-10/12 mx-auto border">
              <p className="mb-2 text-[#000] dark:text-gray-400">
                {faq.answer}
              </p>
              {/* Add more content for each accordion item as needed */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
