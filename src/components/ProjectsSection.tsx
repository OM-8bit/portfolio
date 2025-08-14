
import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Photo Background Remover & Passport Size Photo Maker",
    description: "Developed an enterprise-grade image processing application for AI-powered background removal and passport-size photo generation. Used FastAPI for backend API, Docker for deployment, TypeScript + React for frontend, and integrated AI-based segmentation with OpenCV for photo formatting.",
    technologies: ["FastAPI", "Docker", "TypeScript", "React"],
    githubLink: "https://github.com/OM-8bit/Passport_photo_maker"
  },
  {
    id: 2,
    title: "Weather Data Visualization App",
    description: "Created a weather data visualization tool with interactive charts and real-time weather data fetching.",
    technologies: ["Python", "Streamlit", "Data Visualization"],
    githubLink: "https://github.com/OM-8bit/Weather_Data_Visualization"
  },
  {
    id: 3,
    title: "SMART BIN",
    description: "Presented at a hackathon, this project is a smart waste management system built using Java and Flutter, designed to optimize waste collection and disposal.",
    technologies: ["Java", "Flutter", "IoT"]
  },
  {
    id: 4,
    title: "STOCK WIZARD",
    description: "Created with Python, this tool efficiently screens stocks based on various parameters, helping users make informed investment decisions. User experience for listing, purchasing, and managing groceries.",
    technologies: ["Python", "Data Analysis", "Financial APIs"]
  },
  {
    id: 5,
    title: "Gym Sphere",
    description: "A Fullstack Gym Management Solution (currently working). Admin site is ready, developed with FastAPI, Supabase, HTML, CSS, JavaScript, and PostgreSQL. Offers a generalized app for solving all gym management problems.",
    technologies: ["FastAPI", "Supabase", "PostgreSQL", "JavaScript"]
  }
];

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`project-card bg-card border border-border p-6 transition-all duration-700 delay-${index * 200} 
      hover:border-primary/50 hover:glow-effect group
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <h3 className="text-xl font-bold mb-2 text-gradient group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.githubLink && (
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-portfolio-accent transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          View on GitHub
        </a>
      )}
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
    <section id="projects" className="section-container bg-background" ref={sectionRef}>
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
