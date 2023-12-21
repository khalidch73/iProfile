import React from 'react';
import 'animate.css';
interface Skill {
  name: string;
  percentage: number;
}

const Skills: React.FC = () => {
  const skillsData: Skill[] = [
    { name: 'HTML', percentage: 99 },
    { name: 'CSS', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Bootstrap', percentage: 70 },
    { name: 'TypeScript', percentage: 95 },
    { name: 'React', percentage: 90 },
    { name: 'Next.js', percentage: 92 },
    { name: 'Node.js', percentage: 93 },
    // Add more skills as needed
  ];

  const calculateBarLength = (percentage: number): string => {
    return `${percentage}%`;
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:px-32 px-4 py-0 w-full">
      <h2 className='text-2xl font-semibold py-4 underline animate__animated animate__zoomIn'>Skills</h2>
      <p className='py-4 animate__animated animate__zoomIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat vero non temporibus eos similique deleniti dignissimos voluptate! Tenetur, iste!</p>

      {skillsData.map((skill) => (
        <div key={skill.name} className="mb-4">
          <p className="text-lg font-semibold mb-2">{skill.name}</p>
          <div className="flex items-center">
            <div className="w-full lg:w-1/2 bg-gray-300 rounded-full h-6">
              <div
                className={`bg-blue-500 h-full rounded-full  animate__animated animate__zoomIn w-${calculateBarLength(
                  skill.percentage
                )}`}
              ></div>
            </div>
            <p className="ml-4">{skill.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
