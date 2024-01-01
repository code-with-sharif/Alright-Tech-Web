import React from 'react';
import  img1 from '../../Images/aboutteamimg1.jpg'
import  img2 from '../../Images/aboutteamimg2.jpg'
import  img3 from '../../Images/aboutteamimg3.jpg'
import  img4 from '../../Images/aboutteamimg4.jpg'

const AboutTeam = () => {
    const teamData = [
        {
          id: 1,
          img:img1 ,
          name: 'Muneeb Shah',
          role: 'Project Manager',
        },
        {
          id: 1,
          img:img2 ,
          name: 'Waqas Ahmad',
          role: 'Team Lead',
        },
        {
          id: 1,
          img:img3 ,
          name: 'Muneeb Shah',
          role: 'Project Manager',
        },
        {
          id: 1,
          img:img4 ,
          name: 'Imran Khan',
          role: 'Project Manager',
        },
        // Add more team members as needed
      ];
  return (
    <main className='w-full lg:px-20 px-4 lg:mt-40 mt-5'>
          <h2 className="text-[30px] font-bold font-['HubotSans-Regular'] text-center my-8 text-[#000]">Meet Our Talented Team Members</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
        {teamData.map((member) => (
          <div key={member.id} className=''>
            <img className='lg:w-[280px] w-full h-[250px] ' src={member.img} alt="img" />
            <h1 className='text-[20px] font-bold font-["HubotSans-Regular"]'>{member.name}</h1>
            <p className='text-[15px] font-["HubotSans-Regular"]'>{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutTeam;
