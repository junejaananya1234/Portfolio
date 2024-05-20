import React from 'react';

const ProjectCard = ({ image, title, description, liveLink, githubLink }) => {
  return (
    <div className="border p-5 rounded-md flex flex-col gap-2 w-[45%]">
      <img src={image} className="h-40 w-96" alt={title} />
      <h3 className="text-white text-left">{title}</h3>
      <p className="text-slate-400 text-[10px] text-left">{description}</p>
      <div className="flex gap-4">
        <span>
          <a href={liveLink}>
            <button className="text-white text-[12px] font-bold py-0.5 px-1 bg-gradient-to-r from-purple-700 via-sky-500 to-indigo-500 rounded-full shadow-inner">
              Live preview
            </button>
          </a>
        </span>
        <span>
          <a href={githubLink}>
            <button className="text-white text-[12px] font-bold py-0.5 px-1 bg-gradient-to-r from-purple-700 via-sky-500 to-indigo-500 rounded-full shadow-inner">
              Check on Github
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
