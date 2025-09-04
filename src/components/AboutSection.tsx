
import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
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
    <section id="about" className="section-container bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient 
            transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            About Me
          </h2>
          <div className={`h-1 w-20 bg-portfolio-blue mx-auto rounded-full
            transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Profile Image - 4 columns on md screens */}
          <div className={`md:col-span-4 transition-all duration-700 delay-400 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-portfolio-blue/10 p-3 mb-6">
              <img 
                src="/lovable-uploads/a6dc58bc-901a-4566-aeff-080234764a0b.png" 
                alt="Om Barot" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="text-center">
              <Button 
                className="modern-gradient text-white hover:opacity-90 transition-all duration-300 flex items-center gap-2 glow-effect"
                onClick={downloadResume}
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Resume Details - 8 columns on md screens */}
          <div className="md:col-span-8">
            <div className={`mb-8 transition-all duration-700 delay-600 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-4 text-portfolio-accent">Profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Software Developer with expertise in Python and Java, specializing in
                backend development. Experienced in working with Supabase, PostgreSQL, and
                SQL, building efficient and scalable database solutions. Skilled in modern
                frameworks such as Flask, Django, FastAPI, and Streamlit, with a strong
                focus on developing high-performance applications and APIs. Committed to
                writing clean, maintainable code and continuously learning new technologies.
                When I'm not coding or debugging other people's messes, I somehow find time to nurture plants (yes, they survive despite my coding schedule) and hit the gym (where I mostly contemplate algorithm optimization between sets).
              </p>

              
              <div className={`transition-all duration-700 delay-800 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-card p-6 rounded-xl shadow-sm mb-8 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Projects</h4>
                  <ul className="space-y-4">
                    <li className="transition-all hover:translate-x-1 duration-300">
                      <p className="font-medium">1) SMART BIN :-</p>
                      <p className="text-sm text-muted-foreground">
                        Presented at a hackathon, this project is a smart waste management system 
                        built using Java and Flutter, designed to optimize waste collection and disposal.
                      </p>
                    </li>
                    <li className="transition-all hover:translate-x-1 duration-300">
                      <p className="font-medium">2) STOCK WIZARD – AN EFFICIENT STOCK SCREENER(CURRENTLY WORKING):-</p>
                      <p className="text-sm text-muted-foreground">
                        Created with Python, this tool efficiently screens stocks based on various parameters, 
                        helping users make informed investment decisions. User experience for listing, purchasing, and managing groceries.
                      </p>
                    </li>
                    <li className="transition-all hover:translate-x-1 duration-300">
                      <p className="font-medium">3) WEATHER DATA VISUALIZATION :-</p>
                      <p className="text-sm text-muted-foreground">
                        Developed using Python and Streamlit, this app visualizes weather data, 
                        offering users interactive and insightful weather analytics.
                      </p>
                    </li>
                    <li className="transition-all hover:translate-x-1 duration-300">
                      <p className="font-medium">4) Gym Sphere - A Fullstack Gym Management Solutions (currently working)</p>
                      <p className="text-sm text-muted-foreground">
                        Currently in development. Admin site is ready. Developed with FastAPI, Supabase, HTML, CSS, JavaScript, PostgreSQL.
                        It offers a generalized app for solving all the gym management problems.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Contact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Phone:</span>
                      <span className="text-muted-foreground">9106237958</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Email:</span>
                      <a href="mailto:ombarot.dev@gmail.com" className="text-portfolio-blue hover:underline">
                        ombarot.dev@gmail.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">LinkedIn:</span>
                      <a href="https://www.linkedin.com/in/om-barot-232630338/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                        www.linkedin.com/in/om-barot-232630338/
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">GitHub:</span>
                      <a href="https://github.com/OM-8bit" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                        github.com/OM-8bit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default AboutSection;
