import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Briefcase } from 'lucide-react';

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
      className={`luxury-card group hover:scale-[1.02] transition-all duration-700 delay-${index * 150}
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center 
        group-hover:bg-primary/20 transition-colors duration-500">
          <Briefcase className="text-primary w-5 h-5" />
        </div>
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      
      <h3 className="text-xl font-light mb-3 text-foreground group-hover:text-primary transition-colors duration-500 tracking-wide">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed font-light">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-xs border border-primary/20
            hover:bg-primary/10 transition-colors duration-300 font-light tracking-wide"
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
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-light tracking-wide group/link"
        >
          <Github className="w-5 h-5" />
          <span className="border-b border-primary/30 group-hover/link:border-accent/50 transition-colors">View on GitHub</span>
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
    <section id="projects" className="section-container bg-muted/20 relative" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Featured Projects
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className={`section-description transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            A curated selection of my work showcasing technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
