import React from 'react'
import Image from 'next/image'
import TestimonialImg from '@/app/images/about.png'
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <div className="px-4 lg:px-32 py-0 w-full">
        <div>
            <h2 className='text-2xl font-semibold py-4 underline animate__animated animate__fadeInDownBig'>
              Testimonials
            </h2>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis beatae, saepe hic impedit cumque reiciendis placeat! Beatae, iste? Odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem tenetur corporis praesentium soluta inventore illo! Libero soluta autem laudantium?</p>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
            <div className='bg-gray-600 rounded-md py-2 px-2 shadow-lg'>
                <i className=''><q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis iure inventore, fugit iste voluptatum saepe eveniet quidem sed optio voluptates.</q></i>
                <div className='flex justify-center py-4'>
                <Image src={TestimonialImg} alt='TestimonialImg' width={80} height={80} className='rounded-full'></Image>
                </div>
                <div className='py-4'>
                <h3 className='flex justify-center'>Name</h3>
                <h4 className='flex justify-center text-sm text-slate-300'>Designation</h4>
                </div> 
            </div>
            <div className='bg-gray-600 rounded-md py-2 px-2 shadow-lg'>
                <i className='shadow-lg'><q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis iure inventore, fugit iste voluptatum saepe eveniet quidem sed optio voluptates.</q></i>
                <div className='flex justify-center py-4'>
                <Image src={TestimonialImg} alt='TestimonialImg' width={80} height={80} className='rounded-full'></Image>
                </div>
                <div className='py-4'>
                <h3 className='flex justify-center'>Name</h3>
                <h4 className='flex justify-center text-sm text-slate-300'>Designation</h4>
                </div> 
            </div>
            <div className='bg-gray-600 rounded-md py-2 px-2 shadow-lg'>
                <i className='shadow-lg'><q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis iure inventore, fugit iste voluptatum saepe eveniet quidem sed optio voluptates.</q></i>
                <div className='flex justify-center py-4'>
                <Image src={TestimonialImg} alt='TestimonialImg' width={80} height={80} className='rounded-full'></Image>
                </div>
                <div className='py-4'>
                <h3 className='flex justify-center'>Name</h3>
                <h4 className='flex justify-center text-sm text-slate-300'>Designation</h4>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Testimonials