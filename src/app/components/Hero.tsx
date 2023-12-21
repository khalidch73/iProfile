import React from 'react';
import Image from 'next/image';
import Iphoto from '@/app/images/iphoto.png';
import 'animate.css';
// https://animate.style/ source of animate.css
const Hero: React.FC = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row w-full h-screen lg:justify-center lg:items-center">
      <div className='animate__animated animate__fadeInTopLeft'>
        <Image src={Iphoto} alt='My Photo' width='500' height='100'></Image>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center px-4 font-serif">
          <h1 className="text-2xl lg:text-6xl font-bold lg:mb-4 animate__animated animate__fadeInRight">
            I am a Developer
          </h1>
          <p className="text-lg animate__animated animate__fadeInUpBig">
            Specialized in Full stack Web Application
          </p>
          {/* Add other content as needed */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
