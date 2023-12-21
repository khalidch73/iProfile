import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import 'animate.css';
const Services = () => {
  return (
    <div className='px-4 lg:px-32 py-0 w-full'>
      <div>
        <h2 className='text-2xl font-semibold py-4 underline'>Facts</h2>
        <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quis quos. Vero accusamus autem voluptate quaerat, minima nesciunt dicta voluptates necessitatibus eos praesentium quisquam porro assumenda consequuntur minus. Iure molestiae similique excepturi omnis debitis delectus inventore officia libero qui, hic perferendis praesentium aperiam aspernatur harum cum quo, consectetur iusto facilis.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      {/* Box 1 - Happy Clients */}
      <div className="bg-blue-500 p-4 text-white rounded-md animate__animated animate__backInUp">
        <h2 className="text-xl font-bold mb-2">Happy Clients</h2>
        <p className="text-lg">1000+</p>
      </div>

      {/* Box 2 - Projects */}
      <div className="bg-green-500 p-4 text-white rounded-md animate__animated animate__backInUp">
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        <p className="text-lg">50+</p>
      </div>

      {/* Box 3 - Hours of Sports */}
      <div className="bg-yellow-500 p-4 text-white rounded-md animate__animated animate__backInUp">
        <h2 className="text-xl font-bold mb-2">Hours of Sports</h2>
        <p className="text-lg">200+</p>
      </div>

      {/* Box 4 - Hard Workers */}
      <div className="bg-red-500 p-4 text-white rounded-md animate__animated animate__backInUp">
        <h2 className="text-xl font-bold mb-2">Hard Workers</h2>
        <p className="text-lg">30+</p>
      </div>
      </div>
    </div>
  )
}

export default Services