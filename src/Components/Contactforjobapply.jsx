import  { useState } from 'react'
import contactimg1 from '../Images/contactforjobimg1.png'
import  Footer  from './Header/Footer';
const Contactforjobapply = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        address: "",
        email: "",
        phoneNumber: "",
        qualification: "",
        experience: "",
        postAppliedFor: "",
        type: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, you can send the formData to your server or perform other actions
        console.log(formData);
      };

  return ( 
    <>
        <main className='w-full lg:px-20  lg:mt-20 mt-10'>
            <div  className='flex justify-center '>
                <img className='  mt-10' src={contactimg1} alt="" />

            </div>
<h1 className='py-5 font-bold text-[#000] font-["HubotSans-Regular"] text-[30px] text-center px-4'>Find Your Dream Job at Alright Tech</h1>
  <div className=''>
  <form onSubmit={handleSubmit} className="max-w-12/12 mx-auto bg-white p-6 rounded-md s mt-10">
      {/* <h1 className="text-2xl font-bold mb-4">Application Form</h1> */}

    
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {/* Name */}
              <div className="p-">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="p-">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Father's Name and Address */}
              <div className="">
                <label htmlFor="fatherName" className="block text-sm font-medium text-gray-600">
                  Father's Name
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="lg:col-span-3">
                <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="qualification" className="block text-sm font-medium text-gray-600">
          Qualification
        </label>
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-600">
          Experience
        </label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

<option>Add experiance</option>
<option>One years</option>
<option>Two years</option>
<option>Three years </option>
<option>none</option>
</select>
      </div>

      <div>
        <label htmlFor="postAppliedFor" className="block text-sm font-medium text-gray-600">
          Post Applied For
        </label>
        <input
          type="text"
          id="postAppliedFor"
          name="postAppliedFor"
          value={formData.postAppliedFor}
          onChange={handleChange}
          className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-600">
          Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
</div>


<>
  {/* Hello world */}
  
  <p className='text-[#000] text-sm font-["HubotSans-Regular"] pl-2 pb-1 mt-8'>Upload Your Resume</p>
  <div className="flex items-center justify-center w-full">
    <label
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="w-6 h-6 mb-2 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input id="dropzone-file" type="file" className="hidden" />
    </label>
  </div>
</>

{/* text area */}

<>
  <label
    htmlFor="message"
    className="block mt-8 text-sm font-medium text-gray-900 dark:text-white"
  >
    Write something about yourself :
  </label>
  <textarea
    id="message"
    rows={4}
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Write your thoughts here..."
    defaultValue={""}
  />
</>

<div className='flex justify-center items-center  mt-10'>
        <button
  className="text-white px-3 py-1 rounded-md  custom"
  onClick={() => {
    // navigate("/contact");
    window.scrollTo({
      top: 0, // scroll to the top of the page
      behavior: "smooth", // smooth scroll animation
    });
  }}
>
Submit
</button>

        </div>
      </form>
  </div>


        </main>
        <Footer />    </>
  )
}

export default Contactforjobapply;