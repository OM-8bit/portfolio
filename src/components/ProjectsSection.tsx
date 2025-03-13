
import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "SMART BIN",
    description: "Presented at a hackathon, this project is a smart waste management system built using Java and Flutter, designed to optimize waste collection and disposal.",
    technologies: ["Java", "Flutter", "IoT"]
  },
  {
    id: 2,
    title: "STOCK WIZARD",
    description: "Created with Python, this tool efficiently screens stocks based on various parameters, helping users make informed investment decisions. User experience for listing, purchasing, and managing groceries.",
    technologies: ["Python", "Data Analysis", "Financial APIs"]
  },
  {
    id: 3,
    title: "WEATHER DATA VISUALIZATION",
    description: "Developed using Python and Streamlit, this app visualizes weather data, offering users interactive and insightful weather analytics.",
    technologies: ["Python", "Streamlit", "Data Visualization"]
  },
  {
    id: 4,
    title: "Gym Sphere",
    description: "A Fullstack Gym Management Solution (currently working). Admin site is ready, developed with FastAPI, Supabase, HTML, CSS, JavaScript, and PostgreSQL. Offers a generalized app for solving all gym management problems.",
    technologies: ["FastAPI", "Supabase", "PostgreSQL", "JavaScript"]
  }
];

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`project-card p-6 transition-all duration-700 delay-${index * 200} 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <h3 className="text-xl font-bold mb-2 text-portfolio-accent">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-container bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Projects
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
