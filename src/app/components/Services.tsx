import React from 'react';
import WebDevelopmentIcon from '@/app/icons/web.png'; // Replace with your actual icon paths
import FullStackIcon from '@/app/icons/web.png';
import DatabaseIcon from '@/app/icons/web.png';
import ApiIcon from '@/app/icons/api.png';
import DeploymentIcon from '@/app/icons/hosting.png';
import MaintenanceIcon from '@/app/icons/maintain.png';
import Image from 'next/image';
import 'animate.css';
const Services: React.FC = () => {
  const serviceData = [
    {
      title: 'Web Application Development',
      description: 'I specialize in designing and developing web applications using modern technologies and frameworks.',
      icon: WebDevelopmentIcon,
    },
    {
      title: 'Full-Stack Development',
      description: 'As a full-stack developer, I can work on both the front-end and back-end of your application, ensuring a seamless and integrated user experience.',
      icon: FullStackIcon,
    },
    {
      title: 'Database Design and Management',
      description: 'I have experience in designing and managing databases, ensuring efficient data storage and retrieval for your web applications.',
      icon: DatabaseIcon,
    },
    {
      title: 'API Development',
      description: 'I can create robust and scalable APIs to facilitate communication between different parts of your application or with external services.',
      icon: ApiIcon,
    },
    {
      title: 'Deployment and Hosting',
      description: 'I can assist in deploying your web applications to various hosting platforms, ensuring they are accessible to users globally.',
      icon: DeploymentIcon,
    },
    {
      title: 'Code Optimization and Maintenance',
      description: 'I offer code optimization services to improve the performance of your application and provide ongoing maintenance and support.',
      icon: MaintenanceIcon,
    },
  ];

  return (
    <div className="lg:px-32 px-4 py-0 w-full">
        <h2 className='text-2xl font-semibold py-4 underline animate__animated animate__fadeInDownBig'>Services</h2>
        <p className='py-4 animate__animated animate__fadeInTopRight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque officia cupiditate beatae numquam distinctio consectetur nemo soluta, odio eos!</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {serviceData.map((service, index) => (
        <div key={index} className="border rounded flex items-start overflow-hidden  animate__animated animate__zoomIn">
          <Image src={service.icon} alt={service.title} width={100} height={100} className='bg-white rounded-md'></Image>
          <div>
            <h3 className="lg:text-xl font-semibold px-2 py-2">{service.title}</h3>
            <p className='px-2 py-2'>{service.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Services;
