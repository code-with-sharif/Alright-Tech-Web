const Part2 = () => {
  return (
    <>
      <main className='w-full lg:px-20'>
        <div>
          <h1 className='pt-8 lg:px-0 px-4 pb-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[25px]'>
            10 Common Mistakes to Avoid While Hiring Offshore Developers
          </h1>
          <p className='lg:px-0 px-4 text-[16px] text-justify font-medium py-1 font-["HubotSans-Regular"]'>
            Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
            dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
            arcu neque amet. Amet metus pellentesque eget scelerisque fringilla.
            Mattis ut sed eget dui suspendisse est gravida vitae quam. Proin sem
            nunc at sit ac sit lacus interdum. Velit in eu nunc nisi. Nunc
            adipiscing eget arcu egestas tellus gravida ac vitae. Et sit in
            habitant dolor in morbi. Cursus eu id egestas dis pulvinar vulputate
            pharetra enim. Nec faucibus imperdiet nisl penatibus at metus.
            Integer sit ac morbi cursus enim tristique. Morbi volutpat lacus
            suspendisse diam egestas sed tincidunt.
          </p>
        </div>
        <div>
          <h1 className='pt-8 lg:px-0 px-4 pb-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[25px]'>
            Focusing solely on cost:
          </h1>
          <p className='lg:px-0 px-4 text-[16px] text-justify font-medium py-1 font-["HubotSans-Regular"]'>
            Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
            dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
            arcu neque amet. Amet metus pellentesque eget scelerisque fringilla
          </p>
        </div>
        <div>
          <h1 className='pt-8 lg:px-0 px-4 pb-2 font-bold text-[#000] font-["HubotSans-Regular"] text-[25px]'>
            Focusing solely on cost:
          </h1>
          <p className='lg:px-0 px-4 text-[16px] text-justify font-medium py-1 font-["HubotSans-Regular"]'>
            Lorem ipsum dolor sit amet consectetur. Nulla et bibendum lectus
            dictum sed lacus dignissim dolor. Feugiat nulla aliquet quisque quam
            arcu neque amet. Amet metus pellentesque eget scelerisque fringilla
          </p>
        </div>
        <hr className='border-b-2 mx-4 mt-8' />

        {/* Bottom form */}
  <form className='grid grid-cols-12 gap-4 mt-16 mx-4 '>
   <div className='col-span-12 md:col-span-6 '>
      <label htmlFor='name' className='block text-sm font-medium pl-1 text-gray-600'>
        Name:
      </label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Enter your name'
        className='mt- p-1 w-full border rounded-md focus:outline-none focus:border-blue-500'
        required
      />
    </div>



    
   <div className='col-span-12 md:col-span-6 md:order-2 order-3'>
      <label htmlFor='message' className='block text-sm font-medium text-gray-600'>
        Message:
      </label>
      <textarea
        id='message'
        name='message'
        placeholder='Write your message here...'
        rows='4'
        className='mt- p-2 w-full border rounded-md focus:outline-none focus:border-blue-500'
        required
      />
    </div>
    <div className='md:col-span-6 col-span-12 md:order-3 order-2  md:-mt-24'>
      <label htmlFor='name' className='block text-sm font-medium text-gray-600'>
       Email:
      </label>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='Enter your email'
        className='mt-1 p-1 w-full border rounded-md focus:outline-none focus:border-blue-500'
        required
      />
    </div>
    <div className='col-span-6 order-4 '>
      <button
        type='submit'
        className=' text-white py-1 px-3 custom rounded-md '
      >
        Contact
      </button>
    </div>
     


  
  </form>





      </main>
    </>
  );
};

export default Part2;
