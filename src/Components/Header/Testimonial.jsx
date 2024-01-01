// import React, { useState } from 'react';

// const Testimonial = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Paul Starr',
//       rating: 4,
//       comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur.',
//     },
//     // Add more testimonials as needed
//   ];

//   const handleIndicatorClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <main className="w-full py-20">
//         <section className="bg-[#F2FFF8]">
//           <div className="px-4 py-1 sm:px-6 lg:px-8 lg:py-16">
//             <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">Testimonials</h2>

//             <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 border-2 border-red-700 lg:px-10 relative">
//               {testimonials.map((testimonial, index) => (
//                 <div key={testimonial.id} className={`transform transition-transform ease-in-out duration-300 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}>
//                   <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
//                     <div className="flex items-center gap-4">
//                       <img
//                         alt="Man"
//                         src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
//                         className="h-14 w-14 rounded-full object-cover"
//                       />

//                       <div>
//                         <div className="flex justify-center gap-0.5 text-green-500">
//                           {[...Array(5)].map((_, i) => (
//                             <svg
//                               key={i}
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5"
//                               viewBox="0 0 20 20"
//                               fill="currentColor"
//                             >
//                               <path
//                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//                               />
//                             </svg>
//                           ))}
//                         </div>

//                         <p className="mt-0.5 text-lg font-medium text-gray-900">{testimonial.name}</p>
//                       </div>
//                     </div>

//                     <p className="mt-4 text-gray-700">{testimonial.comment}</p>
//                   </blockquote>
//                 </div>
//               ))}

//               {/* Indicators */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleIndicatorClick(index)}
//                     className={`w-3 h-3 rounded-full bg-red-700 ${index === activeIndex ? 'opacity-100' : 'opacity-50'} focus:outline-none transition-opacity duration-300`}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Testimonial;
