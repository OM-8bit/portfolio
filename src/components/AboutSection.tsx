
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

  return (
    <section id="about" className="section-container bg-white" ref={sectionRef}>
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
                src="/lovable-uploads/eee44f8b-8b53-4595-b646-7636af8ec34a.png" 
                alt="Om Barot" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-accent transition-colors duration-300 flex items-center gap-2"
                onClick={() => window.open("/Om_Barot_Resume.pdf", "_blank")}
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
              <p className="text-slate-700 leading-relaxed">
                Passionate Software Developer with expertise in Python and Java, specializing in
                backend development. Experienced in working with Supabase, PostgreSQL, and
                SQL, building efficient and scalable database solutions. Skilled in modern
                frameworks such as Flask, Django, FastAPI, and Streamlit, with a strong
                focus on developing high-performance web applications and APIs. Committed to
                writing clean, maintainable code and continuously learning new technologies.
              </p>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-800 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Education</h4>
                <ul className="space-y-4">
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">S.S.C (G.S.E.B)</p>
                    <p className="text-sm text-slate-600">2020 - 98.85 pr</p>
                  </li>
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">H.S.C (SCIENCE STREAM)</p>
                    <p className="text-sm text-slate-600">2022 - 58%</p>
                  </li>
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">B.TECH (COMPUTER SCIENCE)</p>
                    <p className="text-sm text-slate-600">2022-2026</p>
                    <p className="text-sm text-slate-600">Specialization: Data Science</p>
                    <p className="text-sm text-slate-600">CGPA: 9.0+</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Skills</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Programming Languages</p>
                    <p className="text-sm text-slate-600">Python, Java, JavaScript, TypeScript, C/C++</p>
                  </div>
                  <div>
                    <p className="font-medium">Web Development</p>
                    <p className="text-sm text-slate-600">React, Next.js, Flask, Django, FastAPI</p>
                  </div>
                  <div>
                    <p className="font-medium">Database</p>
                    <p className="text-sm text-slate-600">PostgreSQL, MySQL, MongoDB, Supabase</p>
                  </div>
                  <div>
                    <p className="font-medium">Tools & Others</p>
                    <p className="text-sm text-slate-600">Git, Docker, AWS, GCP, CI/CD</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`mt-8 transition-all duration-700 delay-1000 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm mb-8">
                <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Projects</h4>
                <ul className="space-y-4">
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">SMART BIN</p>
                    <p className="text-sm text-slate-600">
                      Presented at a hackathon, this project is a smart waste management system 
                      built using Java and Flutter, designed to optimize waste collection and disposal.
                    </p>
                  </li>
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">STOCK WIZARD – AN EFFICIENT STOCK SCREENER</p>
                    <p className="text-sm text-slate-600">
                      Created with Python, this tool efficiently screens stocks based on various parameters, 
                      helping users make informed investment decisions.
                    </p>
                  </li>
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">WEATHER DATA VISUALIZATION</p>
                    <p className="text-sm text-slate-600">
                      Developed using Python and Streamlit, this app visualizes weather data, 
                      offering users interactive and insightful weather analytics.
                    </p>
                  </li>
                  <li className="transition-all hover:translate-x-1 duration-300">
                    <p className="font-medium">Gym Sphere - A Fullstack Gym Management Solutions</p>
                    <p className="text-sm text-slate-600">
                      Currently in development. Developed with FastAPI, Supabase, HTML, CSS, JavaScript, PostgreSQL.
                      It offers a generalized app for solving all the gym management problems.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Contact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Phone:</span>
                      <span className="text-slate-600">9106237958</span>
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
                        om-barot-232630338
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">GitHub:</span>
                      <a href="https://github.com/OM-8bit" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                        OM-8bit
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-accent border-b pb-2">Interests & Hobbies</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="bg-white p-2 rounded shadow-sm text-center text-slate-700">Exploring new places</li>
                    <li className="bg-white p-2 rounded shadow-sm text-center text-slate-700">Workout</li>
                    <li className="bg-white p-2 rounded shadow-sm text-center text-slate-700">Reading</li>
                    <li className="bg-white p-2 rounded shadow-sm text-center text-slate-700">Problem Solving</li>
                    <li className="bg-white p-2 rounded shadow-sm text-center text-slate-700">Open Source</li>
                    <li className="bg-white p-2 rounded shadow-sm text-center text-slate-700">AI/ML</li>
                  </ul>
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
