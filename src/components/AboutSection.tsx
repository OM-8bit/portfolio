import { useEffect, useRef, useState } from 'react';
import { Download, Code2, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Om_Barot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-container relative" ref={sectionRef}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className={`section-heading transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            About Me
          </h2>
          <div className={`section-divider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Image Section */}
          <div className={`lg:col-span-4 transition-all duration-700 delay-400 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="luxury-card group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="/lovable-uploads/a6dc58bc-901a-4566-aeff-080234764a0b.png" 
                  alt="Om Barot" 
                  className="w-full h-auto rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <Button 
                className="w-full futuristic-button flex items-center justify-center gap-3"
                onClick={downloadResume}
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:col-span-8 space-y-8">
            <div className={`transition-all duration-700 delay-600 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-primary w-6 h-6" />
                <h3 className="text-2xl font-light text-foreground tracking-wide">Profile</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Passionate Software Developer with expertise in Python and Java, specializing in
                backend development. Experienced in working with Supabase, PostgreSQL, and
                SQL, building efficient and scalable database solutions. Skilled in modern
                frameworks such as Flask, Django, FastAPI, and Streamlit, with a strong
                focus on developing high-performance applications and APIs. Committed to
                writing clean, maintainable code and continuously learning new technologies.
                When I'm not coding or debugging other people's messes, I somehow find time to nurture plants (yes, they survive despite my coding schedule) and hit the gym (where I mostly contemplate algorithm optimization between sets).
              </p>
            </div>

            <div className={`transition-all duration-700 delay-800 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="luxury-card">
                <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">●</span>
                  </div>
                  <h4 className="text-xl font-light text-foreground tracking-wide">Featured Projects</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    {
                      title: "SMART BIN",
                      desc: "Presented at a hackathon, this project is a smart waste management system built using Java and Flutter, designed to optimize waste collection and disposal."
                    },
                    {
                      title: "STOCK WIZARD – AN EFFICIENT STOCK SCREENER (CURRENTLY WORKING)",
                      desc: "Created with Python, this tool efficiently screens stocks based on various parameters, helping users make informed investment decisions."
                    },
                    {
                      title: "WEATHER DATA VISUALIZATION",
                      desc: "Developed using Python and Streamlit, this app visualizes weather data, offering users interactive and insightful weather analytics."
                    },
                    {
                      title: "Gym Sphere - A Fullstack Gym Management Solution (currently working)",
                      desc: "Admin site is ready. Developed with FastAPI, Supabase, HTML, CSS, JavaScript, PostgreSQL. It offers a generalized app for solving all the gym management problems."
                    }
                  ].map((project, idx) => (
                    <li key={idx} className="transition-all hover:translate-x-2 duration-300 group">
                      <p className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">{idx + 1}) {project.title}</p>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{project.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-1000 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="luxury-card">
                <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                  <Leaf className="text-accent w-5 h-5" />
                  <h4 className="text-xl font-light text-foreground tracking-wide">Contact</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="font-light text-muted-foreground min-w-[80px]">Phone:</span>
                      <span className="text-foreground">9106237958</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-light text-muted-foreground min-w-[80px]">Email:</span>
                      <a href="mailto:ombarot.dev@gmail.com" className="text-primary hover:text-accent transition-colors">
                        ombarot.dev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="font-light text-muted-foreground min-w-[80px]">LinkedIn:</span>
                      <a href="https://www.linkedin.com/in/om-barot-232630338/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors break-all">
                        om-barot-232630338
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-light text-muted-foreground min-w-[80px]">GitHub:</span>
                      <a href="https://github.com/OM-8bit" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                        OM-8bit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
