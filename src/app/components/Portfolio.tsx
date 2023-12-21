'use client'
import React, { useState } from 'react';
import 'animate.css';
const projectsData = [
  { id: 1, title: 'Project 1', category: 'all' },
  { id: 2, title: 'Card Project', category: 'cards' },
  { id: 3, title: 'Web Application', category: 'web' },
  { id: 4, title: 'App Project', category: 'apps' },
  { id: 5, title: 'iprofile', category: "all"},
  { id: 6, title: 'my-card', category: "cards"}

  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = projectsData.filter((project) =>
    selectedCategory === 'all' ? true : project.category === selectedCategory
  );

  return (
    <div className='px-4 lg:px-32 py-0 w-full animate__animated animate__backInDown'>
      <div>
        <h2 className='text-2xl font-semibold py-4 underline'>Portfolio</h2>
        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quidem vitae consequuntur repellat expedita dolorem temporibus, vel commodi repellendus neque.</p>
      </div>
      <div className="flex justify-center space-x-4 p-4">
        <button
          className={`${
            selectedCategory === 'all' && 'bg-blue-500 text-white rounded-lg' 
          } px-4 py-2`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={`${
            selectedCategory === 'cards' && 'bg-blue-500 text-white rounded-lg'
          } px-4 py-2`}
          onClick={() => setSelectedCategory('cards')}
        >
          Cards
        </button>
        <button
          className={`${
            selectedCategory === 'web' && 'bg-blue-500 text-white rounded-lg'
          } px-4 py-2`}
          onClick={() => setSelectedCategory('web')}
        >
          Web
        </button>
        <button
          className={`${
            selectedCategory === 'apps' && 'bg-blue-500 text-white rounded-lg'
          } px-4 py-2`}
          onClick={() => setSelectedCategory('apps')}
        >
          Apps
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 p-4 rounded-md shadow-md"
          >
            <h2 className="text-lg font-bold mb-2">{project.title}</h2>
            {/* Add more project details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
