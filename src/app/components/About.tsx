import React from 'react'
import Image from 'next/image'
import AboutI from "@/app/images/about.png"
import 'animate.css';
const About = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='lg:px-32 py-40 lg:py-0 animate__animated animate__backInDown'>
      <h2 className='text-xl lg:text-2xl font-semibold px-4 md:py-4 underline'>About</h2>
      <p className='lg:py-4 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem cumque inventore deleniti est reprehenderit aut soluta maxime, magni excepturi asperiores quod? Facere modi quidem distinctio! Hic officia est earum? Libero dolorum nam quidem ipsum velit tempora esse dignissimos unde nulla, non debitis harum fuga consequuntur voluptatem omnis odit qui!</p>
      </div>
      <div className='flex lg:px-32 lg:py-10 animate__animated animate__backInLeft'>
        <div className='px-4'>
        <Image src={AboutI} alt='' height={400} width={400} className='rounded-full'></Image>
        </div>
        <div className='animate__animated animate__backInRight'>
          <h2 className='text-xl px-4 lg:text-2xl font-semibold lg:py-4'>
            UI/UX Designer & Web Developer.
          </h2>
          <p className='lg:py-4 px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, cupiditate.</p>
          <div className='px-4'>
            <ul>
              <li> <strong>Birthday:</strong> 1 May 1995</li>
              <li> <strong>Website:</strong> www.example.com</li>
              <li> <strong>Phone:</strong> +123 456 7890</li>
              <li> <strong>City:</strong> New York, USA</li>
              <li> <strong>Age:</strong> 30</li>
              <li> <strong>Degree:</strong> Master</li>
              <li> <strong>Email:</strong> email@example.com</li>
              <li> <strong>Freelance:</strong> Available</li>
            </ul>
          </div>
          <div>
            <p className='lg:py-4 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae numquam eum. Officiis facilis dolore porro. Temporibus sunt dicta consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About