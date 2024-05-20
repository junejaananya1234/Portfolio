import Project1 from '../../Images/Fitclub.png'
import Project2 from "../../Images/TedTalk.png";
import Project3 from "../../Images/MultiSearch.png"
import Project4 from '../../Images/Password.png'
import ProjectCard from './ProjectCard';
const Projects = () => {
  const projectData = [
    {
      image: Project1,
      title: 'Physical Health Website',
      description: 'Responsive HTML/CSS/ REACT website',
      liveLink: 'https://fitclub-livid.vercel.app/',
      githubLink: 'https://github.com/junejaananya1234/Fitclub',
    },
    {
      image: Project2,
      title: 'Ted Talk Website',
      description: 'A Complete static website using HTML/CSS',
      liveLink: 'https://aniket9411.github.io/TEDTALKS-Project/',
      githubLink: 'https://github.com/ANIKET9411/TEDTALKS-Project?tab=readme-ov-file',
    },
    {
      image: Project3,
      title: 'Multi-Search Webpage',
      description: 'A Dynamic Multi-search webpage using HTML/CSS, Javascript',
      liveLink: 'https://junejaananya1234.github.io/Multi_search-Project/',
      githubLink: 'https://github.com/junejaananya1234/Multi_search-Project',
    },
    {
      image: Project4,
      title: 'A Password Generate Webpage',
      description: 'A Simple react project for generating a random Password',
      liveLink: 'https://github.com/junejaananya1234/Password-Generator',
      githubLink: 'https://password-generator-delta-rouge.vercel.app/',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="h-[40%] w-[50%] flex-wrap">
        <h2 className="text-white tracking-wider text-3xl font-semibold mt-10 p-10">Projects</h2>
        <section className="flex gap-10 flex-wrap w-full">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;